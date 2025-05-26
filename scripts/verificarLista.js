
function listaVazia (listaDeCompras) {
    const msgListaVazia = document.querySelector('.mensagem-lista-vazia');
    const itensDaLista = listaDeCompras.querySelectorAll('li');

    if (itensDaLista.length === 0) {
        msgListaVazia.style.display = 'block';
    } else {
        msgListaVazia.style.display = 'none';
    }
}

export default listaVazia;