var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function Speak() {
    document.getElementById("TextBox").innerHTML = "";
    Recognition.start();
}

Recognition.onresult = function run(Event) {
    console.log(Event);

    var Content = Event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("TextBox").innerHTML = Content;
    if (Content == "take my selfie") {
        console.log("Taking Selfie---");
        Announce();
    }
}

function Announce() {
    var Synth = window.speechSynthesis;
    SpeakData = "Taking your selfie in 5 seconds";
    var UtterThis = new SpeechSynthesisUtterance(SpeakData);
    Synth.speak(UtterThis);
    Webcam.attach(Camera);
    setTimeout(function () {
        TakeScreenshot();
        Save();
    }, 5000);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
Camera = document.getElementById("Camera");

function TakeScreenshot() {
    Webcam.snap(function (DataUrl) {
        document.getElementById("Selfie").innerHTML = "<img id='SelfieImage' src='" + DataUrl + "'>";
    })
}

function Save() {
    Link = document.getElementById("Link");
    SelfieImage = document.getElementById("SelfieImage").src;
    Link.href = SelfieImage;
    Link.click();
}