function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

const sendButton = document.getElementById("sendButton");
if (sendButton) {
  sendButton.addEventListener("click", () => {
    alert("Received your message!");
  });
}