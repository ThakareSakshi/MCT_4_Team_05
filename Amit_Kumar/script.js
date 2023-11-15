let navbtn1=document.getElementById("btn1");
let navbtn2=document.getElementById("btn2");
let container1=document.getElementById("container1");
let container2=document.getElementById("container2");
navbtn1.addEventListener("click",(e)=>{
 container1.style.display="inline"
 container2.style.display="none"
 
 
})
navbtn2.addEventListener("click",(e)=>{
    container2.style.display="inline"
 container1.style.display="none"
})
let form1 =document.getElementById("form1");
let form2 =document.getElementById("form2");
let mobileBtn=document.getElementById("mobileBtn");
let mobileNumber =document.getElementById("mobileNumber");
let mobileAmmount =document.getElementById("mobileAmmount");
let accountholder=document.getElementById("accountholder");
let bankAmmount=document.getElementById("bankAmmount");
let loader=document.getElementById("loader");
let loader1=document.getElementById("loader1");

// addEventListener and functionality start here on molie payment
form1.addEventListener("submit",(e)=>{
    e.preventDefault();
    loader.style.display="inline"
     setTimeout(()=>{
        loader.style.display="none"
        let transactionId=Math.floor(Math.random()*9000000000)+1000000000;
        console.log(transactionId);
        let checkCondition=Math.random()*10;
        if(checkCondition!=1){
            container1.innerHTML="";
            let div =document.createElement("div");
            div.innerHTML=`
            <img src="./success.png" alt="">
             <h1>₹${mobileAmmount.value}</h1>
            <h2>Payment Success</h2>
            <p>Transaction ID:${transactionId}</p>
            <h2>Paid To:${mobileNumber.value}</h2>
           <button onclick="window.location.reload()">MAKE OTHER PAYMENT</button>
            
            `
            container1.appendChild(div)
            console.log(checkCondition);
        }
        else{
            container1.innerHTML="";
            let div =document.createElement("div");
            div.innerHTML=`
            <img src="./fail.png" alt="">
             <h1>₹${mobileAmmount.value}</h1>
            <h2>Payment Failed</h2>
            <p>Transaction ID:${transactionId}</p>
           
           <button onclick="window.location.reload()">Try again</button>
            
            
            `
            container1.appendChild(div);
        }
     },2000)
})


// addEventListener and functionality start here on bank payment

form2.addEventListener("submit",(e)=>{
    e.preventDefault();
    loader1.style.display="inline"
     setTimeout(()=>{
        loader.style.display="none"
        let transactionId=Math.floor(Math.random()*9000000000)+1000000000;
        console.log(transactionId);
        let checkCondition=Math.random()*10;
        if(checkCondition!=1){
            container2.innerHTML="";
            let div =document.createElement("div");
            div.innerHTML=`
            <img src="./success.png" alt="">
             <h1>₹${bankAmmount.value}</h1>
            <h2>Payment Success</h2>
            <p>Transaction ID:${transactionId}</p>
            <h2>Paid To:${accountholder.value}</h2>
           <button onclick="window.location.reload()">MAKE OTHER PAYMENT</button>
            
            `
            container2.appendChild(div)
            console.log(checkCondition);
        }
        else{
            container2.innerHTML="";
            let div =document.createElement("div");
            div.innerHTML=`
            <img src="./fail.png" alt="">
             <h1>₹${bankAmmount.value}</h1>
            <h2>Payment Failed</h2>
            <p>Transaction ID:${transactionId}</p>
           
           <button onclick="window.location.reload()">Try again</button>
            
            
            `
            container2.appendChild(div);
        }
     },2000)
})
