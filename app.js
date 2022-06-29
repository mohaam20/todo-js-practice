const todoinput = document.querySelector(".todo-input")
const todobutton = document.querySelector(".todo-button")
const todolist = document.querySelector(".todo-list")
const allertms = document.querySelector(".alert")
const droped = document.querySelector("select")
const allField = document.querySelector("input")
const kid = todobutton.parentNode



window.addEventListener('DOMContentLoaded',readLocal)
todobutton.addEventListener("click",addTodo)
todolist.addEventListener("click",women,true)
document.addEventListener("change",filtter)
window.addEventListener("click",filtter)
allField.addEventListener("keyup",enterSubmit)
document.addEventListener("click",unFoucs)

function women(event){
    event.preventDefault()
    let btnnn = event.target
    let panel = btnnn.closest("li")
    
    
    if (btnnn.className == "checkLogo" && panel.className == "solid" ){
        console.log("arrived")
    panel.classList.remove("solid")    
    panel.classList.add("glass")
    dellLocal(panel.innerText)
    closeField(panel)
    }
    else if((panel.nodeName == 'LI' && panel.className == "glass")){
        panel.classList.remove("glass")
        panel.classList.add("solid")
        saveLocal(panel.innerText)
        closeField(panel)    

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
      closeField(panel)    
   }
   else if(btnnn.className == "editor"){
    editTask(panel)
    console.log(btnnn.innerHTML)
    if(btnnn.innerHTML == '<i class="fa-solid fa-wrench"></i>'){
        btnnn.innerHTML = '<i class="fas fa-archive"></i>'
    }
    else{
        btnnn.innerHTML = '<i class="fa-solid fa-wrench"></i>'
    }
   }


}



function mate(frshed){
    frshed.style.backgroundColor = "rgb(71, 181, 255)";
}

function addTodo(event){
    event.preventDefault()
    const tsContainer = document.createElement("li")
    const task = document.createElement("p")
    const check = document.createElement("button")
    const field = todoinput.value ;
    const edit = document.createElement("button")
    const editField = document.createElement("input")
    const kids = kid.children.length
    const dell = document.createElement("button")
    setTimeout(mate,200,tsContainer)

    if(field !== ""){
        
        
        task.innerHTML = field
        editField.value = field
        editField.style.position = "absolute"
        check.innerHTML = '<i class="fa-solid fa-check"></i>'
        dell.innerHTML='<i class="fa-solid fa-trash"></i>'
        edit.innerHTML='<i class="fa-solid fa-wrench"></i>'
        check.classList.add("checkLogo")
        dell.classList.add("dellLogo")
        edit.classList.add('editor')
        editField.classList.add('edit-field')
        tsContainer.append(editField)
        editField.style.display = "none"
        tsContainer.classList.add("solid")
        tsContainer.appendChild(task)
        saveLocal(field)
        tsContainer.append(edit)
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
    const edit = document.createElement("button")
    const editField = document.createElement("input")
    const dell = document.createElement("button")

    setTimeout(mate,200,tsContainer)
    editField.value = field
    editField.style.position = "absolute"
    task.innerHTML = field
    check.innerHTML = '<i class="fa-solid fa-check"></i>'
    dell.innerHTML='<i class="fa-solid fa-trash"></i>'
    edit.innerHTML='<i class="fa-solid fa-wrench"></i>'

    check.classList.add("checkLogo")
    edit.classList.add('editor')
    editField.classList.add('edit-field')
    tsContainer.append(editField)
    editField.style.display = "none"
    dell.classList.add("dellLogo")
    tsContainer.classList.add("solid")
    tsContainer.appendChild(task)
    tsContainer.append(edit)
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

function editTask(father){
    let old 
    let newTask 
    for(let x of father.children){
        if(x.nodeName == "P" ){
            old = x.innerText
            newTask = x
            console.log(old)
        }
    }
    for(let x of father.children){
        if(x.nodeName == "INPUT" && x.style.display =="none" ){
            
            x.value = old
            x.style.display = "flex"
            x.focus() 
            console.log("hiphop")
            x.addEventListener("keyup",enterSubmit)            
        }
        else if(x.nodeName == "INPUT" && x.style.display !=="none" ){
            newTask.innerText = x.value
            if(x.value == ""){
                father.remove()
            }            
            x.style.display = "none"
        }
    }
    

}

function closeField(father){
    for(let x of father.children){
        if(x.nodeName == "INPUT" && x.style.display !=="none" ){
            x.style.display = "none"
            if(x.value == ""){
                father.remove()
            }    
        }
        
    }
    

}

function enterSubmit(event){
    let relatives = event.composedPath()
    
    
    if(event.key == "Enter"){
        for(let i of relatives){
            if(i.nodeName == "LI"){
                let i2 = i.children
                for (let i3 of i2){
                    if(i3.className == "editor"){
                        i3.click()
                    }
                }
            }
        }
    }

}

function unFoucs(event){
    let opend = document.querySelectorAll(".edit-field")

    if(event.target.nodeName == "BODY" || event.target.nodeName == "UL"){
        console.log(event.target.nodeName)
        for(let i of opend){
            i.style.display = "none"
        }
    }
}