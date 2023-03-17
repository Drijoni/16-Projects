function textToSpeech() {

    var msg = document.getElementById('text').value;
    var audio = new SpeechSynthesisUtterance();
    var language = document.getElementById('languages').value;
    audio.lang = language;
    audio.text = msg;
    audio.volume = 1;
    audio.rate = 1;
    audio.pitch = 1;

    window.speechSynthesis.speak(audio);

}



document.getElementById('info').onclick = () =>{
alert("Hello \nIf this tool isn't working, please close or refresh the browser and open it again. \nThanks!");
}