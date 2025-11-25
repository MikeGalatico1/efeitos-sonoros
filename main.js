function tocaSom(idElementoaudio){
const elementoaudio=document.querySelector(idElementoaudio);
if(elemento && elemento.localName==='audio'){
     elemento.play();
}else{
    console.log("Elemento não encontrado invalido");
}
}
const listaDeTecla=document.querySelector(",tecla");




for(let contador=0;contador<listaDeTeclas.lenth,contador++){
    const tecla=listaDeTecla[contador];
    const efeito=listaDeTeclas.classList[1];
    const idAudio='#som_${efeito}';
    tecla.onclick=function(){
       tocaSom(idAudio);
}

tecla.onkeydown=function(evento){
    if(evento.code==='Space')
    tecla.classList.add('ativa');
    }
}
    tecla.onkeydown=function(evento){
      if(evento.code==='Enter')
      tecla.classList.add('ativa');
    }
