// Obtém todos os botões "Marcar" da lista de presentes
const markButtons = document.querySelectorAll('.mark-button');

// Adiciona um evento de clique a cada botão "Marcar"
markButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Obtém o elemento pai (li) do botão clicado
        const listItem = button.parentNode;

        // Obtém o status atual do presente
        const statusElement = listItem.querySelector('.status');
        const status = statusElement.textContent;

        // Alterna o status entre "Disponível" e "Escolhido"
        if (status === 'Disponível') {
            statusElement.textContent = 'Escolhido';
            listItem.classList.add('marked');
        } else {
            statusElement.textContent = 'Disponível';
            listItem.classList.remove('marked');
        }
    });
});
