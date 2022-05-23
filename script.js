const hamburgerToggler = document.querySelector(".hamburger")
const navlinksContainer = document.querySelector(".navlinks-container");

const toggleNav = () => {
    hamburgerToggler.classList.toggle("open")

    navlinksContainer.classList.toggle("open")
    const ariaToggle = hamburgerToggler.getAttribute ("aria-expanded") === "true" ? "false" : "true";
    hamburgerToggler.setAttribute("aria-expanded", ariaToggle)
}

hamburgerToggler.addEventListener("click", toggleNav)



