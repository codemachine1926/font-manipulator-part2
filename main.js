function setup() {
    canvas = createCanvas(500,380);
    canvas.position(700,140);

    Video = createCapture(VIDEO);
    Video.size(500,500);
    Video.position(40,80);

    start_pose = ml5.poseNet(Video,modelloaded);
    start_pose.on('pose',gotposes);
}
function modelloaded() {
    console.log("model is loaded");
}
function draw() {
    background("#7bfc03");
}
function gotposes(results) {
    if(results.length > 0) {
        console.log(results);
    }
}