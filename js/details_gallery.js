// var project = document.getElementById("selected");
// document.getElementById("selected_test");
var visible_image = 0;

function select(element) {
    let this_project = element.parentNode;
    let previous = document.getElementById("selected");
    if (this_project.id === "selected") {
        return 0;
    }
    if (previous) {
        close_detail()
    }
    this_project.id = "selected";
    this_project.scrollIntoView();
}

function close_detail() {
    let project = document.getElementById("selected");
    project.id = "unset";
    project.open = false;
}


function next() {
    scroll(visible_image + 1);
}

function previous() {
    scroll(visible_image - 1);
}

function go_to(image) {
    let source = image.src
    let carroussel = project.children[1]
    let images = carroussel.children;
    let index = 0;
    for (let i = 0 ; i < images.length; i++) {
        if (source === images[i].src) {
            index = i;
            break;
        }
    }
    scroll(index);
}

function scroll(index) {
    let carroussel = project.children[1]
    let images = carroussel.children;
    let next_image = 0;
    if (index < 0) {
        next_image = images.length + index;
    } else {
        next_image = index % images.length;
    }
    images[next_image].scrollIntoViewIfNeeded(true);
    visible_image = next_image;
}
