console.log('Rian Gomes');
const form = document.querySelector('.quad');
form.querySelector('input').value='';
//pick nickname
const jogador = localStorage.getItem('Jogador');

//choosing a random number
let prop = 0;
function roleta(){
prop = parseInt(Math.random () * 50);
console.log(prop);
}
roleta();
let tries = 0;

//timer

const tempo = document.querySelector('.tempo h3 span');

setInterval(() =>{
tempo.innerHTML++;
}, 1000)

//game system
function sistema(){
    //main declarations
    const article = document.querySelector('article');
    const texto = document.querySelector('article span');
    const num = document.querySelector('.quad input').value;
    article.classList.add('animei');
    //system conditionals
    if(num>50 || num<0 || num==''){
        texto.innerHTML='Número Inválido!';
        document.querySelector('.quad input').value='';
        return;
    }

    if(num>prop && num>(prop+10)){
        texto.innerHTML='Tente um número menor! ('+num+')';
        tries++;
    } else if(num<prop && num<(prop-10)){
        texto.innerHTML='Tente um número maior! ('+num+')';
        tries++;
    } else if(num>prop){
        texto.innerHTML='Você está perto! Tente um número menor. ('+num+')';
        tries++;
    } else if(num<prop){
        texto.innerHTML='Você está perto! Tente um número maior. ('+num+')';
        tries++;
    } else{
        //lost game text
       if(tries==1){
        texto.innerHTML=`Parabéns, ${jogador}! Você acertou com ${tries} erro em ${tempo.innerHTML} segundos. (${num})`;
       } else{
        texto.innerHTML=`Parabéns, ${jogador}! Você acertou com ${tries} erros em ${tempo.innerHTML} segundos. (${num})`;
       }
       roleta();
       tries=0;
       tempo.innerHTML=0;

    }
    document.querySelector('.quad input').value='';
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    sistema();
});