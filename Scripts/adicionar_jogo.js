// Botão

var botaoAdicionar = document.querySelector(".botao-adicionar")

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault()

    nome = document.getElementById("input-nome").value
    desconto = document.getElementById("input-desconto").value
    jogo = document.getElementById("select-jogos").value
    valor = parseFloat(document.getElementById("input-valor").value)
    total = calculaValorComDesconto(valor, desconto)

    tabela = document.querySelector(".tabela")
    linha = document.createElement("tr")
    coluna_1 = document.createElement("td")
    coluna_2 = document.createElement("td")
    coluna_3 = document.createElement("td")
    coluna_4 = document.createElement("td")
    coluna_5 = document.createElement("td")

    coluna_1.textContent = nome
    coluna_2.textContent = jogo
    coluna_3.textContent = formataEmValorMonetário(valor)
    coluna_4.textContent = formataEmPorcentagem(desconto)
    coluna_5.textContent = formataEmValorMonetário(total)

    tabela.appendChild(linha)
    linha.appendChild(coluna_1)
    linha.appendChild(coluna_2)
    linha.appendChild(coluna_3)
    linha.appendChild(coluna_4)
    linha.appendChild(coluna_5)
})


       