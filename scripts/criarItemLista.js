import gerarData from './gerarData.js';
import listaVazia from './verificarLista.js';
const itemInput = document.getElementById('input-item');
let calc = 0;

export function criarItemlista() {
    if (itemInput.value === '') {
        alert('adicione algum item');
        return
    }

    const tagLista = document.createElement('li');
    const tagContainer = document.createElement('div');
    const tagCheckbox = document.createElement('input');
    const tagP = document.createElement('p');

    const tagContainerItens = document.createElement('div');
    const tagContainerButtons = document.createElement('div');
    const tagButtonDelet = document.createElement('button');
    const tagImgDelet = document.createElement('img');
    const tagButtonEdit = document.createElement('button');
    const tagImgEdit = document.createElement('img');

    const tagData = document.createElement('p');
    const dataCompleta = gerarData();

    tagContainer.classList.add('lista-item-container');

    tagContainerButtons.classList.add('container-sub-itens');
    tagContainerItens.classList.add('container-sub-itens');
    tagButtonDelet.classList.add('button-icons');

    tagButtonDelet.addEventListener('click', () => {
        tagLista.remove();
        const listaPai = tagLista.parentElement;
        const quantidadeItens = listaPai.querySelectorAll('li').length;
        if (quantidadeItens >= 1 ) {
            listaVazia(tagLista);
        }
    })
    tagButtonEdit.addEventListener('click', () => {
        let renomear = prompt('Qual vai ser o nome de agora, chefia?');
        tagP.innerText = renomear;
    })
    
    tagButtonEdit.classList.add('button-icons');
    tagImgDelet.src = '../img/delete.svg';
    tagImgEdit.src = '../img/edit.svg';

    tagCheckbox.type = 'checkbox';
    tagCheckbox.id = 'checkbox-' + calc++;
    tagP.innerText = itemInput.value;
    tagData.classList.add('texto-data');
    tagData.innerText = dataCompleta;

    tagCheckbox.addEventListener('click', function(){
        if (tagCheckbox.checked) {
            tagP.style.textDecoration = 'line-through';
        } else {
            tagP.style.textDecoration = 'none';

        }
    })

    tagButtonDelet.appendChild(tagImgDelet);
    tagButtonEdit.appendChild(tagImgEdit);

    tagContainerItens.append(tagCheckbox, tagP);
    tagContainerButtons.append(tagButtonDelet, tagButtonEdit);

    tagContainer.append(tagContainerButtons, tagContainerItens);
    tagLista.append(tagContainer, tagData);

    return tagLista;

}