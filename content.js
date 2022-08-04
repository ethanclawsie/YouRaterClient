if (window.location.href.includes("/watch?v=") > -1) {
  onUrlChange();
}
//Gets data when opened in new tab

if (window.location.href.indexOf("youtube.com") > -1) {
  let lastUrl = document.title.split(" - YouTube")[0];
  new MutationObserver(() => {
    const url = document.title.split(" - YouTube")[0];
    if (url !== lastUrl) {
      lastUrl = url;
      onUrlChange();
    }
  }).observe(document, { subtree: true, childList: true });
}
//Gets data when opened in same tab

function onUrlChange() {
  getvideotitle();
  getvideoid();
}
//Gets the data

function getvideotitle() {
  var videotitle = document.title.split(" - YouTube")[0];
  chrome.storage.local.set({ storedvideotitle: videotitle });
}
//Gets the video title

function getvideoid() {
  if (window.location.toString().includes("t=")) {
    const videoId = window.location.search.split("v=")[1].substring(0, 11);
    chrome.storage.local.set({ storedvideoid: videoId });
    var thumbnail = "https://img.youtube.com/vi/" + videoId + "/0.jpg";
    chrome.storage.local.set({ storedthumbnail: thumbnail });
  } else {
    const videoId = window.location.search.split("v=")[1];
    chrome.storage.local.set({ storedvideoid: videoId });
    var thumbnail = "https://img.youtube.com/vi/" + videoId + "/0.jpg";
    chrome.storage.local.set({ storedthumbnail: thumbnail });
  }
}
//Gets the video id
