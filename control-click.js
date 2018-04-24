class ControlClick {
  static clickHandler(e){
    let target = this.href;

    if(window.navigator.platform === 'MacIntel' && e.metaKey) {
      console.log("command clicked");
      e.preventDefault();
      window.open(target);
    } else if (window.navigator.platform === 'Win32' && e.ctrlKey) {
      console.log("control clicked");
      e.preventDefault();
      window.open(target);
    }
  }

  static addListeners() {
    let anchors = document.getElementsByClassName("control-click");
    Array.from(anchors).forEach((anchor) => {
      if(anchor.addEventListener) {
        anchor.addEventListener('click', ControlClick.clickHandler, false);
      }
    });
  }
}

window.onload = function() {
  ControlClick.addListeners();
}
