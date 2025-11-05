let links = document.querySelectorAll("a");
let portfolioButtons = document.querySelectorAll("#portfolio-nav button")

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    for (const child of link.children) {
      child.src = "pics/arrowred.png";
    }
  });

  link.addEventListener("mouseleave", () => {
    for (const child of link.children) {
      child.src = "pics/arrow.png";
    }
  })
});

portfolioButtons.forEach(button => {
    button.addEventListener("click", () => {
      portfolioButtons.forEach(button => {button.classList.remove("selected")})
      button.classList.add("selected")
    })
})
