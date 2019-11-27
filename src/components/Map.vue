<template lang="pug">
#map.absolute.absolute--fill
</template>

<script>
import mapboxgl from 'mapbox-gl';
import U from 'mapbox-gl-utils';
const d3 = require('d3-fetch');

// Replace this URL with your own Google Sheets link
const csvSource = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTotji1KdxoS6QjJdhlOs_s0kif_JIa6KEUX1qh_-qphRP1pr6s1hqqy_jOak861kEvTVLOm80Gknjg/pub?gid=0&single=true&output=csv&refresh=3';

function toPoints(rows) {
    return {
        type: 'FeatureCollection',
        features: rows.map((row, id) => ({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [+row.Longitude, +row.Latitude], // These are the column names
            },
            properties: {
                id,
                ...row,
                name: row.Name || row.name,
                category: row.Category || row.category
            }
        }))
    }
}

export default {
    async mounted() {
        // replace this Mapbox access token with your own
        mapboxgl.accessToken = 'pk.eyJ1Ijoic3RldmFnZSIsImEiOiJjazNndHRpZWUwNTFpM2lxbGdkeWN1ZnNlIn0.Gz2dgs3kZUiDrYA4OItnJA';
                                
        const map = new mapboxgl.Map({
            container: 'map',
            center: [144.96, -37.81],
            zoom: 14,
            style: 'mapbox://styles/stevage/ciz68fsec00112rpal5hjru07?refresh=1',
        });
        U.init(map, mapboxgl);
        window.map = map;
        window.Map = this;

        const points = toPoints(await d3.csv(csvSource));
        map.U.addGeoJSON('places', points);
        const hipsterLayers = map.getStyle().layers.map(l => l.id).filter(id => id.match(/hipster/))
        map.U.setLayerSource(hipsterLayers, 'places',null);
        // map.U.setData('hipster content', points);
        map.U.hoverPointer(hipsterLayers);
        map.U.clickPopup('hipster content', f => {
            const url = f.properties.url ? `<p class='url'><a target="_blank" href="${f.properties.url}">Website</a></p>` : '';
            return `
            <div>
                <h2>${f.properties.name}</h2>
                <p>${f.properties.description}</p>
                ${url}
            </div>
        `}, { maxWidth: 'none' });         
    }
}
import 'mapbox-gl/dist/mapbox-gl.css';

</script>

<style scoped>
</style>