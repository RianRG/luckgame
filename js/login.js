const form = document.querySelector('form');
const bt = document.querySelector('form button')
const input = document.querySelector('form input')
input.value='';
input.addEventListener('input', ({ target }) =>{
    if(target.value.length >=4 && target.value.length <=10){
        bt.removeAttribute('disabled');
    } else{
        bt.setAttribute('disabled', '')
    }
})

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    localStorage.setItem('Jogador', input.value);
    window.location = 'jogo.html';
})
    
