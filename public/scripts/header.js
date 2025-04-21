const toggleHeaderClass = () => {
  const header = document.getElementById("main-header");
  header.classList.toggle("header-fixed", window.scrollY > 40);
};

window.addEventListener("scroll", toggleHeaderClass);

window.addEventListener("DOMContentLoaded", toggleHeaderClass);
