let textInput= document.querySelector('.input__text');
let outInput= document.querySelector('.container__output__span');

let wordsEncrypted = ['enter','imes','ai','ober','ufat'];
let messageElement;

function encrypt(){
    let textAssistant = textInput.value;
    if(!textAssistant==''){
        let newAssistant;
        newAssistant= textAssistant.replace(/\e/g,wordsEncrypted[0])
        .replace(/\i/g,wordsEncrypted[1])
        .replace(/\a/g,wordsEncrypted[2])
        .replace(/\o/g,wordsEncrypted[3])
        .replace(/\u/g,wordsEncrypted[4]);

        messageElement= document.querySelector('.container__output__span');
        messageElement.textContent = newAssistant;
        
    }
}
function decrypt(){
   
    console.log(messageElement);
    let newAssistant= messageElement.textContent;
    newAssistant= newAssistant.replace(/enter/g,"e")
    .replace(/imes/g,"i")
    .replace(/ai/g,"a")
    .replace(/ober/g,"o")
    .replace(/ufat/g,"u");
    console.log(newAssistant);
    messageElement= document.querySelector('.container__output__span');
    messageElement.textContent = newAssistant;

}

const botaoCriptografar = document.querySelector('.criptografar');
const botaoCopiar = document.querySelector('.copiar');

botaoCriptografar.addEventListener('click',function(){
    botaoCopiar.style.display = 'block';
});

function copied(){
    const spanOutput = document.querySelector('.container__output__span');
    const textToCopy = spanOutput.textContent;

    navigator.clipboard.writeText(textToCopy).then(function(){
        alert('Texto copiado com sucesso!')
    }, function(){
        console.log('erro');
    });
}
