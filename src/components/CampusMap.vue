<script setup>
import { onMounted, ref } from 'vue'
import maplibregl from 'maplibre-gl'

const map = ref(null)
const showBuildings = ref(true)

const getBounds = (coordinates) => {
    let minLng = Infinity, maxLng = -Infinity;
    let minLat = Infinity, maxLat = -Infinity;

    coordinates.forEach((coord) => {
        const lng = coord[0];
        const lat = coord[1];
        if (typeof lng === 'number' && typeof lat === 'number') {
            minLng = Math.min(minLng, lng);
            maxLng = Math.max(maxLng, lng);
            minLat = Math.min(minLat, lat);
            maxLat = Math.max(maxLat, lat);
        }
    });

    return {
        centerLng: (minLng + maxLng) / 2,
        centerLat: (minLat + maxLat) / 2
    };
}

const toggleBuildings = () => {
    showBuildings.value = !showBuildings.value
    const visibility = showBuildings.value ? 'visible' : 'none'

    map.value.setLayoutProperty('building-fills', 'visibility', visibility)
    map.value.setLayoutProperty('building-outlines', 'visibility', visibility)
}

onMounted(() => {

    const bounds = [
        [-118.1888, 34.0616], // Southwest coordinates
        [-118.1561, 34.0769] // Northeast coordinates
    ]

    map.value = new maplibregl.Map({
        container: 'map',
        style: 'https://tiles.openfreemap.org/styles/liberty',
        center: [-118.16848, 34.06639],
        zoom: 16,
        maplibreLogo: true,
        maxBounds: bounds
    });


    let hoveredBuildingId = null;
    map.value.on('load', () => {

        map.value.addControl(new maplibregl.NavigationControl({
            visualizePitch: true,
            visualizeRoll: true,
            showZoom: true,
            showCompass: true
        }));
        map.value.getCanvas().style.cursor = 'crosshair'

        map.value.addSource('buildings', {
            type: 'geojson',
            data: '/campus.geojson',
            generateId: true
        });

        // 1st layer: outline
        map.value.addLayer({
            id: 'building-outlines',
            type: 'line',
            source: 'buildings',
            paint: {
                'line-color': '#000',
                'line-width': 2
            }
        });

        // 2nd layer: fill
        map.value.addLayer({
            id: 'building-fills',
            type: 'fill',
            source: 'buildings',
            paint: {
                'fill-color': '#ffce00',
                'fill-opacity': [
                    'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    1,
                    0.5
                ]
            }
        });

        // 3rd layer: labels for building names
        map.value.addLayer({
            id: 'building-labels',
            type: 'symbol',
            source: 'buildings',
            layout: {
                'text-field': [
                    'case',
                    ['has', 'wing'],
                    ['concat', ['get', 'buildingCode'], ' Wing ', ['get', 'wing']],
                    ['get', 'name']
                ],
                'text-size': 12,
                'text-anchor': 'center',
                'text-justify': 'center',
                'text-allow-overlap': false,
                'text-optional': true
            },
            paint: {
                'text-color': '#000',
                'text-halo-color': '#fff',
                'text-halo-width': 1.5
            }
        });

        const popup = new maplibregl.Popup({
            closeButton: false,
            closeOnClick: false
        });

        let currentFeatureCoordinates = undefined;
        map.value.on('mousemove', 'building-fills', (e) => {
            map.value.getCanvas().style.cursor = 'pointer';

            // popup on hover effect logic for building names
            const featureId = e.features[0].id;
            if (currentFeatureCoordinates !== featureId) {
                currentFeatureCoordinates = featureId;

                const name = e.features[0].properties.name || 'Unnamed Building';

                // calculate polygon center for Polygon, MultiPolygon, and Point
                const geometry = e.features[0].geometry;
                let centerLng, centerLat;

                if (geometry.type === 'Point') {
                    // Point: coordinates is [lng, lat]
                    centerLng = geometry.coordinates[0];
                    centerLat = geometry.coordinates[1];
                } else if (geometry.type === 'MultiPolygon') {
                    // MultiPolygon: coordinates[0][0] is the outer ring of the first polygon
                    const coordinates = geometry.coordinates[0]?.[0];
                    if (coordinates && coordinates.length > 0) {
                        const bounds = getBounds(coordinates);
                        centerLng = bounds.centerLng;
                        centerLat = bounds.centerLat;
                    }
                } else if (geometry.type === 'Polygon') {
                    // Polygon: coordinates[0] is the outer ring
                    const coordinates = geometry.coordinates[0];
                    if (coordinates && coordinates.length > 0) {
                        const bounds = getBounds(coordinates);
                        centerLng = bounds.centerLng;
                        centerLat = bounds.centerLat;
                    }
                }

                // Only show popup if we have valid coordinates
                if (centerLng && centerLat && !isNaN(centerLng) && !isNaN(centerLat)) {
                    popup.setLngLat([centerLng, centerLat]).setText(name).addTo(map.value);
                } else {
                    popup.setLngLat(e.lngLat).setText(name).addTo(map.value);
                }
            }

            // building hover effect logic
            if (e.features.length > 0) {
                if (hoveredBuildingId !== null) {
                    map.value.setFeatureState(
                        { source: 'buildings', id: hoveredBuildingId },
                        { hover: false }
                    );
                }
                hoveredBuildingId = e.features[0].id;
                map.value.setFeatureState(
                    { source: 'buildings', id: hoveredBuildingId },
                    { hover: true }
                );
            }
        });

        map.value.on('mouseleave', 'building-fills', () => {
            map.value.getCanvas().style.cursor = 'crosshair';

            currentFeatureCoordinates = undefined;
            popup.remove();

            // remove hover state
            if (hoveredBuildingId !== null) {
                map.value.setFeatureState(
                    { source: 'buildings', id: hoveredBuildingId },
                    { hover: false }
                );
            }
            hoveredBuildingId = null;
        });

    });
});
</script>

<template>
    <div class="relative h-full m-0 p-0">
        <div id="map" class="h-full"></div>

        <button @click="toggleBuildings"
            class="absolute top-4 left-4 bg-yellow-300 px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-500 transition-colors z-10 font-medium">
            {{ showBuildings ? 'Hide Buildings' : 'Show Buildings' }}
        </button>
    </div>
</template>

<style scoped>
:deep(.maplibregl-popup-content) {
    background-color: #000;
    color: #fff;
    padding: 8px 12px;
    border-radius: 0;

}


:deep(.maplibregl-popup-anchor-bottom .maplibregl-popup-tip) {
    border-top-color: #000;
}

:deep(.maplibregl-popup-anchor-top .maplibregl-popup-tip) {
    border-bottom-color: #000;
}

:deep(.maplibregl-popup-anchor-left .maplibregl-popup-tip) {
    border-right-color: #000;
}

:deep(.maplibregl-popup-anchor-right .maplibregl-popup-tip) {
    border-left-color: #000;
}

:deep(.maplibregl-popup) {
    pointer-events: none;
}

:deep(.maplibregl-popup-tip) {
    display: none;
}
</style>
