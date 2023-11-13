import {getCurrentTab} from "./helper.js"

document.addEventListener("DOMContentLoaded",async()=>{
    const active_tab=await getCurrentTab();
    const queryParameters=active_tab.url.split("?")[1];
    const urlParameters= new URLSearchParams(queryParameters);

    const currentVideo=urlParameters.get("v");


    if(active_tab.url.includes("youtube.com/watch") && currentVideo){

        chrome.storage.sync.get([currentVideo],(data)=>{
            const currentVideoBookmarks=data[currentVideo] ? JSON.parse(data[currentVideo]) : [];
        })
    }else{
        document.querySelector(".title").innerHTML="<h2> Not a youTube Page<h2>"
    }
})