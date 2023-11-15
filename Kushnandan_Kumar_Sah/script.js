let html_code=CodeMirror(document.querySelector("#html-code"),{
    lineNumbers:true,
    tabSize:4,
    mode:"xml",
    theme:"night",
    hint:"html-hint"


})
let css_code=CodeMirror(document.querySelector("#css-code"),{
    lineNumbers:true,
    tabSize:4,
    mode:"css",
    theme:"night",


})
let js_code=CodeMirror(document.querySelector("#js-code"),{
    lineNumbers:true,
    tabSize:4,
    mode:"javascript",
    theme:"xq-dark"


})
document.addEventListener("input",()=>{
    let html_editor_code=html_code.getValue();
    let css_editor_code="<style>"+css_code.getValue()+"</style>";
    let js_editor_code="<scri"+"pt>"+js_code.getValue()+"</scri"+"pt>";
    let output_window=document.querySelector(".output").contentWindow.document;
    output_window.open();
    output_window.write(html_editor_code+css_editor_code+js_editor_code);
    output_window.close();
})
document.querySelector(".clear0").addEventListener("click",()=>{
    html_code.setValue("");
 })

document.querySelector(".clear1").addEventListener("click",()=>{
   css_code.setValue("");
})
document.querySelector(".clear2").addEventListener("click",()=>{
    js_code.setValue("");
 })


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