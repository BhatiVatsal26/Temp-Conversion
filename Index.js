const input = document.getElementById("input");
const ctf = document.getElementById("ctf");
const ftc = document.getElementById("ftc");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
let convertedtemp;

submit.onclick = function(){
    if(ctf.checked){
        convertedtemp = (input.value * 1.8) + 32;
        result.textContent = `${convertedtemp} °F`;
    }
    else if(ftc.checked){
        convertedtemp = (input.value - 32) * 0.5;
        result.textContent = `${convertedtemp} °C`;
    }
    else{
        result.textContent = "Select One Option";
    }
}
