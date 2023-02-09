// ==============================================
// Swiper.js

var swiper = new Swiper(".swiper-container", {
  speed: 500,
  // effect: "fade",
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ==============================================
// Mapbox

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWhpb25pcyIsImEiOiJja3dvNWFmdnAydDQwMnZvemp6dTVjdXQyIn0.kBG6YtS3p5ev2voXWYbp-Q";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-76.47251, 39.37124], // starting position [lng, lat]
  zoom: 14,
});

const marker = new mapboxgl.Marker()
  .setLngLat([-76.47251, 39.37124])
  .addTo(map);

// large map on contact page. To reuse, changed variable to map2 and marker2 hacky fix
var map2 = new mapboxgl.Map({
  container: "map2",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-76.47251, 39.37124], // starting position [lng, lat]
  zoom: 14,
});

const marker2 = new mapboxgl.Marker()
  .setLngLat([-76.47251, 39.37124])
  .addTo(map2);
