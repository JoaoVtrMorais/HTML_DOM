const lista = document.querySelectorAll(".info-total");
const lista2 = document.querySelectorAll(".info-valor");
const lista3 = document.querySelectorAll(".info-desconto");

for (var i = 0; i < lista.length; i++) {
    lista[i].textContent = lista2[i].textContent - ((lista2[i].textContent * lista3[i].textContent) / 100);
}