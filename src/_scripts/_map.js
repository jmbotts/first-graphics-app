import * as L from "leaflet";
import harvard_park_homicides from "../_data/harvard_park_homicides";
console.log(harvard_park_homicides);

var map = L.map("map");
var sat = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF0aW1lcyIsImEiOiJjanJmNjg4ZzYweGtvNDNxa2ZpZ2lma3Z4In0.g0lYVIEs9Y5QcUOhXactHA"
);
sat.addTo(map);
map.setView([33.983265, -118.306799], 18);

harvard_park_homicides.forEach(obj => {
  L.circleMarker([obj.latitude, obj.longitude])
    .addTo(map)
    .bindTooltip(obj.first_name + " " + obj.last_name, { permanent: true });
});
