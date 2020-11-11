// document.getElementById()

// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // taskTitle.style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';

// let x = document.getElementsByClassName('collection-item')
// console.log(x) 
// let tag = document.getElementsByTagName('li')
// // console.log(tag)
// // tag[0].style.color = "blue"

// let tagarry = Array.from(tag)

// console.log(tagarry.reverse())

// tagarry.forEach((x , index )=>{
//    x.textContent = `This is Task ${index}`
// })


// let allTaskOdd = document.querySelectorAll("li:nth-child(odd)")
// let allTaskEven = document.querySelectorAll("li:nth-child(even)")

// allTaskEven.forEach((x)=>{
//     x.style.background = "grey"
// })

// let btn = document.createElement("button")
// btn.setAttribute("name","click")
// btn.id = "btn"
// btn.className = "clear-tasks btn black"
// btn.style.color = "white"
// btn.type= "submit"
// let link = document.createElement("a")
// btn.append(link)
// let btnval = document.createTextNode("Save to DB")
// btn.appendChild(btnval)
// let conta = document.querySelector(".card-action")
// conta.appendChild(btn)


// const newEle = document.createElement("h1")
// newEle.id = 'new-task-by-newEle'
// newEle.appendChild(document.createTextNode("New tasks for you"))
// const parent = document.querySelector(".card-action")
// const oldEle = document.querySelector('#task-title')
// parent.replaceChild(newEle,oldEle)

// console.log(" Onclick of that Close button.....")

// const liEles = document.querySelectorAll('li')
// console.log("generated list Elements are ..."+ liEles + " ....")

// liEles[0].remove()
// function closeme(){
//     const elem = document.querySelectorAll('li')
//     elem[0].remove()
//     console.log("removed")
// }

// const first = document.querySelector('li:first-child')
// const link = first.children[0]
// const close = link.getAttribute('href')
// link.setAttribute("href", closeme())
// link.setAttribute("href", closeme())
// link.setAttribute("href", closeme())

// const newli = document.createElement('li')
// newli.id = "task-item"
// newli.textContent = " From the textbox"
// const par = document.querySelector("ul")

// par.appendChild(newli)

// let x = document.querySelector(".clear-tasks")
// x.addEventListener('click', Deleted)

// function Deleted(e){
// console.log(e)
// e.preventDefault()
// e.target.innerText = "Deleted"
// }

// x.addEventListener("onmouseover", showredcolor)

// function showredcolor(e){
   
//     e.target.style.color = 'green'
//     e.target.style.background = 'red'
// }


// const btn = document.querySelector(".btn")
// btn.addEventListener("click", AddTask)

// function AddTask(e){
//     const lstItem = document.querySelector("li:first-child")
//     console.log(lstItem)
//     const x =  document.querySelector("#task")
//     lstItem.textContent = x.value
//     e.preventDefault()
// }


// const task  =  document.querySelector("body")
// console.log(task)

// document.body.addEventListener("click", deleteItem)

// function deleteItem(e){
//     if(e.target.parentElement.classList.contains("delete-item")){
//         e.target.parentElement.parentElement.remove()
//     }
// }





// const submit  = document.querySelector(".btn")
// submit.addEventListener("click", submitdata)
// function submitdata(e){
//     e.preventDefault()
//     const data = document.querySelector('#task').value
//     console.log(data)
//     localStorage.setItem("task", data)
//     alert("The Saved task is ::::"+ localStorage.getItem("task"))
//     const lst = document.querySelector("li:first-child")
//     lst.innerText = localStorage.getItem("task")

// }
