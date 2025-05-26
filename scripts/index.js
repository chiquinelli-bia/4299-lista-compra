import { criarItemlista } from "./criarItemLista.js";
import listaVazia from "./verificarLista.js";
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById('adicionar-item');

botaoAdicionar.addEventListener('click', (evento) => { 
    evento.preventDefault();
    const itemLista = criarItemlista();
    listaDeCompras.appendChild(itemLista);
    listaVazia(listaDeCompras);
})

listaVazia(listaDeCompras);