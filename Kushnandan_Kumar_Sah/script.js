// -----------------------codemirrors html code editor with theme, and linenumbers ------------------------------

let html_code=CodeMirror(document.querySelector("#html-code"),{
    lineNumbers:true,
    tabSize:4,
    mode:"xml",
    theme:"night",
    hint:"html-hint"


})

// -----------------------codemirrors css code editor ------------------------------

let css_code=CodeMirror(document.querySelector("#css-code"),{
    lineNumbers:true,
    tabSize:4,
    mode:"css",
    theme:"night",


})
// -----------------------codemirrors js code editor with theme, and linenumbers ------------------------------

let js_code=CodeMirror(document.querySelector("#js-code"),{
    lineNumbers:true,
    tabSize:4,
    mode:"javascript",
    theme:"xq-dark"


})
let h_code=window.localStorage.getItem(`html-code`)
let c_code=window.localStorage.getItem(`css-code`)
let j_code=window.localStorage.getItem(`js-code`)
if(h_code!=null){
    html_code.setValue(h_code)
}
if(c_code!=null){
    css_code.setValue(c_code)
}

if(j_code!=null){
    js_code.setValue(j_code)
}

displayOutput();




function displayOutput(){
    let html_editor_code=html_code.getValue();
    let css_editor_code="<style>"+css_code.getValue()+"</style>";
    let js_editor_code="<scri"+"pt>"+js_code.getValue()+"</scri"+"pt>";
    let output_window=document.querySelector(".output").contentWindow.document;
    output_window.open();
    output_window.write(html_editor_code+css_editor_code+js_editor_code);
    output_window.close();
    //  -------------------------------storing code into local storage-----------------------------
    window.localStorage.setItem("html-code",`${html_code.getValue()}`)
    window.localStorage.setItem("css-code",`${css_code.getValue()}`)
    window.localStorage.setItem("js-code",`${js_code.getValue()}`)

}

// -------------------- when any input is added to code editor-------------------------
document.addEventListener("input",()=>{
    displayOutput();
})

document.addEventListener("keydown",(e)=>{
  displayOutput();
})




//---------------------event listner to clear all code in editor-----------------------------
document.querySelector(".clear0").addEventListener("click",()=>{
    html_code.setValue("");
 })

document.querySelector(".clear1").addEventListener("click",()=>{
   css_code.setValue("");
})
document.querySelector(".clear2").addEventListener("click",()=>{
    js_code.setValue("");
 })

//---------------------setting theme of editors--------------------------------------
 let setting0=document.querySelector(".setting0")
 let setting1=document.querySelector(".setting1")
 let setting2=document.querySelector(".setting2")
 setting0.addEventListener("click",()=>{

    if(setting0.innerHTML==`<i class="fas fa-sun"></i>`){
        html_code.setOption("theme","default");
        setting0.innerHTML=`<i class="fas fa-moon"></i>`
        
    }else{
        html_code.setOption("theme","night");
        setting0.innerHTML=`<i class="fas fa-sun"></i>`
    }
   
    console.log(html_code)
 })
 setting1.addEventListener("click",()=>{

    if(setting1.innerHTML==`<i class="fas fa-sun"></i>`){
        css_code.setOption("theme","default");
        setting1.innerHTML=`<i class="fas fa-moon"></i>`
        
    }else{
        css_code.setOption("theme","night");
        setting1.innerHTML=`<i class="fas fa-sun"></i>`
    }
   
    console.log(html_code)
 })
 setting2.addEventListener("click",()=>{

    if(setting2.innerHTML==`<i class="fas fa-sun"></i>`){
       js_code.setOption("theme","default");
        setting2.innerHTML=`<i class="fas fa-moon"></i>`
        
    }else{
       js_code.setOption("theme","night");
        setting2.innerHTML=`<i class="fas fa-sun"></i>`
    }
   
    console.log(html_code)
 })


 //--------------------------cpoy code to click
 document.querySelector(".copy-html-code").addEventListener("click",(e)=>{
    if(e.which==1){
        e.target.style.color="yellow";
        document.querySelector("#copy-dialog").style.display="flex";
        setTimeout(() => {
            e.target.style.color="white";
            document.querySelector("#copy-dialog").style.display="none";
        },1000);
        navigator.clipboard.writeText(html_code.getValue());
    }
    
 })
 document.querySelector(".copy-css-code").addEventListener("click",(e)=>{
    if(e.which==1){
        e.target.style.color="yellow";
        document.querySelector("#copy-dialog").style.display="flex";

        setTimeout(() => {
            e.target.style.color="white";
            document.querySelector("#copy-dialog").style.display="none";

        },1250);
        navigator.clipboard.writeText(css_code.getValue());
    }
    
 })

 document.querySelector(".copy-js-code").addEventListener("click",(e)=>{
    if(e.which==1){
        e.target.style.color="yellow";
        document.querySelector("#copy-dialog").style.display="flex";

        setTimeout(() => {
            e.target.style.color="white";
            document.querySelector("#copy-dialog").style.display="none";

        },1000);
        navigator.clipboard.writeText(js_code.getValue());
    }
    
 })