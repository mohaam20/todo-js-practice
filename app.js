const todoinput = document.querySelector(".todo-input")
const todobutton = document.querySelector(".todo-button")
const todolist = document.querySelector(".todo-list")
const allertms = document.querySelector(".alert")
const kid = todobutton.parentNode


todobutton.addEventListener("click",addTodo)
todolist.addEventListener("click",women,true)

console.log(localStorage.getItem("todos"))

function women(event){
    let btnnn = event.target
    let panel = btnnn.closest("li")
    console.log(btnnn.className)
    if (btnnn.className == "checkLogo" && panel.className == "solid" ){
        console.log("arrived")
    panel.classList.remove("solid")    
    panel.classList.add("glass")}
    
    else if( btnnn.className === "dellLogo"){
        function bob(gestt){
            gestt.remove()
        }
        panel.classList.add("falll")
        setTimeout(bob,1000,panel)
        console.log("arrived 2")
    }
    else if(btnnn.className== "checkLogo" && panel.className == "glass"){
      panel.classList.remove("glass")
      panel.classList.add("solid")
      console.log("through")      
   }


}



function mate(frshed){
    frshed.style.backgroundColor = "#B25068";
}

function addTodo(event){
    event.preventDefault()
    const tsContainer = document.createElement("li")
    const task = document.createElement("p")
    const check = document.createElement("button")
    const field = todoinput.value ;
    const kids = kid.children.length
    const dell = document.createElement("button")

    setTimeout(mate,200,tsContainer)

    if(field !== ""){
        
        task.innerHTML = field
        check.innerHTML = '<i class="fa-solid fa-check"></i>'
        dell.innerHTML='<i class="fa-solid fa-trash"></i>'
        check.classList.add("checkLogo")
       
        dell.classList.add("dellLogo")
        tsContainer.classList.add("solid")
        tsContainer.appendChild(task)
        saveLocal(field)
        tsContainer.append(dell)
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
     

}

function sleep(){

}

function saveLocal(todo){


let todos = JSON.parse(localStorage.getItem('todos')) ?? []
    


todos.push(todo);


console.log(todos)



localStorage.setItem('todos',JSON.stringify(todos));

}

function readLocal(sleeping){
    const tsContainer = document.createElement("li")
    const task = document.createElement("p")
    const check = document.createElement("button")
    const field = sleeping ;
    const kids = kid.children.length
    const dell = document.createElement("button")

    setTimeout(mate,200,tsContainer)

    task.innerHTML = field
    check.innerHTML = '<i class="fa-solid fa-check"></i>'
    dell.innerHTML='<i class="fa-solid fa-trash"></i>'
    check.classList.add("checkLogo")
    
    dell.classList.add("dellLogo")
    tsContainer.classList.add("solid")
    tsContainer.appendChild(task)
    saveLocal(field)
    tsContainer.append(dell)
    tsContainer.append(check)
    todolist.appendChild(tsContainer);
    
}



