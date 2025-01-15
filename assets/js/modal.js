class Modal extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!-- Modal HTML -->
    <div id="myModal" class="modal">
      <div class="modal__content">
        <span class="close">&times;</span>
        <h1>Interested in joining us at Honeygo Pediatrics?</h1>
        <p>Please give us a call today!</p>
        <p>
          <a class="in-text-link" href="tel:4109338101">410-933-8101</a>
        </p>
        <div class="modal__options">
          <a href="/new-patients.html">
            <i class="fa-regular fa-face-smile service-icon"></i>
            <p>We're accepting new patients</p>
          </a>
          <a href="/immunizations-and-shots.html">
            <i class="fa-solid fa-syringe service-icon"></i>
            <p class="service-p mont">
              We offer updated COVID-19 vaccinations and Flu vaccinations
            </p>
          </a>
          <a href="virtual-medical-services.html">
            <i class="fa-solid fa-house-laptop service-icon"></i>
            <p>Ask us about telehealth visits!</p>
          </a>
          <a href="/contact.html">
            <i class="fa-solid fa-thermometer service-icon"></i>
            <p class="service-p mont">
              Walk in hours for sick patients with acute / urgent care needs
            </p>
            <p class="service-p mont">
              <strong> 9 AM - 10 AM Monday - Friday </strong>
            </p>
            <p class="service-p mont">
              <strong> 9 AM - 10 AM Saturdays </strong>
            </p>
          </a>
          <a>
            <i class="fa-solid fa-check service-icon"></i>
            <p>Now Offering Behavioral Health to patients</p>
          </a>
        </div>
      </div>
    </div>
        `;
  }
}

customElements.define("hg-modal", Modal);

// Check if the modal has already been displayed in this session
const modalDisplayed = sessionStorage.getItem("modalDisplayed");
const lastModalTime = sessionStorage.getItem("lastModalTime");

const currentTime = new Date().getTime();
const timeSinceLastModal = currentTime - lastModalTime;

// Check if the modal container exists before attempting to show or close the modal
const modalContainer = document.getElementById("myModal");
const closeBtn = modalContainer ? modalContainer.querySelector(".close") : null;

if ((modalContainer && !modalDisplayed) || timeSinceLastModal > 3600000) {
  // Show the modal after 2 seconds
  setTimeout(() => {
    if (modalContainer) {
      modalContainer.style.display = "block";
      // Set a flag in session storage to indicate that the modal has been displayed
      sessionStorage.setItem("modalDisplayed", true);
      // Set the current timestamp as the last modal time
      sessionStorage.setItem("lastModalTime", currentTime);
    }
  }, 2000);
}

// Close the modal when the 'x' is clicked (if modal exists)
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    if (modalContainer) {
      modalContainer.style.display = "none";
    }
  });
}
