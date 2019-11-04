const $ = function(selector) {
  let element = null;
  switch (selector.charAt(0)) {
    case "#":
      return window.document.getElementById(selector.substr(1));
    case ".":
      return window.document.getElementsByClassName(selector.substr(1));
    default:
      break;
  }
  return element;
};
const test = $("#test");
console.log(test);
