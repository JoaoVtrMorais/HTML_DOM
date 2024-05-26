var botaoAdicionar = document.querySelector("#botao-adicionar");

var porcentagem = 0;

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
        addjogo(jogo, false);

        // Limpa o formulário
        form.reset()

        // Limpa a UL de erros
        document.querySelector("#mensagens-erro").innerHTML="";
    }
})

// Função para capturar os dados da nova compra
function ObtemJogo(dadosForm) {
    
    var jogo = {
        internalName: dadosForm.input_nome.value,
        title: dadosForm.select_jogos.value,
        normalPrice: dadosForm.input_valor.value,
        salePrice: dadosForm.input_desconto.value
    }

    return jogo
}

// Função para adicionar a nova compra na tabela
function addjogo(novaCompra, usarLogicaAPI) {

    /* 
        1. Montar as TDs - OK
        2. Cria uma TR - OK
        3. Colocar as TDs na TR - OK
        4. Colocar a TR na TABLE - OK
    */

    var tabela = document.querySelector("#tabela")

    tabela.appendChild(montaTR(novaCompra, 'Usuario', usarLogicaAPI))
}

// Cria uma coluna nova
function montaTD(dado, classe) {

    var td = document.createElement("td");
    td.textContent = dado;
    td.setAttribute('class', classe);

    return td
}

// Monta uma nova TR
function montaTR(novaCompra, classe, usarLogicaAPI) {

    var tr = document.createElement("tr")
    tr.setAttribute('class', classe);

    porcentagem = formataEmPorcentagem(parseFloat(novaCompra.normalPrice), parseFloat(novaCompra.salePrice), usarLogicaAPI);

    tr.appendChild(montaTD(novaCompra.internalName, 'info-nome'))
    tr.appendChild(montaTD(novaCompra.title, 'info-produto'))
    tr.appendChild(montaTD(formataEmValorMonetário(parseFloat(novaCompra.normalPrice)), 'info-valor'))
    tr.appendChild(montaTD(temDesconto(parseFloat(porcentagem)) ? `${Math.round(porcentagem)}%` : "Sem desconto!", 'info-desconto'))
    tr.appendChild(montaTD(formataEmValorMonetário(calculaValorComDesconto(novaCompra.normalPrice, porcentagem)), 'info-total'))

    return tr
}

// Função para validação de desconto e do valor do jogo
function validaCompra(compra) {

    var erros = []

    // Verifica se o nome foi informado
    if (compra.internalName=="") {
        erros.push("O nome não pode ser vazio!")
    }

    // Verifica se o valor do desconto é maior que zero e um número
    if (Math.round(porcentagem > 100)) {
        erros.push("O valor do desconto deve ser númerico e não deve ser maior que 100.")
    }

    // Verifica se o valor é maior ou igual a zero e um número
    if (compra.normalPrice < 0 || isNaN(compra.normalPrice) || compra.normalPrice=="") {
        erros.push("O valor do jogo deve ser um número e não deve ser menor que 0.")
    }

    if (compra.title == "Selecione") {
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

function temDesconto(desconto) {

    if (desconto <= 0 ) {
        return false;
    } else {
        return true;
    };

};