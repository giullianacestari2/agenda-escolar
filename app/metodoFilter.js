const btnFiltrarMatematica = document.getElementById('filtrarMatematica')

btnFiltrarMatematica.addEventListener('click', filtrarMatematica)

function filtrarMatematica () {
    let tarefasFiltradas = tarefas.filter(tarefa => tarefa.disciplina == 'Matemática')
    console(tarefasFiltradas)
}