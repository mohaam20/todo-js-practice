const todoinput = document.querySelector(".todo-input")
const todobutton = document.querySelector(".todo-button")
const todolist = document.querySelector(".todo-list")
const allertms = document.querySelector(".alert")
const kid = todobutton.parentNode

todobutton.addEventListener("click",addTodo)
todolist.addEventListener("click",women,true)

function women(event){
    let btnnn = event.target
    let panel = btnnn.closest("li")
    if (btnnn.className != "show")
    panel.remove()
}

function nice(target){
    target.style.backgroundColor = "yellow"
    var big = target.parentNode
    big.remove()
}

function mate(frshed){
    frshed.style.backgroundColor = "rgb(77, 233, 233)";
}

function addTodo(event){
    event.preventDefault()
    const tsContainer = document.createElement("li")
    const task = document.createElement("p")
    const check = document.createElement("button")
    const field = todoinput.value ;
    const kids = kid.children.length
    
    setTimeout(mate,200,tsContainer)

    if(field !== ""){
        
        task.innerHTML = field
        check.innerHTML = '<i class="fa-solid fa-check"></i>'
        check.classList.add("pop")
        tsContainer.appendChild(task)
        tsContainer.append(check)
        todolist.appendChild(tsContainer);

        if(kids >= 3){
            allertms.style.left = "50%"
        }
    }
    else{
        allertms.style.left = "98%"
        
    }
    todoinput.value = ""
     
    tsContainer.classList.toggle("show")

}





