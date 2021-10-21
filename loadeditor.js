var quill = new Quill('#editor', {
  theme: 'snow'
});

// chrome.storage.sync.get(['contents'], function(result) {
//     console.log('Value currently is ' + result);
//     quill.setContents(result);
// });

chrome.storage.sync.get(['contents'], function(result) {
  console.log('Value currently is ');
  console.log(result.contents);
  quill.setContents(result.contents);
});

quill.on('text-change', function(delta, oldDelta, source) {
  console.log('changed');
  var content = quill.getContents();
  console.log(content);
  chrome.storage.sync.set({"contents": content}, function() {
    console.log('Value is set to ');
    console.log(content);
    chrome.storage.sync.get(['contents'], function(result) {
      console.log('Value currently is ');
      console.log(result);
    });
  });
});
