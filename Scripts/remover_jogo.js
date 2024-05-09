/* var tabela = document.querySelectorAll(".Usuario") */

/* var usuarios = document.querySelectorAll(".Usuario")

for (var i = 0; i < usuarios.length; i++) {
    usuarios[i].addEventListener("dblclick", function(event) {
        this.remove()
    })
} */


/* tabela.forEach(function(row) {
    row.addEventListener("dblclick", function(event) {
        row.remove()
    })
}) */

var tabela = document.querySelector("table")

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut")
    
    setTimeout(function() {
        // Captura a TR da TD que sofreu o duplo clique e remove
        event.target.parentNode.remove()
    }, 500)

})