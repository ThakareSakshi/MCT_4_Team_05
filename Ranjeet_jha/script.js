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
  <span><i class="fa-solid fa-ellipsis"></i></span>`;

  let to_do_Container=document.createElement("div");
  to_do_Container.classList.add("to-do-list-container");

  let All_task_container=document.createElement("div");
  All_task_container.classList.add("All-tasks");
 
  let add_task_btn=document.createElement("button");
  add_task_btn.classList.add("add-task");
  add_task_btn.innerText="add task";
  add_task_btn.setAttribute("onclick","appendTask()")

  to_do_Container.appendChild(All_task_container);
  to_do_Container.appendChild(add_task_btn);

  newBoard.appendChild(boardnameDiv);
  newBoard.appendChild(to_do_Container)

Board_container.appendChild(newBoard);
 

  
}

function appendTask(e){
 console.log(e.target)
}