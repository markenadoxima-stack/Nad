const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      sec.classList.add("show");
    }
  });
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if(name === "" || email === "" || message === ""){
    alert("Please fill in all fields.");
    return;
  }

  alert("Message sent successfully!");
  form.reset();
});