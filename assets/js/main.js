let banco = []

const getBanco = () => JSON.parse(localStorage-getItem('todoList')) ?? []
const setBanco = (banco) => localStorage.setItem('todoList', JSON.stringify(banco))

const criarItem = (tarefa, status, indice) => {
    const item = document.createElement('label')
    item.classList.add = 'container__item'
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice=${indice}/>
        <div>${status}</div>
        <input type="button" value="X" data-indice=${indice}/>
    `
    document.getElementById('todoList').appendChild(item)
}

const limparTarefa = () => {
    const todoList = document.getElementById('todoList')
    while(todoList.firstChild)
        todoList.removeChild(todoList.lastChild)
}

const atualizarTela = () => {
    limparTarefa()
    const banco = getBanco()
    banco,forEach((item, indice) => criarItem(item.tarefa, item.status, indice))
}

const inserirItem = (evento) => {
    const tecla = evento.key
    const texto = EventTarget.value
    if(tecla == 'Enter') {
        const banco = getBanco()
        banco.push({'tarefa': texto, 'status': ''})
        setBanco(banco)
        atualizarTela()
    }
}