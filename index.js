const botaoAdicionar = document.getElementById('adicionar-item');

botaoAdicionar.addEventListener("click", (evento) => { 
    const itemInput = document.getElementById('input-item');

    if (itemInput.value === "") {
        alert('adicione algum item');
    } else {
    }
})