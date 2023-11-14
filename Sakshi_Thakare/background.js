// to check updates on crome tabs---------------->

chrome.tabs.onUpdated.addListener(async (tabId, tab) => {
  let t = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  //   await console.log(t[0].url)

  console.log(t);
  if (t[0].url && t[0].url.includes("youtube.com/watch")) {
    //creating unique value from tab url
    const queryParameters = t[0].url.split("?")[1];
    const urlParameters = new URLSearchParams(queryParameters);
    console.log(urlParameters);
    console.log(t[0].title)

    //---sending message to contentjs with id-----
    await chrome.tabs.sendMessage(
      tabId,
      {
        type: "NEW",
        videoId: urlParameters.get("v"),
        title:t[0].title,
      },
      function (response) {
        if (!chrome.runtime.lastError) {
          console.log("response", response);
        } else {
          console.log(chrome.runtime.lastError);
        }
      }
    );
  }
});
