   var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    
    if(Content == "selfie")
    {
        console.log("taking selfie")
        speak();
    }
    
   
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Taking 3 selfie with intervals of 5 seconds ";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        takesnapshot();
    }, 5000);
    setTimeout(function(){
        takesnapshot2();
    }, 10000);
    setTimeout(function(){
        takesnapshot3();
    }, 15000);
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result1").innerHTML = '<img id="selfie_img" src= "'+data_uri+'">';
    });
}
function takesnapshot2(){
    Webcam.snap(function(data_uri){
        document.getElementById("result2").innerHTML = '<img id="selfie_img" src= "'+data_uri+'">';
    });
}
function takesnapshot3(){
    Webcam.snap(function(data_uri){
        document.getElementById("result3").innerHTML = '<img id="selfie_img" src= "'+data_uri+'">';
    });
}