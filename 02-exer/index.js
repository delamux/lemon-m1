document.addEventListener(
  "DOMContentLoaded",
  function () {
    var actualTheme = document.body.className;
    var button = document.getElementById("change-theme");

    button.addEventListener("click", function () {
      changeTheme();
    });

    function changeTheme() {
      var theme = actualTheme === "dark-theme" ? "light-theme" : "dark-theme";
      document.body.className = document.body.className.replace(actualTheme, theme);
      actualTheme = theme;
    }
  },
  false
);
