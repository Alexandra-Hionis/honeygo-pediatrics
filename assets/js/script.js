// ==============================================
// Swiper.js
// testimonials
var swiper = new Swiper(".mySwiper-testimonials", {
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
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
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

// Map2 script on contact page

// ==============================================
// Copyright

// Get the current year using the Date object
const currentYear = new Date().getFullYear();

// Find the <span> element by its id
const copyrightYearSpan = document.getElementById('copyright-year');

// Set the text content of the <span> to the current year
if (copyrightYearSpan) {
    copyrightYearSpan.textContent = currentYear;
}
