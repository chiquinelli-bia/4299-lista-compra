const itemInput = document.getElementById('input-item');
let calc = 0;

export function criarItemlista() {
    if (itemInput.value === '') {
        alert('adicione algum item');
        return
    }
    const diaDaSemana = new Date().toLocaleDateString('pt-BR', {weekday: 'long'});
    const data = new Date().toLocaleDateString('pt-BR');
    const hora = new Date().toLocaleTimeString('pt-BR', {hour: 'numeric', minute: 'numeric'});
    let dataCompleta = `${diaDaSemana} (${data}) ás ${hora}`; 

    const tagLista = document.createElement('li');
    const tagContainer = document.createElement('div');
    const tagCheckbox = document.createElement('input');
    const tagP = document.createElement('p');
    const tagData = document.createElement('p');

    tagContainer.classList.add('lista-item-container');
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

    tagContainer.appendChild(tagCheckbox);
    tagContainer.appendChild(tagP);
    tagLista.appendChild(tagContainer);
    tagLista.appendChild(tagData);

    return tagLista;

}