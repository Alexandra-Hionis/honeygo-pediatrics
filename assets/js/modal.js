// Check if the modal has already been displayed in this session
const modalDisplayed = sessionStorage.getItem("modalDisplayed");
const lastModalTime = sessionStorage.getItem("lastModalTime");

const currentTime = new Date().getTime();
const timeSinceLastModal = currentTime - lastModalTime;

if (!modalDisplayed || timeSinceLastModal > 3600000) {
  // Show the modal after 2 seconds
  setTimeout(() => {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";

    // Set a flag in session storage to indicate that the modal has been displayed
    sessionStorage.setItem("modalDisplayed", true);

    // Set the current timestamp as the last modal time
    sessionStorage.setItem("lastModalTime", currentTime);
  }, 2000);
}

// Close the modal when the 'x' is clicked
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", () => {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
});
