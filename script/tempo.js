const nomePlayer = document.querySelector('#player-name');
let seconds = document.querySelector('.seconds');
let minutes = document.querySelector('.minutes');
let point = document.querySelector('.pontos');

let nome = localStorage.getItem('usuario');

if (nome){
    nomePlayer.textContent = 'Bem Vindo, ' + nome;  
}else{
    nomePlayer.textContent = "Nenhum nome Encontrado"
}

let segundos = 0;
let minutos = 0;

const temporizador = setInterval(()=>{
    segundos++

    if(segundos === 60){
        minutos++
        segundos = 0
    };

    seconds.textContent = segundos.toString().padStart(2, '0');
    minutes.textContent = minutos.toString().padStart(2, '0')
},1000)

let pontos = 0

export function somarPontos(){
    pontos++
    atualizarPlacar()

}

function atualizarPlacar(){
    if(point){
        point.textContent = `pontuação: ${pontos}`
    }
}


export function pararTempo(){
    clearInterval(temporizador)
}

export function pegarTempo(){
    return {minutos, segundos}
}





