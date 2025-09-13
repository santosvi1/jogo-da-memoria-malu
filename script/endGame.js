import { pararTempo, pegarTempo } from "./tempo.js";


export function endGame(){
    const cardDisable = document.querySelectorAll('.disable-card');

    if(cardDisable.length === 20){
        pararTempo()
        const {minutos, segundos} = pegarTempo()

        alert(`Parabéns voce venceu seu tempo é : ${minutos}:${segundos}`)
    }
}