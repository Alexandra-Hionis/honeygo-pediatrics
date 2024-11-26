// Import Swiper styles
import "swiper/swiper-bundle.css";

// Import Swiper functionality
import Swiper from "swiper/bundle";

var swiper = new Swiper(".mySwiper-testimonials", {
  speed: 500,

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
