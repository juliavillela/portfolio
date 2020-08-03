document.querySelector("#menu-button").onclick =
function display_menu()
{
  var button = document.getElementById("menu-button");
  var menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
    button.style.color = "black";
  } else {
    menu.style.display = "block";
    button.style.color = "grey";
  }
}
