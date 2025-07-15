const ScrollToSection = () => {
  console.log("Kliknięto przycisk! ✅");

  const section = document.getElementById("scrollAbout-section");
  console.log("Znaleziony element:", section);

  if (section) {
    const yOffset = -150;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    console.log("Scroll");
  } else {
    console.warn("Nie znaleziono sekcji");
  }
};

export default ScrollToSection;
