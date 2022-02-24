//Since there are no assets, we dont need a PreLoad function or we can keep it blank.

function setup() {
    canvas = createCanvas(700, 500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    tintColor = ""
}

function draw() {
    image(video, 0, 0, 700, 500)
    tint(tintColor)
}

function applyFilter() {
    tintColor = document.getElementById("input1").value
}

function take_snapshot() {
    save("FilteredImage.png")
}



