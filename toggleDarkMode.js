
chrome.storage.local.get(['dark'], function(result) {
  console.log(result);
  if(result.dark) {
    document.body.classList.toggle('dark-theme', true);
    dark = result.dark;
  } else {
    document.body.classList.toggle('dark-theme', false);
    dark = result.dark;
  }
})
