// background.js

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

// var urlRegex = "";
// chrome.tabs.onRemoved.addListener(function(tabId, info) {
//     chrome.tabs.get(tabId, function(tab) {
//       console.log(tabId);
//         if (urlRegex.test(tab.url)) {
//             /* The tab with ID `tabId`, with a web-page in the
//              * `google.com` domain, is being closed. Let's do something... */
//             console.log('hello');
//         }
//     });
// });
