noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;


function setup(){
    canvas = createCanvas(400,400);
    canvas.position(560,110);
    
    video = createCapture(VIDEO);
    video.size(550,500)

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function draw(){
 background("limegreen");
 document.getElementById("font_size").innerHTML = "font size of the text : "+difference+" px ";
 textSize(difference);
  fill("red");
  text("Samar",50,400);
}
function modelLoaded(){
    console.log("model is loaded");
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}