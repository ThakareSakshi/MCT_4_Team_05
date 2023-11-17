const newBoardBtn=document.querySelector(".new-board");
let newBoardDetail=  document.querySelector(".displayBoard");
let addnewboard_btn=document.querySelector(".Add-new-board-btn");
let cancel_btn=document.querySelector(".cancel")
let projectTitleInput=document.querySelector(".Projectname");
let Board_container=document.querySelector(".boardS")
let Allboards=document.querySelectorAll(".boardS")

let newID=1;



// ---------------add new board-----------------
newBoardBtn.addEventListener("click",()=>{
    displayNewBoard();

    
})


//   -------------add new board---------------
addnewboard_btn.addEventListener("click",()=>{
  createNewBoard(projectTitleInput.value);
  
  newBoardDetail.style.display="none";
  projectTitleInput.value="";
});


//   -----------------cancel adding board---------------
cancel_btn.addEventListener("click",()=>{
  newBoardDetail.style.display="none";
})

// display board to enter new board detail---------------
function displayNewBoard()
{
  newBoardDetail.style.display="unset";



}



// ----------------function to create board---------------
function  createNewBoard(title){
  let newBoard=document.createElement("div");
  newBoard.classList.add("Board");

  let boardnameDiv=document.createElement("div");
  boardnameDiv.classList.add("Board-name");
  boardnameDiv.innerHTML=`<Span>${title}</Span>
  <span class="trash"  onclick="deleteCard(event)"><i class="fa-solid fa-ellipsis"></i></span>`;

  let to_do_Container=document.createElement("div");
  to_do_Container.classList.add("to-do-list-container");

  let All_task_container=document.createElement("div");
  All_task_container.classList.add("All-tasks");
  // All_task_container.setAttribute("ondragover","DragOver(event)")
  // All_task_container.setAttribute("ondrop","OnDrop(event)")


  let add_new_task_btn=document.createElement("div");
  add_new_task_btn.classList.add("task-title-input");
  add_new_task_btn.innerHTML=`<input type="text" class="task-name" placeholder="Task Title">
  <div><button class="Add-new-task-btn">Add</button>
      <button class="cancel-task">cancel</button></div>`
 
  let add_task_btn=document.createElement("button");
  add_task_btn.classList.add("add-task");
  add_task_btn.innerText="add task";
  add_task_btn.setAttribute("onclick","displayTaskTitleInputDiv(event)")

  to_do_Container.appendChild(All_task_container);
  to_do_Container.appendChild(add_new_task_btn);
  to_do_Container.appendChild(add_task_btn);

  newBoard.appendChild(boardnameDiv);
  newBoard.appendChild(to_do_Container)

Board_container.appendChild(newBoard);

// window.localStorage.setItem(`${title}`,JSON.stringify({}))
 

  
}


function displayTaskTitleInputDiv(e){
  let taskInput=e.target.parentNode.children[1];
  taskInput.style.display="block";

  //-------------------event to add task div------------------
  taskInput.querySelector(".Add-new-task-btn").addEventListener("click",()=>{
    let inputs=taskInput.querySelector(".task-name");
     if(inputs.value!=""){
      appendTask(e,inputs.value);
     }
     inputs.value=""
     taskInput.style.display="none";
  })

  taskInput.querySelector(".cancel-task").addEventListener("click",()=>{
    taskInput.style.display="none";
  })
}




// -----------------function to create and append task in container ----------------
function appendTask(e,title){
console.log(title);
let newTaskContainer=document.createElement("div");
newTaskContainer.classList.add("task")
newTaskContainer.setAttribute("draggable","true")
newTaskContainer.setAttribute("ondragstarts","dragAndDrop(event)")

let task_title=document.createElement("div")
task_title.classList.add("task-title");
// task_title.innerText=title;
task_title.innerHTML=`<div><div class="task-header"><span class="label-container"></span><span class="trash" onclick="deleteTaskCard(event)"> <i class="fa fa-trash" aria-hidden="true"></i></span></div><div ><span class="title">${title}</span></div></div>`

let addmoreDetailbtn=document.createElement("div");
addmoreDetailbtn.classList.add("addMoreDetail");
addmoreDetailbtn.setAttribute("onclick","updateDetailsInTask(event)")
addmoreDetailbtn.innerHTML=`<i class="fa-solid fa-bars-staggered"></i>`;

let date_container=document.createElement("div");
date_container.classList.add("date");


newTaskContainer.appendChild(task_title)
newTaskContainer.appendChild(addmoreDetailbtn)
newTaskContainer.appendChild(date_container)
e.target.parentNode.children[0].appendChild(newTaskContainer)




}


function updateDetailsInTask(e)
{ 
  document.querySelector("section").style.display="flex";
  let title=document.querySelector("#title");
  let date=document.querySelector("#date");
  let label=document.querySelector("#label");
  

  let save_btn=document.querySelector("#save");
  save_btn.addEventListener("click",()=>{
    document.querySelector("section").style.display="none";
  let task_container=e.target.parentNode.parentNode;
  let label_container=task_container.querySelector(".label-container");
  label_container.style.padding=8+"px";
if(label.value!=""){
  label_container.innerText=label.value;
}
if(date.value!=""){
  task_container.querySelector(".date").innerText=date.value;
}
  // task_container.appendChild();
 if(title.value!=""){
  task_container.querySelector(".title").innerText=title.value;
 }

  title.value="";
  date.value="";
  label.value="";
  })

}

function deleteCard(e){
  let parentboard=e.target.parentNode.parentNode.parentNode;
  parentboard.remove()
}

function deleteTaskCard(e){
 let taskCard=e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
 taskCard.remove();
}


function dragAndDrop(e){
 let selected=e.target;
let All_task_container=document.querySelectorAll(".All-tasks");
console.log(selected)
All_task_container(container=>{

  container.addEventListener("dragover",(e)=>{
    e.preventDefault()
  })

  container.addEventListener("drop",(e)=>{
    console.log("drop")
    container.appendChild(selected)
    selected=null;
  })
})
}

document.querySelector("#reject").addEventListener("click",()=>{
  document.querySelector("section").style.display="none";
})

// function DragOver(e){
//   e.preventDefault();
// }
// function OnDrop(e,selected){
//   e.appendChild(selected)
// }