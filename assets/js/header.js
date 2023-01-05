class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="header">
    <div>
      <img class="logo" src="assets/images/logo.svg" />
    </div>
    <div class="header-left-content">
      <p><strong>There for you when you need us</strong></p>
      <p>
        Call us today:
        <a href="tel:4109338101"><strong>410-933-8101</strong></a>
      </p>
    </div>
  </section>

  <section class="navbar">
  <div>
  <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
      <li><a href="https://www.honeygopediatricsllc.com/index.html">Home</a></li>
      <li><div class="dropdown" id="services">
        <div onclick="toggleDropdownMenu()" class="dropbtn">Services 
          <i class="fa fa-caret-down"></a></i>
        </div>
        <div class="dropdown-content" id="dropdown-content">
        <div class="dropdwn-menu-container">
        <a href="https://www.honeygopediatricsllc.com/new-patients.html">New Patients</a>
        <a href="https://www.honeygopediatricsllc.com/newborn.html">Newborn Care</a>
        <a href="https://www.honeygopediatricsllc.com/well-visits.html">Well Visits</a>
        <a href="https://www.honeygopediatricsllc.com/sick-visits.html">Sick Visits</a>
        <a href="https://www.honeygopediatricsllc.com/annual-physical.html">Annual Physical</a>
        <a href="https://www.honeygopediatricsllc.com/work-school-travel-exams.html">Work, School, And Travel Exams</a>
        <a href="https://www.honeygopediatricsllc.com/sport-physicals.html">School & Sports Physicals</a>
        <a href="https://www.honeygopediatricsllc.com/immunizations-and-shots.html">Immunizations</a>
        <a href="https://www.honeygopediatricsllc.com/virtual-medical-services.html">Virtual Medical Services</a>
        <a href="https://www.honeygopediatricsllc.com/additional-services.html">Additional Services</a>
        <a href="https://www.aap.org/" target="_blank">Resources</a>
      </div>
    </div>
  </div>
  </li>       
      <li><a href="https://www.honeygopediatricsllc.com/staff.html">Our Staff</a></li>
      <li><a href="https://www.honeygopediatricsllc.com/insurance.html">Insurance & Payment</a></li>
      <li><a href="https://www.honeygopediatricsllc.com/contact.html">Contact</a></li>
    </ul>
  </div>
  <div class="phone">
    <a href="tel:4109338101"> 410-933-8101</a>
  </div>
  </section>

  <section>
  <div class="emergency-banner">In case of an emergency, dial 911</div>
  </section>

          `;
  }
}

customElements.define("main-header", Header);

function toggleDropdownMenu() {
  const dropdown = document.getElementById("dropdown-content");
  const services = document.getElementById("services");

  if (dropdown.style.display == "block") {
    // if is dropdown displayed, hide it
    dropdown.style.display = "none";
    services.style.backgroundColor = "transparent";
  } else {
    // if is dropdown hidden, display it
    dropdown.style.display = "block";
    services.style.backgroundColor = "#e5e7eb";
  }
  // hide and shoe on resize
  if (window.matchMedia("(max-width: 768px)").matches) {
    /* the viewport is less than or exactly 768 pixels wide */
  } else {
    /* the viewport is more than 768 pixels wide */
  }
}
