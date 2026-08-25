const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;


function diminuiTamanho(){
    if (tamanhoSenha > 1){
       // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentaTamanho(){
    if (tamanhoSenha < 20){
       // tamanhoSenha = tamanhoSenha+1;
       tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?#¨&+-.';

function geraSenha(){
    let alfabeto = '';

    if (checkbox[0].checked){
        alfabeto += letrasMaiusculas[
         Math.floor(Math.random() * letrasMaiusculas.length)
        ]
    }
    if (checkbox[1].checked){
        alfabeto += letrasMinusculas[
         Math.floor(Math.random() * letrasMinusculas.length)
        ]
    }
    if (checkbox[2].checked){
        alfabeto += numeros[
         Math.floor(Math.random() * numeros.length)


        ]
    }
    if (checkbox[3].checked){
        alfabeto += simbolos[
         Math.floor(Math.random() * simbolos.length)
        ]
    }

    if (alfabeto.length === 0) {
        campoSenha.value = '';
        return;
    }

    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++){
        let numeroAleatorio = Math.floor(Math.random() * alfabeto.length);
        senha += alfabeto[numeroAleatorio];
    }

    campoSenha.value = senha;
}

geraSenha();