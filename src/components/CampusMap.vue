<script setup>
import { onMounted, ref } from 'vue'
import maplibregl from 'maplibre-gl'

const map = ref(null)
const showBuildings = ref(true)

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
            data: '/campus-v0.geojson'
        });

        map.value.addLayer({
            id: 'building-fills',
            type: 'fill',
            source: 'buildings',
            paint: {
                'fill-color': '#ffce00',
                'fill-opacity': 0.5
            }
        });

        map.value.addLayer({
            id: 'building-outlines',
            type: 'line',
            source: 'buildings',
            paint: {
                'line-color': '#000',
                'line-width': 2
            }
        });


        map.value.on('mouseenter', 'building-fills', () => {
            map.value.getCanvas().style.cursor = 'pointer';
        });

        map.value.on('mouseleave', 'building-fills', () => {
            map.value.getCanvas().style.cursor = 'crosshair';
        });

        map.value.on('click', 'building-fills', (e) => {
            const feature = e.features[0];
            const props = feature.properties;

            console.log('Clicked building:', props);

            new maplibregl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(`
            <h3>${props.name || 'Unnamed Building'}</h3>
        `)
                .addTo(map.value);
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

<style scoped></style>
