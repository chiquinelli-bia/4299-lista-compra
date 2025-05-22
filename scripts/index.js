import { criarItemlista } from "./criarItemLista.js";
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById('adicionar-item');

botaoAdicionar.addEventListener('click', (evento) => { 
    evento.preventDefault();
    const itemLista = criarItemlista();
    listaDeCompras.appendChild(itemLista);
    listaVazia()
})

function listaVazia () {
    const msgListaVazia = document.querySelector('.mensagem-lista-vazia');
    const itensDaLista = listaDeCompras.querySelectorAll('li');

    if (itensDaLista.length === 0) {
        msgListaVazia.style.display = 'block';
    } else {
        msgListaVazia.style.display = 'none';
    }
}

listaVazia()