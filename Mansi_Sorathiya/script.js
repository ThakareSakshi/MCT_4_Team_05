// console.log("mansi");

//!<------------take info from user page-------------->
//for add employement data
let addEmploymentBtn = document.querySelector("#add_employment");
let addEmployementInfoStatic = document.querySelector("#add_employement_info_static")
addEmploymentBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let addEmploymentInfo = document.createElement("div");
  addEmploymentInfo.id = "add_employment_info";
  addEmploymentInfo.innerHTML = `
    <h4>Start</h4>
    <input type="date"><br>
    <h4>End</h4>
    <input type="date"><br>
    <input type="text" name="" id="" placeholder="Job Title"><br>
    <input type="text" placeholder="Employer"><br>
    <textarea name="" id="" cols="30" rows="6" placeholder="Description"></textarea>
    `;
    addEmployementInfoStatic.append(addEmploymentInfo);
});

//for add project data
let addProjectBtn = document.querySelector("#add_project");
let addProjectInfoStatic = document.querySelector("#add_project_info_static")
addProjectBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let addProjectInfo = document.createElement("div");
  addProjectInfo.id = "add_employment_info";
  addProjectInfo.innerHTML = `
    <h4>Start</h4>
    <input type="date"><br>
    <h4>End</h4>
    <input type="date"><br>
    <input type="text" name="" id="" placeholder="Project Title"><br>
    <textarea name="" id="" cols="30" rows="6" placeholder="Description"></textarea>
    `;
    addProjectInfoStatic.append(addProjectInfo);
});

//for add education data
let addEducationBtn = document.querySelector("#add_education");
let addEducationInfoStatic = document.querySelector("#add_education_info_static")
addEducationBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let addProjectInfo = document.createElement("div");
  addProjectInfo.id = "add_employment_info";
  addProjectInfo.innerHTML = `
    <h4>Start</h4>
    <input type="date"><br>
    <h4>End</h4>
    <input type="Qualification"><br>
    <input type="School/College" name="" id="" placeholder="Project Title"><br>
    <textarea name="" id="" cols="30" rows="6" placeholder="Description"></textarea>
    `;
    addEducationInfoStatic.append(addProjectInfo);
});

//!<------------------------ template-1------------------------------------------->
document.querySelector('#color1').value = '#8B0000'
document.querySelector('#color2').value = '#ffffff'
let inputs = document.querySelectorAll("input");
console.log(inputs);
document.addEventListener("input",(e)=>{
    console.log(inputs[0].value);
    document.querySelector("#temp1_header").style.backgroundColor = inputs[0].value;
    document.querySelector("#temp1_header h1").style.color = inputs[1].value;
    document.querySelector("#temp1_header h1").innerText = inputs[2].value; 
})


//!download html to pdf
// let downloadButton = document.querySelector("header button");
// let pdfContent = document.querySelector("#addInfo");

// //first way
var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};
 
$('#generatePDF').click(function () {
    doc.fromHTML($('#template_1').html(), 15, 15, {
        'elementHandlers': specialElementHandlers
    });
    document.write();
    doc.save('sample_file.pdf');
});



