const inputName = document.querySelector("#input-name")
const buttonPlay = document.querySelector('#form-button')
const formJogo = document.querySelector('.form-jogo')


inputName.addEventListener('input', ()=>{
    if(inputName.value.trim().length >= 3){
        buttonPlay.removeAttribute("disabled")
    }else{
        buttonPlay.setAttribute('disabled', '')
    }
})

formJogo.addEventListener('submit', (e)=>{
    e.preventDefault();
    const nome = inputName.value;

    localStorage.setItem('usuario', nome);

    window.location.href = 'jogo-da-memoria-malu/paginas/jogo.html';
;



    
})


setTimeout(() => {
    const popup = document.querySelector('.popup-aniversario');
    if (popup) popup.remove();
  }, 5000);
  



