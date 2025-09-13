import { somarPontos } from "./tempo.js"
import { endGame } from "./endGame.js"


const grid = document.querySelector('.grid')
const fotos = ['malu-1', 'malu-2', 'malu-3', 'malu-4', 'malu-5', 'malu-6', 'malu-7', 'malu-8', 'malu-9', 'malu-10']





const createTag = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className
    return element
}

let firstCard = '';
let secondCard = '';

const checkCards = () =>{
    const firstFoto = firstCard.getAttribute('data-foto');
    const secondFoto = secondCard.getAttribute('data-foto');
    if(firstFoto === secondFoto){
        firstCard.firstChild.classList.add('disable-card');
        secondCard.firstChild.classList.add('disable-card');
        audioAcho()
        somarPontos()
        firstCard = '';
        secondCard = '';

        endGame()
    }else{
        setTimeout(()=>{

            firstCard.classList.remove('revealCard');
            secondCard.classList.remove('revealCard')

            firstCard = '';
            secondCard = '';
        },1000)


        
    }
}

const revelaCard = ({ target }) =>{
    if(target.parentNode.className.includes('revealCard')){
        return;
    }

    if (firstCard === ''){
        target.parentNode.classList.add('revealCard')
        firstCard = target.parentNode;

    } else if (secondCard === ''){
        target.parentNode.classList.add('revealCard')
        secondCard = target.parentNode;

        checkCards()
    }
    
    
}


const createCard = (foto) => {
    const card = createTag('div', 'card');
    const front = createTag('div', 'face front');
    const back = createTag('div', 'face back');

    front.style.backgroundImage = `url('./fotosMalu/${foto}.jpeg')`


    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revelaCard)
    card.setAttribute('data-foto', foto);

    return card;
}



const loadGame = () =>{

    const fotosduplicadas = [...fotos, ...fotos]
    embaralhar(fotosduplicadas)

    

    fotosduplicadas.forEach((foto) =>{
        const card = createCard(foto)
        grid.appendChild(card)
    })
    
}


function embaralhar(array){
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }

    return array;
}



const audioMalu = new Audio('./audiosMalu/achoMalu.mpeg')


function audioAcho(){
    audioMalu.play()
}

window.onload = () => {

    loadGame()
}


