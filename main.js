const taskForm = document.getElementById('toDoForm')
const workList = document.getElementById('listaTarefas')

taskForm.addEventListener('submit',(e)=> {
    e.preventDefault();
    const nomeTarefa = document.getElementById('nomeTarefa').value;
    const descricaoTarefa = document.getElementById('descricaoTarefa').value;
    const novaTarefa = {nome: nomeTarefa, descrição: descricaoTarefa};
    salvarTarefa(novaTarefa);
    taskForm.reset()
    
});

const salvarTarefa = (tarefa) => {
    const tarefa = JSON.parse(localStorage.getItem('tarefa'))||[];
    tarefa.push(tarefa);
    localStorage.setItem('tarefa' , JSON.stringify(tarefa));
    carregarTarefa();
};

const carregarTarefa = () =>{
    const tarefa = JSON.parse(localStorage.getItem('tarefa'))||[];
    workList.innerHTML = '';
    tarefa.forEach((tarefa, index) => {
        const cartao = document.createElement('div')
        cartao.className="col-md-4 md-4";
        cartao.innerHTML =`
        <div class="card text-bg-darck mb-3 task-card">
           <div class =""`;
        
    })
}

