// Load the modal content from popupModal.html
function loadModal() {
  fetch("popupModal.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("modalContainer").innerHTML = data;

      const userConsent = getCookie("cookieConsent");
      if (userConsent !== "accepted") {
        // Show the modal if no consent or if the user rejected cookies
        showCookieModal();
      }

      document
        .getElementById("acceptCookies")
        .addEventListener("click", function () {
          setCookie("cookieConsent", "accepted", 365); // Set 'accepted' for 1 year
          hideCookieModal();
        });

      document
        .getElementById("rejectCookies")
        .addEventListener("click", function () {
          // Set 'rejected' but modal will reappear on refresh
          setCookie("cookieConsent", "rejected", 1); // Optional: You can set this to expire sooner
          hideCookieModal();
        });
    })
    .catch((error) => console.error("Error loading modal:", error));
}

// Function to set cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get cookie
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Show and hide modal functions
function showCookieModal() {
  const modal = document.getElementById("cookieModal");
  modal.style.display = "flex";
}

function hideCookieModal() {
  const modal = document.getElementById("cookieModal");
  modal.style.display = "none";
}

// Load the modal when the page loads
window.onload = loadModal;
