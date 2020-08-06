var visible_image = 0;
var image_elements = [];
var image_count = 0;

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
    build_navigation(this_project)
    this_project.scrollIntoView();
}

function close_detail() {
    let project = document.getElementById("selected");
    project.id = "unset";
    project.open = false;
}

function build_navigation(project){
    let main = project.children[2];
    let carroussel = main.children[1];
    let container = carroussel.children[1];
    let images = container.children;
    let sources = [];
    for (let i = 0 ; i < images.length ; i++) {
        sources.push(images[i]);
    }
    image_elements = sources;
    image_count = sources.length;
}

function next() {
    scroll(visible_image + 1);
}

function previous() {
    scroll(visible_image - 1);
}

function go_to(image) {
    let source = image.src
    let index = 0;
    for (let i = 0 ; i < image_count; i++) {
        if (source === image_elements[i].src) {
            index = i;
            break;
        }
    }
    scroll(index);
}

function scroll(index) {
    let next_image = 0;
    if (index < 0) {
        next_image = image_count + index;
    } else {
        next_image = index % image_count;
    }
    image_elements[next_image].scrollIntoViewIfNeeded(true);
    visible_image = next_image;
}
