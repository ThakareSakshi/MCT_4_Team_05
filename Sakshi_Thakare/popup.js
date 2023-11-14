import {getCurrentTab} from "./helper.js"

document.addEventListener("DOMContentLoaded",async()=>{
    const active_tab=await getCurrentTab();
    const queryParameters=active_tab.url.split("?")[1];
    const urlParameters= new URLSearchParams(queryParameters);

    const currentVideo=urlParameters.get("v");


    if(active_tab.url.includes("youtube.com/watch") && currentVideo){

        chrome.storage.sync.get([currentVideo],(data)=>{
            const currentVideoBookmarks=data[currentVideo] ? JSON.parse(data[currentVideo]) : [];
            // console.log(currentVideoBookmarks)
            loadVideoBookmarks(currentVideoBookmarks);
            // document.querySelector(".title").innerText=currentVideoBookmarks[0].title;

            
        })
    }else{
        document.querySelector(".title").innerHTML=`<img src="./assets/oops.gif"><h2> Not a youTube Page<h2>`
    }
})


const loadVideoBookmarks= (bookmarkList=[])=>{

   const bookmarkItems=document.querySelector(".bookmarks");
   bookmarkItems.innerHTML="";

   if (bookmarkList.length>0){
    for(let i=0; i< bookmarkList.length;i++){
        const bookmark =bookmarkList[i];
        add_new_bookmark(bookmarkItems,bookmark)
    }
   }else{
    bookmarkItems.innerHTML="<span> No bookmark is added for this video</span>";
   }
  

}


const add_new_bookmark=(bookmarkList,bookmark)=>{
    const bookmarkTitleElement=document.createElement("div");
    const newbookmarkElement=document.createElement("div");
    const controlsElement = document.createElement("div");

    bookmarkTitleElement.textContent=bookmark.desc;
    bookmarkTitleElement.classname="bookmark-title";
    controlsElement.className = "bookmark-controls";


    setBookmarkAttributes("play", onPlay, controlsElement);
  setBookmarkAttributes("delete", onDelete, controlsElement);

    newbookmarkElement.id="Bookmark At -"+bookmark.time;
    newbookmarkElement.className="New-bookmark";
    newbookmarkElement.setAttribute("timestamp",bookmark.time)

    newbookmarkElement.appendChild(bookmarkTitleElement);
    newbookmarkElement.appendChild(controlsElement);
    bookmarkList.appendChild(newbookmarkElement);


}


const setBookmarkAttributes =  (src, eventListener, controlParentElement) => {
    const controlElement = document.createElement("img");
  
    controlElement.src = "./assets/" + src + ".png";
    controlElement.title = src;
    controlElement.addEventListener("click", eventListener);
    controlParentElement.appendChild(controlElement);
  };



  //----------play delete

  const onPlay = async e => {
    const bookmarkTime = e.target.parentNode.parentNode.getAttribute("timestamp");
    const activeTab = await getCurrentTab();
  
    await chrome.tabs.sendMessage(activeTab.id, {
      type: "PLAY",
      value: bookmarkTime,
    });
  };
  
  const onDelete = async e => {
    const activeTab = await getCurrentTab();
    const bookmarkTime = e.target.parentNode.parentNode.getAttribute("timestamp");
    const bookmarkElementToDelete = document.getElementById(
        "Bookmark At -"+bookmarkTime
    );
  
    bookmarkElementToDelete.parentNode.removeChild(bookmarkElementToDelete);
  
    chrome.tabs.sendMessage(activeTab.id, {
      type: "DELETE",
      value: bookmarkTime,
    }, loadVideoBookmarks);
  };