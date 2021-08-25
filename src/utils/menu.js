export default function menu() {
  var menu = document.getElementById("filter")
  if (menu.className.indexOf("styles_open__22xac") != -1) {
    menu.classList.remove("styles_open__22xac");
  }
  else {
    menu.classList.add("styles_open__22xac");
  }
}