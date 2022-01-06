var quill = new Quill('#editor', {
  theme: 'snow',
  bounds: '.left',
});

var quill2 = new Quill('#editor2', {
  theme: 'snow',
  bounds: '.right',
});

chrome.storage.local.get(['contents'], function(result) {
  console.log(result.contents);
  quill.setContents(result.contents);
});

quill.on('text-change', function(delta, oldDelta, source) {
  var content = quill.getContents();
  chrome.storage.local.set({"contents": content}, function() {
  });
});

chrome.storage.local.get(['contents2'], function(result) {
  console.log(result.contents2);
  quill2.setContents(result.contents2);
});

quill2.on('text-change', function(delta, oldDelta, source) {
  var content = quill2.getContents();
  chrome.storage.local.set({"contents2": content}, function() {
  });
});

btn = document.querySelector('.toggle');

btn.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
  chrome.storage.local.set({"dark": !dark}, function() {
  });
})

quill.keyboard.addBinding({
  key: '8',
  ctrlKey: true,
  shiftKey: true,
}, function(range, context) {
  if (context.format.list) {
    this.quill.formatLine(range, 'list', false);
  } else {
    this.quill.formatLine(range, 'list', 'bullet');
  }
});


quill2.keyboard.addBinding({
  key: '8',
  ctrlKey: true,
  shiftKey: true,
}, function(range, context) {
  if (context.format.list) {
    this.quill.formatLine(range, 'list', false);
  } else {
    this.quill.formatLine(range, 'list', 'bullet');
  }
});