const todoinput = document.querySelector(".todo-input")
const todobutton = document.querySelector(".todo-button")
const todolist = document.querySelector(".todo-list")
const allertms = document.querySelector(".alert")
const droped = document.querySelector("select")
const kid = todobutton.parentNode

window.addEventListener('DOMContentLoaded',readLocal)
todobutton.addEventListener("click",addTodo)
todolist.addEventListener("click",women,true)
droped.addEventListener("change",filtter)

function women(event){
    let btnnn = event.target
    let panel = btnnn.closest("li")
    if (btnnn.className == "checkLogo" && panel.className == "solid" ){
        console.log("arrived")
    panel.classList.remove("solid")    
    panel.classList.add("glass")
    dellLocal(panel.innerText)

    }
    
    else if( btnnn.className === "dellLogo"){
        dellLocal(panel.innerText)
        function bob(gestt){
            gestt.remove()
        }
        panel.classList.add("falll")
        setTimeout(bob,1000,panel)
    }
    else if(btnnn.className== "checkLogo" && panel.className == "glass"){   
      panel.classList.remove("glass")
      panel.classList.add("solid")
      console.log("through")  
      saveLocal(panel.innerText)    
   }


}



function mate(frshed){
    frshed.style.backgroundColor = "#47B5FF";
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
        filtter()

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

function readLocal(){
    let sleeping = JSON.parse(localStorage.getItem('todos'))
    console.log(sleeping[1])
    sleeping.forEach(readKid);

    function readKid(elong){
    const tsContainer = document.createElement("li")
    const task = document.createElement("p")
    const check = document.createElement("button")
    const field = elong ;
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
    tsContainer.append(dell)
    tsContainer.append(check)
    todolist.appendChild(tsContainer);
    }
    
}


function dellLocal(todo){
let todo1 = JSON.parse(localStorage.getItem("todos"))
let spot = todo1.indexOf(todo)
console.log("place is " + spot)
todo1.splice(spot,1)
localStorage.setItem('todos',JSON.stringify(todo1));

}


function filtter(){
    let due = droped.value
    let kido = todolist.children

    for(let kid of kido){
        console.log(due)
        console.log(kid.className)
        console.log(due == kid.className)

        if(due == kid.className ){
         console.log("glasoo")   
         kid.style.display ="flex"
        }
        else{
            kid.style.display = "none"
        }
        if(due == "all"){
            kid.style.display="flex"
        }
    }
    

}
