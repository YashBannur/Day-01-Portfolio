

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}


console.log("JS Loaded");

const form = document.getElementById('contact-form');
const statusEl = document.getElementById('status');

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  statusEl.innerHTML = "⏳ Sending..."; // 👈 ADD THIS

  const data = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/mqegjnoe", {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      statusEl.innerHTML = "🚀 Got Your Message Will Contact You Soon";
      form.reset();
    } else {
      statusEl.innerHTML = "❌ Something went wrong!";
    }
  } catch (error) {
    statusEl.innerHTML = "❌ Network error!";
  }
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}