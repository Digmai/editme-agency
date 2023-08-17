// // отобразить меню
(() => {
  const divElement = document.querySelector("#navBar");
  const divElementMob = document.querySelector("#menuToggle");

  const className = "none";

  const screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const isMobile = screenWidth < 1024;
  if (isMobile) {
    document.querySelector("#menuToggle").style.display = "block";
    divElement.classList.add(className); // Добавляем класс, если экран мобильный
  } else {
    document.querySelector("#menuToggle").style.display = "none";
    divElement.classList.remove(className); // Удаляем класс, если экран десктопный
  }
})();
const handleToggle = () => {
  const menuElement = document.querySelector("#menuElement");
  menuElement.classList.toggle("open");
};

const closeMenu = () => {
  const menuElement = document.querySelector("#menuElement");
  menuElement.classList.remove("open");
};

const checkedElement = document.querySelector("#checkedElement");
checkedElement.addEventListener("change", handleToggle);

const menuLinks = document.querySelectorAll(".burger-menu__links a");
menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
