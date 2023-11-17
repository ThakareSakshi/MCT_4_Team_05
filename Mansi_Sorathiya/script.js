// !<-----------------------add home page link into template page------------------------->
document.querySelector("#header_file_icon").addEventListener("click", (e) => {
  console.log(window.location);
  window.location.pathname = "/MCT_4_Team_05/Mansi_Sorathiya/index.html";
});

//!<--------------default value for header of template------------------------------------>
document.querySelectorAll(".tem1_header").forEach((el) => {
  el.innerText = "FIRST NAME SURNAME";
});

//!<----------------select template--------------------------->
let selectTemplate = document.querySelector("select");
const templateIds = ["template_1", "template_2", "template_3"];
const optionList = ["Two-Column", "Minimalist", "Simple"];
const color1 = ["#8B0000", "#D3D3D3", "#ffffff"];
const color2 = ["#ffffff", "#000000", "#000000"];
// header and header text color
document.querySelector("#color1").value = "#8B0000";
document.querySelector("#color2").value = "#ffffff";

selectTemplate.addEventListener("input", (e) => {
  for (let i = 0; i <= 2; i++) {
    const templateElement = document.querySelector(`#${templateIds[i]}`);
    if (selectTemplate.value == optionList[i]) {
      templateElement.style.display = "block";
      document.querySelector("#color1").value = color1[i];
      document.querySelector("#color2").value = color2[i];
    } else {
      templateElement.style.display = "none";
    }
  }
});

//!<------------take info from user page-------------->
//for add employement data
let addEmploymentBtn = document.querySelector("#add_employment");
let addEmployementInfoStatic = document.querySelector(
  "#add_employement_info_static"
);

//todo addDataToEmploymentDiv in template-1 & 2 div--> template 1 &2
let addEmploymentInfo = document.createElement("div");
function addDataToEmploymentDiv(
  btn,
  inputsEmployement,
  textareaEmployement,
  warningEmployement
) {
  btn.addEventListener("click", () => {
    let flag = 1;
    inputsEmployement.forEach((el) => {
      if (el.value == "") {
        flag = 0;
      }
    });
    if (textareaEmployement.value == "" || flag == 0) {
      warningEmployement.innerText = "Please Fill every detail !";
    } else {
      warningEmployement.innerText = "";
      addEmploymentBtn.id = "add_employment";
      addEmploymentInfo.innerHTML = "";
      let obj = {
        0: "newDiv1",
        1: "newDiv2",
        2: "newDiv3",
      };
      let startDate = new Date(inputsEmployement[0].value);
      let endDate = new Date(inputsEmployement[1].value)
      console.log(startDate.toLocaleDateString());
      for (let key in obj) {
        obj[key] = document.createElement("div");
        obj[key].innerHTML = `
            <div class="employment_temp1_main">
                <div class="employment_temp1_main1">
                    <ul><li>${inputsEmployement[2].value} At ${inputsEmployement[3].value}</li></ul>
                    <p>${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}</p>
                </div>
                <p class="temp1_job_title">${inputsEmployement[2].value}</p>
                <p class="temp1_emplyoment_description">${textareaEmployement.value}</p>
            </div>
                `;
        document
          .querySelectorAll(".temp1_2_professional_exp")
          [key].append(obj[key]);
      }
    }
  });
}

//add data to left part
addEmploymentBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addEmploymentInfo.id = "add_employment_info";
  addEmploymentBtn.id = "add_employment_after_click";
  addEmploymentInfo.innerHTML = `
    <h4 class="start_date">Start</h4>
    <input type="month" style="margin-bottom='0px'"><br>
    <h4 class="end_date">End</h4>
    <input type="month" required><br>
    <input type="text" name="" id="" placeholder="Job Title" required><br>
    <input type="text" placeholder="Employer" required><br>
    <textarea name="" id="" cols="30" rows="6" placeholder="Description" required></textarea>
    <p id="employement_warning"></p>
    <button id="add_emplyoment_data">Add Data</button>
    `;
  addEmployementInfoStatic.append(addEmploymentInfo);

  let addEmplyomentDataBtn = document.querySelector("#add_emplyoment_data");
  let inputsOfEmployementDiv = document.querySelectorAll(
    "#add_employment_info input"
  );
  let warningEmployement = document.querySelector("#employement_warning");
  let textAreaOfEmployementDiv = document.querySelector(
    "#add_employment_info textarea"
  );
  addDataToEmploymentDiv(
    addEmplyomentDataBtn,
    inputsOfEmployementDiv,
    textAreaOfEmployementDiv,
    warningEmployement
  );
});

//todo add project data in template-1&2 div -- > template 1&2
let addProjectInfo = document.createElement("div");
function addDataToProjectDiv(
  btn,
  inputsProject,
  textareaProject,
  warningProject
) {
  btn.addEventListener("click", () => {
    let flag = 1;
    inputsProject.forEach((el) => {
      if (el.value == "") {
        flag = 0;
      }
    });
    if (textareaProject.value == "" || flag == 0) {
      warningProject.innerText = "Please Fill every detail";
    } else {
      warningProject.innerText = "";
      addProjectBtn.id = "add_project";
      let obj = {
        0: "newDiv1",
        1: "newDiv2",
        2: "newDiv3",
      };
      for (let key in obj) {
        obj[key] = document.createElement("div");
        addProjectInfo.innerHTML = "";
        obj[key].innerHTML = `
            <div class="project_main">
                <div class="employment_temp1_main1">
                    <ul><li>${inputsProject[2].value}</li></ul>
                    <p>${inputsProject[0].value}/${inputsProject[1].value}</p>
                </div>
                <p class="temp1_emplyoment_description">${textareaProject.value}</p>
            </div>
          `;
        document
          .querySelectorAll(".temp1_2_project")
          [key].appendChild(obj[key]);
      }
    }
  });
}

//for add project data
let addProjectBtn = document.querySelector("#add_project");
let addProjectInfoStatic = document.querySelector("#add_project_info_static");
addProjectBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addProjectInfo.id = "add_project_info";
  addProjectBtn.id = "add_project_after_click";
  addProjectInfo.innerHTML = `
    <h4 class="start_date">Start</h4>
    <input type="month"><br>
    <h4 class="end_date">End</h4>
    <input type="month"><br>
    <input type="text" name="" id="" placeholder="Project Title"><br>
    <textarea name="" id="" cols="30" rows="6" placeholder="Description"></textarea>
    <p id="warning"></p>
    <button id="add_project_data">Add Data</button>
    `;
  addProjectInfoStatic.append(addProjectInfo);
  let addProjectDataBtn = document.querySelector("#add_project_data");
  let inputsOfProjectDiv = document.querySelectorAll("#add_project_info input");
  let warningProject = document.querySelector("#warning");
  let textAreaOfProjectDiv = document.querySelector(
    "#add_project_info textarea"
  );
  addDataToProjectDiv(
    addProjectDataBtn,
    inputsOfProjectDiv,
    textAreaOfProjectDiv,
    warningProject
  );
});

//todo add education data in template-1 & 2div -- > template 1&2
let addEducationInfo = document.createElement("div");
function addDataToEducationDiv(
  btn,
  inputsEducation,
  textAreaEducation,
  warningEducation
) {
  btn.addEventListener("click", () => {
    let flag = 1;
    inputsEducation.forEach((el) => {
      if (el.value == "") {
        flag = 0;
      }
    });
    if (textAreaEducation.value == "" || flag == 0) {
      warningEducation.innerText = "Please Fill every detail";
    } else {
      warningEducation.innerText = "";
      addEducationBtn.id = "add_education";
      let obj = {
        0: "newDiv1",
        1: "newDiv2",
        2: "newDiv3",
      };
      for (const key in obj) {
        obj[key] = document.createElement("div");
        addEducationInfo.innerHTML = "";
        obj[key].innerHTML = `
      <div class="education_main">
          <div class="employment_temp1_main1">
              <ul><li>${inputsEducation[2].value}</li></ul>
              <p>${inputsEducation[0].value}/${inputsEducation[1].value}</p>
          </div>
          <p class="temp1_job_title">${inputsEducation[3].value}</p>
          <p class="temp1_emplyoment_description">${textAreaEducation.value}</p>
      </div>
          `;
        document
          .querySelectorAll(".temp1_2_education")
          [key].appendChild(obj[key]);
      }
    }
  });
}

//for add education data
let addEducationBtn = document.querySelector("#add_education");
let addEducationInfoStatic = document.querySelector(
  "#add_education_info_static"
);
addEducationBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addEducationInfo.id = "add_education_info";
  addEducationBtn.id = "add_education_after_click";
  addEducationInfo.innerHTML = `
    <h4 class="start_date">Start</h4>
    <input type="month"><br>
    <h4 class="end_date">End</h4>
    <input type="month"><br>
    <input type="text" name="" id="" placeholder="School/College"><br>
    <input type="text" name="" id="" placeholder="degree"><br>
    <textarea name="" id="" cols="30" rows="6" placeholder="Description"></textarea>
    <p id="education_warning"></p>
    <button id="add_education_data">Add Data</button>
    `;
  addEducationInfoStatic.append(addEducationInfo);
  let addEducationDataBtn = document.querySelector("#add_education_data");
  let inputsOfEducationDiv = document.querySelectorAll(
    "#add_education_info input"
  );
  let warningEducation = document.querySelector("#education_warning");
  let textAreaOfEducationDiv = document.querySelector(
    "#add_education_info textarea"
  );
  addDataToEducationDiv(
    addEducationDataBtn,
    inputsOfEducationDiv,
    textAreaOfEducationDiv,
    warningEducation
  );
});

//!<------------------------add contact data and header data to templates------------------------------------------->
let inputs = document.querySelectorAll("input");
let summary = document.querySelector("textarea");
// console.log(inputs);
// console.log(descriptions);
document.addEventListener("input", (e) => {
  //add contact info to template-1 & template-2
  for (let i = 0; i < 3; i++) {
    document.querySelectorAll(".temp1_header")[i].style.backgroundColor =
      inputs[0].value;
    document.querySelectorAll(".temp1_header h1")[i].style.color =
      inputs[1].value;
    document.querySelectorAll(".temp1_header_para")[i].style.color =
      inputs[1].value;
    document.querySelectorAll(".temp1_header h1")[i].innerText =
      inputs[2].value;
    document.querySelectorAll(".temp1_header_para")[i].innerText =
      inputs[6].value;
    document.querySelectorAll(".temp1_phone")[i].innerText = inputs[4].value;
    document.querySelectorAll(".temp1_gmail")[i].innerText = inputs[3].value;
    document.querySelectorAll(".temp1_location")[i].innerText = inputs[5].value;
    //add summary
    document.querySelectorAll(".temp1_2_summary")[i].innerHTML = `
      <p>${summary.value}</p>
    `;
  }

  document.querySelectorAll("#temp2_icons p").forEach((el) => {
    el.style.color = inputs[1].value;
  });
  //add skills
  let temp1_skill_div = document.querySelectorAll(".temp1_skills");
  temp1_skill_div.forEach((el) => {
    el.innerText = "";
    let temp1_skill_arr = inputs[7].value.split(",");

    addSkill(el, temp1_skill_arr);
  });
});

//add skill to tenplate1
function addSkill(temp1_skill_div, temp1_skill_arr) {
  temp1_skill_arr.forEach((el) => {
    // console.log(el);
    let div_skill = document.createElement("div");
    div_skill.classList.add("div_skill");
    // div_skill.style.backgroundColor = "black";
    div_skill.innerText = el;
    // temp1_skill_div.innerText = el;
    // el.style.color = "white";
    temp1_skill_div.append(div_skill);
  });
}

//!download html to pdf
let element = document.getElementById("template1_container");
let templateIdOfContainers = [
  "template1_container",
  "template2_container",
  "template3_container",
];
selectTemplate.addEventListener("input", (e) => {
  console.log(selectTemplate.value);
  for (let i = 0; i <= 2; i++) {
    if (selectTemplate.value == optionList[i]) {
      element = document.getElementById(templateIdOfContainers[i]);
    }
  }
});
console.log(element);
function generatePDF() {
  // Use html2pdf to create and download the PDf
  html2pdf(element, {
    margin: 10,
    filename: "resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  });
}
