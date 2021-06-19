/*header*/

;(function () {
  if (window.matchMedia('(max-width:992px)').matches) {
    return
  }
  var headerPage = document.querySelector('.header-page')
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 0) {
      headerPage.classList.add('is-active')
    } else {
      headerPage.classList.remove('is-active')
    }
  })
})()
/*header*/

/*popup*/
/*
;(function () {
  var body = document.querySelector('body')

  var closestItemClass = function (item, className) {
    var node = item

    while (node) {
        if (node.classList.contains(className)) {
        return node
      }
      node = node.parentElement
    }
    return null
  }


  var closestAttr = function (item, attr) {
    var node = item

    while (node) {
      var attrValue = node.getAttribute(attr)
      if (attrValue) {
        return attrValue
      }
      node = node.parentElement
    }
    return null
  
  var showPopup = function (target) {
    target.classList.add('is-active')
  }
  var closePopup = function (target) {
    target.classList.remove('is-active')
  }
  var togglScroll = function () {
    body.classList.toggle('no-scrol');
  };

  body.addEventListener('click', function (e) {
    var target = e.target;
    var popupClass = closestAttr(target, 'data-popup');
  

  if (popupClass === null) {
    return;
  }
  e.preventDefaulte();
  var popup = document.querySelector('.' + popupClass);

  if (popup) {
    showPopup(popup);
    toggleScroll();
  }
});

body.addEventListener('click', function (e) {
  var target = e.target;

  if (target.classList.contains('popup__btn-close') ||
      target.classList.contains('popup__inner')) {
        var popup =  closeItemClass(target, 'popup');
    
        closePopup(popup);
        toggleScroll();
  }
});


body.addEventListener('keydown', function (e) {
  if(e.keyCode !== 27) {
    return;
  }

  var popup = document.querySelector('.popup.is-active');

  if (popup) {
    closePopup(popup);
    toggleScroll();
  }
});
})();
popup*/

/*scroll to*/
;(function() {
  window.myLib = {};

  window.myLib.body = document.querySelector('body');

  window.myLib.closestAttr = function(item, attr) {
    var node = item;

    while(node) {
      var attrValue = node.getAttribute(attr);
      if (attrValue) {
        return attrValue;
      }

      node = node.parentElement;
    }

    return null;
  };

  window.myLib.closestItemByClass = function(item, className) {
    var node = item;

    while(node) {
      if (node.classList.contains(className)) {
        return node;
      }

      node = node.parentElement;
    }

    return null;
  };

  window.myLib.toggleScroll = function() {
    myLib.body.classList.toggle('no-scroll');
  };
})(); 


;(function() {
  var showPopup = function(target) {
    target.classList.add('is-active');
  };

  var closePopup = function(target) {
    target.classList.remove('is-active');
  };

  myLib.body.addEventListener('click', function(e) {
    var target = e.target;
    var popupClass = myLib.closestAttr(target, 'data-popup');

    if (popupClass === null) {
      return;
    }

    e.preventDefault();
    var popup = document.querySelector('.' + popupClass);

    if (popup) {
      showPopup(popup);
      myLib.toggleScroll();
    }
  });

  myLib.body.addEventListener('click', function(e) {
    var target = e.target;

    if (target.classList.contains('popup-close') ||
        target.classList.contains('popup__inner')) {
          var popup = myLib.closestItemByClass(target, 'popup');

          closePopup(popup);
          myLib.toggleScroll();
    }
  });

  myLib.body.addEventListener('keydown', function(e) {
    if (e.keyCode !== 27) {
      return;
    }

    var popup = document.querySelector('.popup.is-active');

    if (popup) {
      closePopup(popup);
      myLib.toggleScroll();
    }
  });
})();

/*scrooll to*/
;(function() {
  var body = document.querySelector('body');

  var closestAttr = function (item, attr) {
    var node = item

    while (node) {
      var attrValue = node.getAttribute(attr)
      if (attrValue) {
        return attrValue
      }
      node = node.parentElement
    }
    return null
};
  var scroll =  function(target) {
    var targetTop = target.getBoundingClientRect().top;
    var scroollTop = window.pageYOffset;
    var targetOffsetTop = targetTop + scroollTop;
    var headerOffset = document.querySelector('.header-page').clientHeight

    window.scrollTo (0, targetOffsetTop - headerOffset)
  }

  body.addEventListener('click', function(e) {
    var target = e.target;
    var scrollToItemClass = closestAttr(target,'data-scroll-to');

    if (scroollToItemClass ===null) {
      return;
    }
  e.preventDefault();
  var scrollToItem = document.querySelector('.'+ scrollToItemClass);
  if (scrollToItem){
    scroll(scrollToItem);
  }
  })
})();




28/27-6666

переименовтаь иконку