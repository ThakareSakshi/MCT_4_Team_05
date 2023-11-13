

(() => {
    let youtubeLeftControls, youtubePlayer;
    let currentVideo = "";
    let currentVideoBookmarks = [];

    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, value, videoId } = obj;
        console.log("hello")

        if (type === "NEW") {
            currentVideo = videoId;
            newVideoLoaded();
        }
    });
 //--------------function to fetch chrome storage-----------------------
 const fetchAllBookmarks=()=>{
    return new Promise((resolve)=>{
        chrome.storage.sync.get([currentVideo],obj=>{
            resolve( obj[currentVideo] ? JSON.parse(obj[currentVideo]) : [])
        })

    })
 }

    // ----------function for new video--------------
    const newVideoLoaded= async() =>{
          const bookmark_btn_exist=document.getElementsByClassName("bookmark_btn")[0];
          currentVideoBookmarks=await fetchAllBookmarks();
          if(!bookmark_btn_exist){
            const bookmark_btn=document.createElement("img");
            bookmark_btn.src=chrome.runtime.getURL("assets/bk.png")
            bookmark_btn.classList.add("ytp-button");
            bookmark_btn.classList.add("bookmark_btn");
            bookmark_btn.title="bookmark time";

            youtubeLeftControls=document.getElementsByClassName("ytp-left-controls")[0];
            youtubePlayer=document.getElementsByClassName("video-stream")[0]


            //----------------adding boookmark button on video----------
            youtubeLeftControls.appendChild(bookmark_btn)

            //--------------creating aclick event on bookmark btn------------------
            bookmark_btn.addEventListener("click",bookmarkClickEventHandler)


           


          }
         
    }
          //----------event handler function for bookmark click-----------
          const bookmarkClickEventHandler=async()=>{
           const currentTime= youtubePlayer.currentTime
           const newBookmark={
            "time":currentTime,
            "desc":"bookmark-time"+getTime(currentTime)
           }
           currentVideoBookmarks=await fetchAllBookmarks();
           chrome.storage.sync.set({
            [currentVideo]: JSON.stringify([...currentVideoBookmarks, newBookmark].sort((a, b) => a.time - b.time))
        });
        console.log(newBookmark);

          }
          const getTime = t => {
            var date = new Date(0);
            date.setSeconds(1);
        
            return date.toISOString().substring(11, 0);
        }


    newVideoLoaded();
})();