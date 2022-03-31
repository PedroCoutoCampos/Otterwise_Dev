const navbar = document.querySelector(".navbar")
const handleNavbar = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })
}
handleNavbar()
