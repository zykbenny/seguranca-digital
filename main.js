const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;
botoes[2].onclick = geraSenhaSegura;

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
function geraSenha(){
    let alfabeto = '';

    if (checkbox[0].checked){
        alfabeto += letrasMaiusculas;
    }
    if (checkbox[1].checked){
        alfabeto += letrasMinusculas;
    }
    if (checkbox[2].checked){
        alfabeto += numeros;
    }
    if (checkbox[3].checked){
        alfabeto += simbolos;
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
    classificaSenha(alfabeto.length);
    return senha;
}
function testarSenha(senha){
    if (
        senha.includes ("ABCDE")||
        senha.includes ("abcde")||
        senha.includes ("12345")
    ){
        return false;
    }
    return true;
}
function geraSenhaSegura(){
    let alfabeto = '';
    let senha = '';
    let senhaSegura = false;
    
    if (checkbox[0].checked) alfabeto += letrasMaiusculas;
    if (checkbox[1].checked) alfabeto += letrasMinusculas;
    if (checkbox[2].checked) alfabeto += numeros;
    if (checkbox[3].checked) alfabeto += simbolos;
    
    if (alfabeto.length === 0) {
        campoSenha.value = '';
        return;
    }
    
    while (!senhaSegura) {
        senha = '';
        for (let i = 0; i < tamanhoSenha; i++){
            let numeroAleatorio = Math.floor(Math.random() * alfabeto.length);
            senha += alfabeto[numeroAleatorio];
        }
        senhaSegura = testarSenha(senha);
    }
    
    campoSenha.value = senha;
    classificaSenha(alfabeto.length);
}
geraSenha();
function classificaSenha(tamanhoAlfabeto){
    let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto)
    const valorEntropia = document.querySelector('.entropia');
    valorEntropia.textContent = "Um computador pode levar até " + Math.floor(2**entropia/(100e6*60*60*24)) + " dias para descobrir essa senha.";
    forcaSenha.classList.remove('fraca','media','forte');
    if (entropia > 57){
        forcaSenha.classList.add('forte');
    } else if (entropia > 35 && entropia < 57) {
        forcaSenha.classList.add('media');
    } else if (entropia <= 35){
        forcaSenha.classList.add('fraca');
    }
}