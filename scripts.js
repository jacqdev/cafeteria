/* logica de programacao
[x] sabe quando o usuario clocou no botao
[x]muda o posicionamento do modal
[x]fazer a mascara ficar visivel
[x]quando clicar na mascara fechar o modal
*/
const modal= document.querySelector(".modal")
const mascara= document. querySelector(".mascara-modal")


function mostrarModal(){
    modal.style.left = '50%'
    mascara.style.visiblity ='visible' 
}

function esconderModal (){
    modal.style.left = '-30%'
    mascara.style.visiblity ='hidden'
}