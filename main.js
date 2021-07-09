var nose_x=0;
var nose_y=0;
function preload(){
    clone_nose = loadImage('https://lh3.googleusercontent.com/proxy/GYOjWyGtjjkorqx-_cVPck2wUdxexQgZdwDuL4FKY33GfJsJpF9Yaf9bcE3y2UM6GTmCVje0VAMHmVhBg_0tnsg');
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300,300);
    pose_Net = ml5.poseNet(video, modelLoaded);
    pose_Net.on('pose', got_poses);
}
function modelLoaded(){
    console.log("Model Loaded !!");
}
function got_poses(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x-20;
        nose_y = results[0].pose.nose.y+15;
    }
}
function draw(){
    image(video,0,0,300,300);
    image(clone_nose, nose_x, nose_y, 50, 20)
}
function take_snapshot(){
    save('my_selfie_filter.png');
}