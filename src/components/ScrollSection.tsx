const ScrollToSection = () => {

  const section = document.getElementById("scrollAbout-section");

  if (section) {
    const yOffset = -150;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  } else {
    console.warn("Nie znaleziono sekcji");
  }
};

export default ScrollToSection;
