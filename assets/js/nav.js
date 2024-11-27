function toggleDropdownMenu() {
  const dropdown = document.getElementById("dropdown-content");
  const services = document.getElementById("services");
  const servicesText = document.getElementById("services-trigger");

  if (dropdown.style.display === "block") {
    // Hide dropdown
    dropdown.style.display = "none";
    services.style.backgroundColor = "transparent";
    servicesText.style.color = "white";
  } else {
    // Show dropdown
    dropdown.style.display = "block";
    services.style.backgroundColor = "#e5e7eb";
    servicesText.style.color = "black";
  }
}

const servicesDropdownTrigger = document.getElementById("services-trigger");
servicesDropdownTrigger.addEventListener("click", toggleDropdownMenu);
