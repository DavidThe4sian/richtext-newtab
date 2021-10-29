var quill = new Quill('#editor', {
  theme: 'snow',
  bounds: '.left',
});

var quill2 = new Quill('#editor2', {
  theme: 'snow',
  bounds: '.right',
});

chrome.storage.sync.get(['contents'], function(result) {
  console.log('Value currently is ');
  console.log(result.contents);
  quill.setContents(result.contents);
});

quill.on('text-change', function(delta, oldDelta, source) {
  var content = quill.getContents();
  chrome.storage.sync.set({"contents": content}, function() {
  });
});

chrome.storage.sync.get(['contents2'], function(result) {
  console.log(result);
  quill2.setContents(result.contents2);
});

quill2.on('text-change', function(delta, oldDelta, source) {
  var content = quill2.getContents();
  chrome.storage.sync.set({"contents2": content}, function() {
  });
});

btn = document.querySelector('.toggle');

btn.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
})

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
