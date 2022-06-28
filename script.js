function transform(num){
    let text=document.getElementById('speech');
    let msg=text.value;
    switch(num){
        case 1:
            text.style.textTransform="uppercase";
            break;
        case 2:
            text.style.textTransform="lowercase";
            break;
        case 3:
            text.style.textTransform="capitalize";
            break;
        case 4:
            text.value="";
            break;   
    }

}

function Audio(num){
    let msg=document.getElementById('speech').value;
    let speech=new SpeechSynthesisUtterance();
    speech.lang='en-US';
    speech.text=msg;
    speech.volume=1;
    speech.rate=0.4;
    speech.pitch=1;
    switch(num){
        case 1:
        window.speechSynthesis.speak(speech);
        break;
        case 2:
        window.speechSynthesis.pause(speech);
        break;
        case 3:
        window.speechSynthesis.resume(speech);
        break;
        default:
        window.speechSynthesis.cancel(speech);
    }
}


let txt=document.getElementById('speech');
txt.addEventListener('input',function(){
let char=txt.value;
console.log(char);
document.getElementById('char').innerHTML=char.length;
});
txt.addEventListener('input',function(){
let char=txt.value;
char=char.trim();
let word=char.split(" ");
let res=word.filter(function(elm){
    return elm!="";
});
document.getElementById('word').innerHTML=res.length;
});