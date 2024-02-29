var usuarios = document.querySelectorAll(".Usuario");

for (var i = 0; i < usuarios.length; i++) {
    
    valor = usuarios[i].querySelector(".info-valor").textContent
    
    desconto = usuarios[i].querySelector(".info-desconto").textContent

    // Valida o valor do desconto
    if (desconto < 0 || isNaN(desconto)) {
        // Valor NOK, avisa o usuário
        usuarios[i].querySelector(".info-desconto").textContent = "Valor inválido!";
        usuarios[i].querySelector(".info-desconto").style.color = "red";
        // usuarios[i].querySelector(".info-total").style.backgroundColor = "red";
    } else {
        // Valor OK, prossegue
        // Calcula o valor total do jogo com desconto aplicado
        usuarios[i].querySelector(".info-total").textContent = calculaValorComDesconto(valor, desconto);
    }
    
    // Valida o valor total
    if (valor > 250 || valor < 0 || isNaN(valor)) {
        usuarios[i].style.color = "red";
    }

}
// Função para calcular o valor total com desconto

function calculaValorComDesconto(valor, desconto) {
    var total = 0;
    total = valor - ((valor * desconto) / 100);
    return total;
}