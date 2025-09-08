const inp=document.querySelector("#text-area")
const select=document.querySelector("#option")

const listen=document.querySelector("#btn")
let speech= new SpeechSynthesisUtterance();

let voices=[];

window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[0];
    
    voices.forEach((voice,i)=>(select.options[i]=new Option(voice.name,i)))
}
select.addEventListener("change",()=>{
    speech.voice=voices[select.value];
})

listen.addEventListener("click",()=>{
    if (inp.value.trim() === "") {
        alert("Please enter some text first!");
        return;
    }
    speech.text = inp.value;
    window.speechSynthesis.speak(speech);
})
