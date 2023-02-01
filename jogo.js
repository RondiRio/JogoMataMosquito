
var largura = 0 , altura = 0, vidas =1, tempo = 30, nivel = window.location.search, criaMosquitoTempo = 1500;

nivel = nivel.replace('?', '')

if(nivel === 'normal')
{
    criaMosquitoTempo
}
if(nivel === 'dificil')
{
    criaMosquitoTempo = 1000
}
if(nivel === 'kratos')
{
    criaMosquitoTempo = 100
}
function ajusteTamanhoJogo(){
     altura = window.innerHeight
     largura = window.innerWidth
    // return altura, largura;
    // console.log(altura + '\n' + largura)
}
ajusteTamanhoJogo()

// function pausar(){
//     clearInterval(criaMosca)
//     clearInterval(cronometro)
    // fazer depois o pausa
    
// }
var cronometro = setInterval(function(){
    if(tempo <= 0)
    {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    }
    
    tempo -= 1
    document.getElementById('cronometro').innerHTML = tempo
}, 1000)


function positionRandomic()
{   
    if(document.getElementById('mosquito'))
    {
        
        document.getElementById('mosquito').remove()
        if(vidas > 3)
       {
        
            window.location.href = 'fimdejogo.html'
       }else{
        document.getElementById('v' + vidas).src='imagens/coracao_vazino.png'
        vidas++
       }
        
       
       

    }


    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90


    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY


    console.log(posicaoX + '\n' +posicaoY)


    var mosquito = document.createElement("img")
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function()
    {
        this.remove()
    }

    document.body.appendChild(mosquito)
    tamanhoAleatorio()
    

}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    switch(classe){
        case 0:
            return 'mosquito1 '
        case 1:
            return ' mosquito2'
        case 2:
            return ' mosquito3'
    }
}
function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    switch(classe){
        case 0:
            return 'ladoA '
        case 1:
            return ' ladoB'
    }

}