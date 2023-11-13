
// to check updates on crome tabs---------------->
// let t=chrome.tabs.query( { active: true, lastFocusedWindow: true })
// console.log(t)

chrome.tabs.onUpdated.addListener(async(tabId, tab) => {
   
    let t=await chrome.tabs.query({ active: true, lastFocusedWindow: true })
    //   await console.log(t[0].url)

    console.log(tab)
    if (t[0].url && t[0].url.includes("youtube.com/watch")) {

        //creating unique value from tab url
      const queryParameters = t[0].url.split("?")[1];
      const urlParameters = new URLSearchParams(queryParameters);
      console.log(urlParameters)

       //---sending message to contentjs with id-----
      await chrome.tabs.sendMessage(tabId, {
        type: "NEW",
        videoId: urlParameters.get("v"),
      },function(response) {
        if (!chrome.runtime.lastError) {
          console.log('response', response);
        }else{
          console.log(chrome.runtime.lastError);
        }
      });
    }


    
  });