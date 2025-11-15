<script setup>
import { onMounted, ref } from 'vue'
import maplibregl from 'maplibre-gl'

const map = ref(null)

onMounted(() => {
  
  map.value = new maplibregl.Map({
        container: 'map',
        style: 'https://tiles.openfreemap.org/styles/liberty',
        center: [-118.16848, 34.06639],
        zoom: 16,
        maplibreLogo: true
    });

})
</script>

<template>

    <div id="map" class="h-full m-0 p-0">
    </div>

</template>

<style scoped>

</style>
