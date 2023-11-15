// console.log("mansi");
//!<----------------select template--------------------------->
let selectTemplate = document.querySelector("select");
selectTemplate.addEventListener("input", (e) => {
  if (selectTemplate.value == "Two-Column") {
    document.querySelector("#template_1").style.display = "block";
    document.querySelector("#template_2").style.display = "none";
  } else {
    document.querySelector("#template_2").style.display = "block";
    document.querySelector("#template_1").style.display = "none";
  }
});

//!<------------take info from user page-------------->
//for add employement data
let addEmploymentBtn = document.querySelector("#add_employment");
let addEmployementInfoStatic = document.querySelector(
  "#add_employement_info_static"
);

//todo addDataToEmploymentDiv in template-1 div--> template 1
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
      warningEmployement.innerText = "Please Fill every detail";
    } else {
      warningEmployement.innerText = "";
      let newDiv1 = document.createElement("div");
      let newDiv2 = document.createElement("div");
      addEmploymentInfo.innerHTML = "";
      let objOfEmployement = {
        newDiv1: ".temp1_2_professional_exp",
        newDiv2: ".temp2_2_professional_exp",
      };
      for (let key in objOfEmployement) {
        key.innerHTML = `
            <div class="employment_temp1_main">
                <div class="employment_temp1_main1">
                    <ul><li>${inputsEmployement[2].value} At ${inputsEmployement[3].value}</li></ul>
                    <p>${inputsEmployement[0].value}-${inputsEmployement[1].value}</p>
                </div>
                <p class="temp1_job_title">${inputsEmployement[2].value}</p>
                <p class="temp1_emplyoment_description">${textareaEmployement.value}</p>
            </div>
                `;
        document.querySelector(key[i]).append(newDiv1);
      }
    }
  });
}

//add data to left part
addEmploymentBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addEmploymentInfo.id = "add_employment_info";
  addEmploymentInfo.innerHTML = `
    <h4>Start</h4>
    <input type="date"><br>
    <h4>End</h4>
    <input type="date" required><br>
    <input type="text" name="" id="" placeholder="Job Title" required><br>
    <input type="text" placeholder="Employer" required><br>
    <textarea name="" id="" cols="30" rows="6" placeholder="Description" required></textarea>
    <button id="add_emplyoment_data">Add Data</button>
    <p id="employement_warning"></p>
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

//todo add project data in template-1 div -- > template 1
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
      let newDiv = document.createElement("div");
      addProjectInfo.innerHTML = "";
      newDiv.innerHTML = `
      <div class="project_main">
          <div class="project_main1">
              <ul><li>${inputsProject[2].value}</li></ul>
              <p>${inputsProject[0].value}-${inputsProject[1].value}</p>
          </div>
          <p class="temp1_description">${textareaProject.value}</p>
      </div>
          `;
      document.querySelector("#temp1_2_project").appendChild(newDiv);
    }
  });
}

//for add project data
let addProjectBtn = document.querySelector("#add_project");
let addProjectInfoStatic = document.querySelector("#add_project_info_static");
addProjectBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addProjectInfo.id = "add_project_info";
  addProjectInfo.innerHTML = `
    <h4>Start</h4>
    <input type="date"><br>
    <h4>End</h4>
    <input type="date"><br>
    <input type="text" name="" id="" placeholder="Project Title"><br>
    <textarea name="" id="" cols="30" rows="6" placeholder="Description"></textarea>
    <button id="add_project_data">Add Data</button>
    <p id="warning"></p>
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

//todo add education data in template-1 div -- > template 1
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
      let newDiv = document.createElement("div");
      addEducationInfo.innerHTML = "";
      newDiv.innerHTML = `
      <div class="education_main">
          <div class="education_main1">
              <ul><li>${inputsEducation[2].value}</li></ul>
              <p>${inputsEducation[0].value}-${inputsEducation[1].value}</p>
          </div>
          <p class="temp1_description">${textAreaEducation.value}</p>
      </div>
          `;
      document.querySelector("#temp1_2_education").appendChild(newDiv);
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
  addEducationInfo.innerHTML = `
    <h4>Start</h4>
    <input type="date"><br>
    <h4>End</h4>
    <input type="date"><br>
    <input type="text" name="" id="" placeholder="School/College"><br>
    <input type="text" name="" id="" placeholder="degree"><br>
    <textarea name="" id="" cols="30" rows="6" placeholder="Description"></textarea>
    <button id="add_education_data">Add Data</button>
    <p id="education_warning"></p>
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

//!<------------------------ template-1------------------------------------------->

document.querySelector("#color1").value = "#8B0000";
document.querySelector("#color2").value = "#ffffff";
let inputs = document.querySelectorAll("input");
let summary = document.querySelector("textarea");
// console.log(inputs);
// console.log(descriptions);
document.addEventListener("input", (e) => {
  //add contact info to template-1 & template-2
  for (let i = 0; i < 2; i++) {
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
    document.querySelectorAll("#temp1_2_summary")[i].innerText = summary.value;
  }

  document.querySelectorAll("#temp2_icons p").forEach((el) => {
    el.style.color = inputs[1].value;
  });
  //add skills
  let temp1_skill_div = document.querySelectorAll("#temp1_skills");
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
// let downloadButton = document.querySelector("header button");
// let pdfContent = document.querySelector("#addInfo");
// var doc = new jsPDF();
// var specialElementHandlers = {
//   "#editor": function (element, renderer) {
//     return true;
//   },
// };

// $("#generatePDF").click(function () {
//   doc.fromHTML($("#template_1").html(), 15, 15, {
//     elementHandlers: specialElementHandlers,
//   });
//   document.write();
//   doc.save("sample_file.pdf");
// });
