

var SweetSelector = (function(){

  var select = function(anchorTag){
    var selector = anchorTag.charAt(0)
    console.log(selector)
    var word = croptAnchorTag(anchorTag, selector)
    console.log (word)
    switch(selector) {
      case '.':
        console.log("I am in the class path")
        console.log(word)
        var elements = document.getElementsByClassName(word);
        break
      default:
        console.log('element not returned');
    }
    return elements
  }

  var croptAnchorTag = function(anchorTag, selector) {
    if (selector === '.' || selector === '#') {
      var x = (anchorTag.substr(1,anchorTag.length ));
      console.log(x)
      return x
    } else {
      return anchorTag;
    }
  }
  return {
    select: select
  }
})();


  var Dom = (function(){
    // Pseudocode
    // add anchor tag as parameter
    // search for anchor tag using query selector
    // set display to none or null

    var hide = function(anchortag) {
      var classSelector = document.querySelector(anchortag);
      classSelector.style.display = 'none';
    }

    var show = function(anchortag) {
      var classSelector = document.querySelector(anchortag);
      classSelector.style.display = 'block';
    }

    var addClass = function(anchortag,newtag) {
      var classSelector = document.querySelector(anchortag);
      console.log(newtag)
      classSelector.insertAdjacentHTML('afterbegin', newtag);
    }

    return {
      show: show,
      hide: hide,
      addClass: addClass
    }

  })();

// DOM.hide('.klass') // hides the div
// DOM.show('.klass') // shows the div
