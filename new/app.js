const form = document.querySelector("#task-form")
const tasktext = document.querySelector("#task")
const clear = document.querySelector(".clear-tasks")
const list = document.querySelector(".collection")
const filter = document.querySelector("#filter")
loadAllEvent();

function loadAllEvent(){
    form.addEventListener("submit", addTask);
    clear.addEventListener("click", clearTask);
    filter.addEventListener("keyup", matchTask);
    list.addEventListener('click', removeTask);
    document.addEventListener('DOMContentLoaded', getTaskFromStore )
}

function addTask(e){
    
  if(tasktext.value === ''){
      alert("nigga Add task first")
  }
  else{
      const ls = document.createElement('li');
      ls.className = "collection-item"
     ls.appendChild(document.createTextNode(tasktext.value))
      list.appendChild(ls)
      console.log(list)
     const remove = document.createElement('a');
     remove.className = "delete-item secondary-content";
     remove.innerHTML = '<i class= "fa fa-remove" ></li>'
     ls.append(remove) 
      store(tasktext.value);
      tasktext.value =''
  }
 
    e.preventDefault();
}


function clearTask(e){
    list.innerHTML = ''
    localStorage.clear();
}

function matchTask(e){
    const key = e.target.value.toLowerCase()
    const task = document.querySelectorAll('.collection-item')
    task.forEach((ele)=>{
    const item = ele.firstChild.textContent;
    if(item.toLowerCase().indexOf(key) != -1){
     ele.style.display = 'block'
    }else{
       ele.style.display = 'none'
    }
  })
}

function removeTask(e){

   if( e.target.parentElement.classList.contains("delete-item"))
   {
       e.target.parentElement.parentElement.remove()
       removeFromStore(e.target.parentElement.parentElement)
   
   }


}
function store(task){

 let tasks;
 if(localStorage.getItem('tasks')=== null){
   tasks = []
 }else{
   tasks =JSON.parse(localStorage.getItem("tasks"))
 }
 tasks.push(task)
 localStorage.setItem('tasks', JSON.stringify(tasks))
  }


  function getTaskFromStore(){
    let tasks;
    if(localStorage.getItem('tasks')=== null){
      tasks=[]
    }
    else{
      tasks = JSON.parse(localStorage.getItem('tasks'))
    }
   tasks.forEach((task)=>{
    const ls = document.createElement('li');
    ls.className = "collection-item"
   ls.appendChild(document.createTextNode(task))
    list.appendChild(ls)
    console.log(list)
   const remove = document.createElement('a');
   remove.className = "delete-item secondary-content";
   remove.innerHTML = '<i class= "fa fa-remove" ></li>'
   ls.append(remove) 

   })
  }

  function removeFromStore(task){
    let tasks;
    if(localStorage.getItem('tasks')=== null){
      tasks=[]
    }
    else{
      tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach((item, index)=>{
      if(item === task.textContent){
        tasks.splice(index,1)
      }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }