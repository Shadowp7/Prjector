var idk=window.webkitSpeechRecognition;
var cat=new idk();
function snipsnap(){
    console.log("hello");
    document.getElementById("voice").innerHTML="";
    cat.snipsnap();
    
}
cat.onresult=function(event){
    var content=event.results[0][0].transcript;
    document.getElementById("voice").innerHTML=content;
    speak();

}
function speak(){
    var river=window.speechSynthesis;
    speakdata=document.getElementById("voice").value;
    var utter=new SpeechSynthesisUtterance(speakdate);
    river.speak(utter);
    Webcam.attach(camera); 

}
Webcam.set({
    width:320,
    height:250,
    image_format:"jpeg",
    jpeg_quality:90
});
camera=document.getElementById("camera");