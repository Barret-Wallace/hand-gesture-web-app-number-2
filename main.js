Webcam.set({
    height: 300,
    width: 400,
    image_format: 'png',
    png_quality: '90'
});
var cam = document.getElementById("camera");
Webcam.attach("camera");
function Capture(){
    Webcam.snap(function (data_uri){
        document.getElementById("snapshot").innerHTML = '<img id="pic" src="'+ data_uri +'">';
    }
    )};
    console.log(ml5.version);
    var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/418E-xnnM/model.json",modelLoaded);
    function modelLoaded(){
        console.log("Model is Loaded");
    }