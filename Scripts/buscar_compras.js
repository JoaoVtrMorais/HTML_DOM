var botaoBuscar = document.querySelector("#buscar-compras");

botaoBuscar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    var usarLogicaAPI = true;

    xhr.open("GET", "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15");
    xhr.addEventListener("load", function() {
        var resposta = xhr.responseText;
        
        // Converte a string em objeto JS
        var compras = JSON.parse(resposta);
        
        // Insere as encomendas na tabela
        compras.forEach(function(compra) {
            addjogo(compra, usarLogicaAPI);
        });
    });
    
    xhr.send();
});