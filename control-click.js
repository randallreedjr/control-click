function clickHandler(e){
  let target = this.href;

  if(window.navigator.platform === 'MacIntel' && e.metaKey) {
    e.preventDefault();
    window.open(target);
  } else if (window.navigator.platform === 'Win32' && e.ctrlKey) {
    e.preventDefault();
    window.open(target);
  }
}

function addListeners() {
  // should probably add a class name, like .control-click
  let anchors = document.getElementsByClassName("control-click");
  Array.from(anchors).forEach((anchor) => {
    if(anchor.addEventListener) {
      anchor.addEventListener('click', clickHandler, false);
    }
  });
}

window.onload = function() {
  addListeners();
}
