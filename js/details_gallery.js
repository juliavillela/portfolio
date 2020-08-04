function select(element) {
    let previous = document.getElementById("selected");
    if (previous) {
        close(previous);
    }
    element.id ="selected";
    let children = element.children;
    let summary = children[0];
    let text = summary.children[0];
    let image = summary.children[1];
    summary.className = "open";
    text.className = "description";
    element.scrollIntoView(true);
}

function close(previous) {
    let prev_children = previous.children;
    previous.id = "unset";
    previous.open = false;
    let children = previous.children;
    children[0].className = "square-image-container";
    children[0].children[0].className = "overlay";
}

// function align_top(id){
//     let element = document.getElementById(id);
//     element.scrollIntoView(true);
// }
