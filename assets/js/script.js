$(document).ready(function () {
  feather.replace();
  // Toggle menu on click
  $("#menu-toggler").click(function () {
    toggleBodyClass("menu-active");
  });
  $(".menu-item").click(function () {
    closeMenu();
  });

  function toggleBodyClass(className) {
    document.body.classList.toggle(className);
  }

  function closeMenu() {
    document.body.classList.remove("menu-active");
  }
});
