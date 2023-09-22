nosex = 0;
nosey = 0;
leftwristx = 0;
rightwristx = 0;
difference = 0;


function preload(){}

function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
    video.position(50, 50);
    canvas = createCanvas(370, 370);
   canvas.position(615, 110);

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on("pose", gotPoses);
}

function draw(){
background("#808080");
document.getElementById("difference").innerHTML = "Width and Height of the FONT is "+difference+" px";
fill("#FF0000");
stroke("#000000");
textSize(difference);
text("ISHAAN", nosex, nosey);
}


function modelLoaded(){
    console.log("poseNet is intialized");
}

function gotPoses(results){
if(results.length > 0)
{
    console.log(results);
   nosex = results[0].pose.nose.x;
   nosey = results[0].pose.nose.y;
   console.log("nosex = "+nosex + "nosey = "+nosey); 
   leftwristx = results[0].pose.leftWrist.x;      
   rightwristx = results[0].pose.rightWrist.x;
   difference = floor(leftwristx - rightwristx);
   console.log("leftwristx = "+leftwristx + "rightwristx = "+rightwristx + "difference = "+difference);
}
}