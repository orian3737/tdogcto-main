var icon = document.getElementById("icon");

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")) {
        icon.src = "images/sun.png";
    } else {
        icon.src = "images/moon.png";
    }
}

const body = document.querySelector("body");
const toggleMode = document.querySelector(".toggle");

toggleMode.addEventListener("click", () => {
  let actualTheme = body.className;

  localStorage.setItem("Mytheme", actualTheme);
  body.classList.toggle("darkmode");
});
