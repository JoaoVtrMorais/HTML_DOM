var usuarios = document.querySelectorAll(".Usuario");

for (var i = 0; i < usuarios.length; i++) {

    valor = usuarios[i].querySelector(".info-valor").textContent
    
    if (typeof valor != "number"){
        valor = parseFloat(valor)
    }

    usuarios[i].querySelector(".info-total").textContent = valor

    desconto = usuarios[i].querySelector(".info-desconto").textContent

    total = calculaValorComDesconto(valor, desconto);

    // Valida o valor do desconto
    if (desconto < 0 || isNaN(desconto)) {
        // Valor NOK, avisa o usuário
        usuarios[i].querySelector(".info-desconto").textContent = "Valor inválido!";
        usuarios[i].querySelector(".info-desconto").style.color = "red";
        // usuarios[i].querySelector(".info-total").style.backgroundColor = "red";
    } else {
        // Valor OK, prossegue
        // Calcula o valor total do jogo com desconto aplicado
        usuarios[i].querySelector(".info-total").textContent = total;
    }
    
    // Valida o valor 
    if (valor <= 0 || isNaN(valor)) {
        usuarios[i].style.color = "red";
        usuarios[i].querySelector(".info-valor").textContent = "Valor inválido!"
        usuarios[i].querySelector(".info-total").textContent = 0;
        usuarios[i].querySelector(".info-desconto").textContent = 0;
    }
}
// Função para calcular o valor total com desconto

function calculaValorComDesconto(valor, desconto) {
    
    if (typeof valor != "number") {
        parseFloat(valor)
    }
    
    var total = 0;
    total = valor - ((valor * desconto) / 100);
    return formataEmValorMonetário(total);
}

function formataEmValorMonetário(valor) {
    valorFloat = parseFloat(valor)
    valorMonetario = valorFloat.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    return valorMonetario
}

function formataEmPorcentagem(valor) {
    porcentagem = valor.toLocaleString()
    return porcentagem
}