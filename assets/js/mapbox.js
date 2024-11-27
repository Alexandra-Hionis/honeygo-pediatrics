import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWhpb25pcyIsImEiOiJja3dvNWFmdnAydDQwMnZvemp6dTVjdXQyIn0.kBG6YtS3p5ev2voXWYbp-Q";

// Initialize the first map (always)
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-76.47251, 39.37124], // starting position [lng, lat]
  zoom: 14,
});

const marker = new mapboxgl.Marker()
  .setLngLat([-76.47251, 39.37124])
  .addTo(map);

// Check if the container for map2 exists before initializing the second map
const map2Container = document.getElementById("map2");
if (map2Container) {
  const map2 = new mapboxgl.Map({
    container: "map2",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-76.47251, 39.37124], // starting position [lng, lat]
    zoom: 14,
  });

  const marker2 = new mapboxgl.Marker()
    .setLngLat([-76.47251, 39.37124])
    .addTo(map2);
}
