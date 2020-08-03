function display_gallery()
{
    let galleries = ["blue", "black", "solid", "water", "gifs"]
    let select = random_int(0, galleries.length)
    window.location.href = galleries[select] + ".html"
}

function random_int (min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

display_gallery();
