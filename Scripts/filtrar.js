var campoFiltro = document.querySelector("#filtro-tabela");

campoFiltro.addEventListener("input", function() {
    var usuarios = document.querySelectorAll(".Usuario");

    // Verifica se há um termo de busca
    if (this.value.length > 0) {
        for (var usu = 0; usu < usuarios.length; usu++) {
            var nome = usuarios[usu].querySelector(".info-nome").textContent;
            
            var expressao = new RegExp(this.value, "i");

            // Verifica os clientes para filtrar a tabela
            if (!expressao.test(nome)) {
                usuarios[usu].classList.add("invisivel");
            } else {
                usuarios[usu].classList.remove("invisivel");
            };   
        };
    } else {
        for (var usu = 0; usu < usuarios.length; usu++) {
            usuarios[usu].classList.remove("invisivel");
        };
    };
});