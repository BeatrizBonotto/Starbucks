let imagem = document.querySelector (".imagem-copo") //let é usado para criar uma variável em JavaScript, ou seja, um espaço para guardar um valor que pode mudar. 
let circulo = document.querySelector(".circulo") //querySelector encontra e seleciona um elemento da página usando CSS.

function trocaImagem (imagem_clicada, cor){
    imagem.src = imagem_clicada
    circulo.style.background = cor
}