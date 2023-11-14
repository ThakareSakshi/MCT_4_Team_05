let textbox = document.querySelector("textarea");
let para = document.querySelector(".para");
let time = 60;
let wpm = 0;
let cpm = 0;
let mistake = 0;
let accuracy = 100;
let word_array = [];
let index=0;
// -----------fetched buttons----------------
const move_Difficluty_page = document.querySelector("#move-to-difficulty");
const move_to_typing = document.querySelector("#move-to-typing");
const try_again_btn = document.querySelector("#try_again_btn");
const try_again_after_result = document.querySelector(
  "#try_again_after_result"
);

//--------------fetched pages--------------------

let welcome_page = document.querySelector("#welcome-page");
let difficulty_page = document.querySelector("#Difficulty-page");
let typing_page = document.querySelector("#typing-page");
let result_page = document.querySelector("#result-page");
let loader = document.querySelector(".loader_section");

//----------fetch values-------------------
let words = document.querySelector("#wpm");
let mistakes = document.querySelector("#mistakes");
let characters = document.querySelector("#cpm");
let difficulty_level = document.querySelector("select");

//----------event listener------moving to next page------------------
move_Difficluty_page.addEventListener("click", () => {
  welcome_page.style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    difficulty_page.style.display = "flex";
  }, 2000);
});

move_to_typing.addEventListener("click", () => {
  AddParagraph();
  difficulty_page.style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    typing_page.style.display = "flex";
  }, 2000);
});

try_again_after_result.addEventListener("click", () => {
  loader.style.display = "flex";
  result_page.style.display = "none";
  setTimeout(() => {
    loader.style.display = "none";
    difficulty_page.style.display = "flex";
  }, 2000);
});

// ----------------typing functionality--------------------

// --------------timer--------------------------------
let istyping=true;
textbox.focus();
para.addEventListener("click", () => {
  let timer = document.querySelector("#remaining-time");
  if(!istyping && time!=0) return;
  let remaining_time = setInterval(() => {
    time--;
    istyping=false;
    timer.innerText = time;
    // console.log(time);
    if (time == 0) {
      istyping=true;
      clearInterval(remaining_time);
      displayresult();
      resetAll();
      typing_page.style.display = "none";
      result_page.style.display = "flex";
    }
  }, 1000);
});

// -----------------------wpm and cpm calculation-----------

textbox.addEventListener("input", (e)=>{

  startTyping(e);
});

//----------Add paragraph----------------------
function AddParagraph() {
  let paratext;

  if (difficulty_level.value == "easy") {
    paratext = easy[Math.floor(Math.random() * (easy.length - 1))];
  } else if (difficulty_level.value == "medium") {
    paratext = medium[Math.floor(Math.random() * (medium.length - 1))];
  } else if (difficulty_level.value == "hard") {
    paratext = hard[Math.floor(Math.random() * (hard.length - 1))];
  }

  paratext.split("").forEach((letter) => {
    let span = document.createElement("span");
    span.innerText = letter;

    para.appendChild(span);
    console.log();
  });
  console.log(para);
 
}


// --------------start typing-------------------
function startTyping(e) {
  document.addEventListener("keydown", () => textbox.focus());
  textbox.addEventListener("click", () => textbox.focus());
  let originalChar=para.querySelectorAll("span");
  if(e.data==null){
    index--;
    updateValues();
    originalChar[index].classList.remove("correct")
    originalChar[index].classList.remove("incorrect")
    // originalChar[index].style.color=black;
    return;
  }
  
  let inputChar=textbox.value.split("")[index];
  console.log(originalChar[index],inputChar)
  if(originalChar[index].innerText==inputChar){
    originalChar[index].classList.add("correct");
    let sound=new Audio("./assets/keypress.wav");
    sound.play();
    console.log(true);
  }else{
    originalChar[index].classList.add("incorrect");
    let sound=new Audio("./assets/fail.wav");
    sound.play();
    mistake++;
  }
  index++;
  wpm=textbox.value.split(" ").length;
  cpm=textbox.value.split("").length
  updateValues()
}

// ---------------update values-----------------------
function updateValues() {
  words.innerText = wpm;
  characters.innerText = cpm;
  mistakes.innerText = mistake;
}

//--------------calculate result----------------------
function calculateprgress() {
  let speed = wpm;
  let accuracy = (100 * (cpm - mistake)) / cpm;
  console.log(speed, accuracy);
  if (speed < 20) {
    document.querySelector(
      "#emojee"
    ).innerHTML = `<img src="./assets/slow.gif" class="image">`;
  } else if (speed < 50) {
    document.querySelector(
      "#emojee"
    ).innerHTML = `<img src="./assets/medium.gif" class="image">`;
  } else if (speed > 60) {
    document.querySelector(
      "#emojee"
    ).innerHTML = `<img src="./assets/fast.gif" class="image">`;
  }
  return accuracy;
}

function displayresult() {
  let accuracy = calculateprgress();
  document.querySelector(
    "#speed"
  ).innerHTML = `<h2>Speed : ${wpm} WPM</h2>
    <h2>Accuracy : ${accuracy} %</h2>`;
}

function resetAll() {
  time = 60;
  wpm = 0;
  cpm = 0;
  mistake = 0;
  para.innerHTML = "";
  index=0;
  textbox.value=0;
  
}

let buttons=document.querySelectorAll("button");
buttons.forEach(ele=>{
  ele.addEventListener("click",()=>{
    let sound=new Audio("./assets/click.wav");
    sound.play();
  })
})