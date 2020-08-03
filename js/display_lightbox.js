
//class 'gallery-img' for images in gallery
//#lightbox for lightbox parent container
//#lightbox_image for 1 single image tag inside #lightbox
//also # for button icons in build_navigation()

const gallery = [];
var length = 0;
var current_image = 0;
var lightbox = document.getElementById('lightbox');


//on page load, sets lightbox anchor to each image in gallery.
function set_listeners() {
    let images = document.getElementsByClassName('gallery-img');
    length = images.length;
    for (let n = 0; n < length; n++) {
        let image_src = images[n].src ;
        gallery.push(image_src);
        images[n].addEventListener("click", function(){ display_lightbox(n); });
    }
}

//on page load, sets event listeners for nav buttons and builds lightbox index.
function build_navigation() {

    //sets correct number of dots in index display
    let icon = document.getElementById('index-icon');
    for (let i = 0; i < length - 1; i++)
    {
        let clone = icon.cloneNode(true);
        document.getElementById('lightbox-index').append(clone);
    }
    //sets next button event
    let next = document.getElementById('lightbox-next');
    next.addEventListener("click", function(){ update_lightbox(current_image + 1); });
    //sets previous button event
    let prev = document.getElementById('lightbox-prev');
    prev.addEventListener("click", function(){ update_lightbox(current_image - 1); });
    //sets close event
    let close = document.getElementById('lightbox-close');
    close.addEventListener("click", close_ligthbox);
}

//sets lightbox width and height to current window inner width and height
function format_lightbox() {

    lightbox.style.width = (window.innerWidth + "px");
    lightbox.style.height = (window.innerHeight + "px");
}

//on image click - opens lightbox and calls necessary functions
function display_lightbox(index) {
    format_lightbox();
    update_lightbox(index);
    lightbox.style.display = "block";
}

function update_lightbox(index) {
    //loops through items in gallery
    if (index >= length) {
        index = index % length;
    } else if (index < 0) {
        index = length + index;
    }
    //updates index display
    let index_display = document.getElementById('lightbox-index').children;
    index_display[current_image].className = "far fa-circle";
    index_display[index].className = "fas fa-circle current-index";
    //updates image
    current_image = index;
    document.getElementById('lightbox-image').src = gallery[current_image];
}

function close_ligthbox() {
    lightbox.style.display = "none";
}

//on page load
set_listeners();
build_navigation();

window.onresize = format_lightbox;
