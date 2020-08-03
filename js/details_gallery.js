function select(element) {
    let previous = document.getElementById("selected");
    if (previous) {
        let prev_children = previous.children;
        prev_children[0].style.display = "block";
        previous.id = "unset";
        previous.open = false;
    }
    element.id ="selected";
    let children = element.children;
    children[0].style.display = "none";
}
