// Captura o botão e a tabela
const botaoAdicionar = document.getElementById('adicionarLinha');
const tabela = document.querySelector('table');
let contador = 1; // Inicializa o contador
let tarefas = []

// Adiciona um ouvinte de evento para o clique no botão
botaoAdicionar.addEventListener('click', () => {
    // Incrementa o contador
    contador++;

    // Cria uma nova linha e células
    const novaLinha = tabela.insertRow(-1); // Insere a nova linha no final da tabela
    const coluna1 = novaLinha.insertCell(0);
    const coluna2 = novaLinha.insertCell(1);
    const coluna3 = novaLinha.insertCell(2);
    const coluna4 = novaLinha.insertCell(3);
    const coluna5 = novaLinha.insertCell(4)

    // Cria campos de entrada (input) nas células para edição
    coluna1.innerHTML = `<input type="text" name="" id="" list="lista">`;
    coluna2.innerHTML = `<input type="text" value="Tarefa ${contador}">`;
    coluna3.innerHTML = `<input type="date" value="Cidade ${contador}">`;
    coluna4.innerHTML = `<input type="checkbox" value="Cidade ${contador}">`;
    coluna5.innerHTML = ``
});
