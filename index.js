const itemInput = document.getElementById('input-item');
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById('adicionar-item');
let calc = 0;

botaoAdicionar.addEventListener('click', (evento) => { 
    evento.preventDefault();
    if (itemInput.value === '') {
        alert('adicione algum item');
        return
    }
        const tagLista = document.createElement('li');
        const tagContainer = document.createElement('div');
        tagContainer.classList.add('lista-item-container');
        const tagCheckbox = document.createElement('input');
        tagCheckbox.type = 'checkbox';
        tagCheckbox.id = 'checkbox-' + calc++;
        const tagP = document.createElement('p');
        tagP.innerText = itemInput.value;

        tagContainer.appendChild(tagCheckbox);
        tagContainer.appendChild(tagP);
        tagLista.appendChild(tagContainer);
        listaDeCompras.appendChild(tagLista);

        const diaDaSemana = new Date().toLocaleDateString('pt-BR', {weekday: 'long'});
        const data = new Date().toLocaleDateString('pt-BR');
        const hora = new Date().toLocaleTimeString('pt-BR', {hour: 'numeric', minute: 'numeric'});
        let dataCompleta = `${diaDaSemana} (${data}) ás ${hora}`;
})