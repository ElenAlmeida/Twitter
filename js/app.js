let twittar= document.getElementById('twittar');
twittar.addEventListener("click", function (){    
    receiveData();
    clean();
});

function receiveData(){
    let text= document.getElementById('messenger').value;

    let newMsg= document.createElement('p')
        newMsg.style.backgroundColor='white';
        newMsg.style.width='50vw';
        newMsg.style.height= '3vw';
        newMsg.style.color='black';
        newMsg.style.marginLeft='25vw';
        newMsg.style.marginTop='2vw'
        newMsg.style.marginColor='red';
        newMsg.style.borderRadius= '1vw';
        newMsg.style.wordBrake='Brakeword';
    let MsgText= document.createTextNode(text);
    newMsg.appendChild(MsgText)
    let section= document.getElementById('public');
    let insertMsg= section.getElementsByTagName('p')[0];

    section.insertBefore(newMsg, insertMsg);    
    return text;
}

function clean(messenger, contagem){
    document.getElementById('messenger').value='';
    document.getElementById('contagem').textContent=140;
    document.getElementById('contagem').style.color='black';
}

function counter(){
    let totalOfCharacters= 139;    
    let typedCharacters= document.getElementById('messenger').value.length;
    let twittar= document.getElementById('twittar');
    let charactersRemaining= totalOfCharacters- typedCharacters;  

    document.getElementById('contagem').textContent= charactersRemaining;

    if (charactersRemaining >= 1 && charactersRemaining <=140) {
        document.getElementById('twittar').disabled='';
    }
    if(charactersRemaining <=10){
    document.getElementById('contagem').style.color= 'red';
    }
    else if(charactersRemaining <=20){
        document.getElementById('contagem').style.color= 'yellow';
    }
    else if( charactersRemaining <=140){
        document.getElementById('contagem').style.color= 'black';
    }
}


function bloquear(){
    let mensagem= document.getElementById('messenger').value.length;
    let totalOfCharacters= 140; 
    let conta= totalOfCharacters-mensagem;
    if(mensagem>=totalOfCharacters){
        document.getElementById('messenger').value=document.getElementById('messenger').value.substr(0,totalOfCharacters);        
    }
    if(mensagem>140){
        document.getElementById('twittar').disabled='disabled';
    }   
}

function adaptar(line){
    if (line.scrollHeight > line.offsetHeight){
      line.rows += 1;
    }
  }  
  












// function counter(){
//     let amountOfCharacter = 140;
//     let numberOfCharacter= document.getElementById('messenger').value.length;
//     let charactersEntered= amountOfCharacter - numberOfCharacter;
    
//     if (charactersEntered>=1){
//         document.getElementById('contagem').innerHTML=charactersEntered;
//         document.getElementById('twittar').disabled='';
//     }else{
//         document.getElementById('twittar').disabled='disabled';
//     }
// }




// document.body.querySelector('#messenger').addEventListener('input', function(){
//     let enableButton = document.body.querySelector('#twittar');
//     enableButton.disabled= this.value.length>=1 ? false : true;  
// });

  