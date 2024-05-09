var botaoAdicionar = document.querySelector("#botao-adicionar");

botaoAdicionar.addEventListener("click", function(event){

    event.preventDefault();

    // Captura o formulário da página
    var form = document.querySelector("#formulario")

    // Captura os dados da nova compra
    var jogo = ObtemJogo(form)

    // Valida os dados na nova encomenda
    var validacao = validaCompra(jogo)

    // Valida se a compra pode ser inserida
    if(validacao.length > 0) {
        // Erro nos dados, informa o usuário
        exibeMensagensErros(validacao);
        return;

    } else {

        // Insere a nova encomenda na tabela
        addjogo(jogo)

        // Limpa o formulário
        form.reset()

        // Limpa a UL de erros
        document.querySelector("#mensagens-erro").innerHTML="";
    }
})

// Função para capturar os dados da nova compra
function ObtemJogo(dadosForm) {
    
    var jogo = {
        nome: dadosForm.input_nome.value,
        jogo: dadosForm.select_jogos.value,
        valor: dadosForm.input_valor.value,
        desconto: dadosForm.input_desconto.value
    }

    return jogo
}

// Função para adicionar a nova compra na tabela
function addjogo(novaCompra) {

    /* 
        1. Montar as TDs - OK
        2. Cria uma TR - OK
        3. Colocar as TDs na TR - OK
        4. Colocar a TR na TABLE - OK
    */

    var tabela = document.querySelector("#tabela")

    tabela.appendChild(montaTR(novaCompra))
}

// Cria uma coluna nova
function montaTD(dado) {

    var td = document.createElement("td")
    td.textContent = dado

    return td
}

// Monta uma nova TR
function montaTR(novaCompra) {

    var tr = document.createElement("tr")

    tr.appendChild(montaTD(novaCompra.nome))
    tr.appendChild(montaTD(novaCompra.jogo))
    tr.appendChild(montaTD(formataEmValorMonetário(parseFloat(novaCompra.valor))))
    tr.appendChild(montaTD(formataEmPorcentagem(parseFloat(novaCompra.desconto))))
    tr.appendChild(montaTD(formataEmValorMonetário(calculaValorComDesconto(novaCompra.valor, novaCompra.desconto))))

    return tr
}

// Função para validação de desconto e do valor do jogo
function validaCompra(compra) {

    var erros = []

    // Verifica se o nome foi informado
    if (compra.nome=="") {
        erros.push("O nome não pode ser vazio!")
    }

    // Verifica se o valor do desconto é maior que zero e um número
    if (compra.desconto < 0 || isNaN(compra.desconto) || compra.desconto=="") {
        erros.push("O valor do desconto deve ser númerico e não deve ser menor que 0.")
    }

    // Verifica se o valor é maior ou igual a zero e um número
    if (compra.valor < 0 || isNaN(compra.valor) || compra.valor=="") {
        erros.push("O valor do jogo deve ser um número e não deve ser menor que 0.")
    }

    if (compra.jogo == "Selecione") {
        erros.push("Selecione um jogo!")
    }

    return erros
}

function exibeMensagensErros(erros) {
    var ul = document.querySelector("#mensagens-erro");

    // limpa a UL para exibir os erros
    ul.innerHTML = ''

    erros.forEach(function(mensagem) {
        var li = document.createElement("li")
        li.textContent = mensagem
        ul.appendChild(li)
    })
}