class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="header">
    <div>
      <a href="/"> <img class="logo" src="assets/images/logo.svg" /></a>
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
  <nav>
  <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
      <li><a href="/index.html">Home</a></li>
      <li><div class="dropdown" id="services">
        <div onclick="toggleDropdownMenu()" class="dropbtn" id="services-text">Services 
          <i class="fa fa-caret-down"></a></i>
        </div>
        <div class="dropdown-content" id="dropdown-content">
        <div class="dropdwn-menu-container">
        <a href="/new-patients.html">New Patients</a>
        <a href="/newborn.html">Newborn Care</a>
        <a href="/well-visits.html">Well Visits</a>
        <a href="/sick-visits.html">Sick Visits</a>
        <a href="/annual-physical.html">Annual Physical</a>
        <a href="/work-school-travel-exams.html">Work, School, And Travel Exams</a>
        <a href="/sport-physicals.html">School & Sports Physicals</a>
        <a href="/immunizations-and-shots.html">Immunizations</a>
        <a href="/virtual-medical-services.html">Virtual Medical Services</a>
        <a href="/additional-services.html">Additional Services</a>
        <a href="https://www.aap.org/" target="_blank">Resources</a>
      </div>
    </div>
  </div>
  </li>       
      <li><a href="/staff.html">Our Staff</a></li>
      <li><a href="/insurance.html">Insurance & Payment</a></li>
      <li><a href="/contact.html">Contact</a></li>
    </ul>
  </nav>
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
  const servicesText = document.getElementById("services-text");
  if (dropdown.style.display == "block") {
    // if is dropdown displayed, hide it
    dropdown.style.display = "none";
    services.style.backgroundColor = "transparent";
    servicesText.style.color = "white";
  } else {
    // if is dropdown hidden, display it
    dropdown.style.display = "block";
    services.style.backgroundColor = "#e5e7eb";
    servicesText.style.color = "black";
  }
}
