/*
 * This script is reloaded each time that you change the url (i.e module).
 * Since we want that the user can to choose when to deactivate the toasts 
 * and there is no global application vars to store this user preferences
 * we store them in the cookie.
 */
(function(root, factory) {
  try {
    // commonjs
    if (typeof exports === 'object') {
      module.exports = factory();
    // global
    } else {
      root.VanillaToasts = factory();
    }
  } catch(error) {
    console.log('Isomorphic compatibility is not supported at this time for VanillaToasts.')
  }
})(this, function() {

  // We need DOM to be ready
  if (document.readyState === 'complete') {
    init();
  } else {
    window.addEventListener('DOMContentLoaded', init);
  }

  // Create VanillaToasts object
  VanillaToasts = {
    // In case toast creation is attempted before dom has finished loading!
    create: function() {
      console.error([
        'DOM has not finished loading.',
        '\tInvoke create method when DOM\s readyState is complete'
      ].join('\n'))
    },
    //function to manually set timeout after create
    setTimeout: function() {
      console.error([
        'DOM has not finished loading.',
        '\tInvoke create method when DOM\s readyState is complete'
      ].join('\n'))
    },
    toasts: {} //store toasts to modify later
  };

  var autoincrement = 0;

  // Initialize library
  function init() {
    // Toast container
    var container = document.createElement('div');
    container.id = 'vanillatoasts-container';
    document.body.appendChild(container);

    // @Override
    // Replace create method when DOM has finished loading
    VanillaToasts.create = function(options) {
      var toast = document.createElement('div');
      toast.id = ++autoincrement;
      toast.id = 'toast-' + toast.id;
      toast.className = 'vanillatoasts-toast';
      toast.addEventListener('click', moduleRedirect);

      toast.updateCounter = function() {
        let timesClosed = parseInt(getCookieValue("toasts_close_counter"));
        setCookie("toasts_close_counter", timesClosed + 1, true);
      }

      toast.hide = function() {
        toast.className += ' vanillatoasts-fadeOut';
        toast.addEventListener('animationend', removeToast, false);
      };

      toast.close = function() {
        toast.hide();
        toast.updateCounter();
        event.stopPropagation(); // prevents that click on '×' element propagates to the entire toast
      }

      var icon = document.createElement('i');
      icon.className = 'close';
      icon.innerHTML = '×';
      icon.addEventListener('click', toast.close);
      toast.appendChild(icon);

      // title
      if (options.title) {
        var h4 = document.createElement('h4');
        h4.className = 'vanillatoasts-title';
        h4.innerHTML = options.title;
        toast.appendChild(h4);
      }

      // text
      if (options.text) {
        var p = document.createElement('p');
        p.className = 'vanillatoasts-text';
        p.innerHTML = options.text;
        toast.appendChild(p);
      } 
      
      // yes no interactive buttons
      if (options.buttons) {
        toast.removeEventListener('click', moduleRedirect);
        var  buttonDiv = document.createElement('div');
        var buttonYes = document.createElement('button');
        buttonYes.setAttribute('type', 'button');
        buttonYes.className = 'btn btn-light vanillatoasts-button';
        buttonYes.innerHTML = 'Sí';
        buttonYes.addEventListener('click', function() {
          setCookie("toasts_show", false, true);
          toast.hide();
          toast.toasts = {};
          FS.event('clickOnToastYes', options);
          event.stopPropagation(); // prevents that click over this element propagates to the entire toast
        });
        buttonDiv.appendChild(buttonYes);
        var buttonNo = document.createElement('button');
        buttonNo.setAttribute('type', 'button');  
        buttonNo.className = 'btn btn-light vanillatoasts-button';
        buttonNo.innerHTML = 'No';
        buttonNo.addEventListener('click', function() {
          setCookie("toasts_close_counter", 0, true);
          toast.hide();
          setTimeout(launchToast, TOAST_INTERVAL_TIMEOUT);
          FS.event('clickOnToastNo', options);
          event.stopPropagation(); // prevents that click over this element propagates to the entire toast
        });
        buttonDiv.appendChild(buttonNo);
        toast.append(buttonDiv);
      } 

      // icon
      if (options.icon) {
        var img = document.createElement('img');
        img.src = options.icon;
        img.className = 'vanillatoasts-icon';
        toast.appendChild(img);
      }

      // click callback
      if (typeof options.callback === 'function') {
        toast.addEventListener('click', options.callback);
      }
      
      // autohide
      if (options.timeout) {
        setTimeout(toast.hide, options.timeout);
      }

      if (options.type) {
        toast.className += ' vanillatoasts-' + options.type;
      }

      function removeToast() {
        document.getElementById('vanillatoasts-container').removeChild(toast);
        delete VanillaToasts.toasts[toast.id];  //remove toast from object
      }
      
      function moduleRedirect() {
        location.href = options.redirectURL;
        FS.event('clickOnToast', options);
      }

      document.getElementById('vanillatoasts-container').appendChild(toast);

      //add toast to object so its easily gettable by its id
      VanillaToasts.toasts[toast.id] = toast;

      return toast;
    }

    /*
    custom function to manually initiate timeout of
    the toast.  Useful if toast is created as persistant
    because we don't want it to start to timeout until
    we tell it to
    */
    VanillaToasts.setTimeout = function(toastid, val) {
      if(VanillaToasts.toasts[toastid]){
        setTimeout(VanillaToasts.toasts[toastid].hide, val);
      }
    }
  }

  return VanillaToasts;
});

function getRandomInt(max) {
	  return Math.floor(Math.random()*max);
}

var FIRST_TOAST_TIMEOUT = 1000   // 60000 // 1min
var TOAST_INTERVAL_TIMEOUT = 3000 // 300000 // 5min
var TOAST_ONSCREEN_TIMEOUT = 10000 // 10secs
var TOAST_INFINITY_TIMEOUT = 9999999

function createRandomToast() {
    let url = window.location.pathname.toString();
    let tokens = url.split("/");
    do {
      var rndNum = getRandomInt(TOAST_MESSAGES.length); // the last item is for dismissing messages.
      // var rndNum2 = getRandomInt(TOAST_PREDICATES.length);
    } while(TOAST_MESSAGES[rndNum][0] == tokens[3])

    VanillaToasts.create({
        title: TOAST_GREETINGS[rndNum%TOAST_GREETINGS.length],
        // text: TOAST_PREDICATES[rndNum2] + '<a href="' + TOAST_MESSAGES[rndNum][0] + '">' + TOAST_MESSAGES[rndNum][1] + '</a>',
        text: TOAST_MESSAGES[rndNum][1],
        type: 'info',
        icon: TOAST_MESSAGES[rndNum][2],
        timeout: TOAST_ONSCREEN_TIMEOUT,
        redirectURL: TOAST_MESSAGES[rndNum][0]
    });
}

function createDismissToast() {
  let rndNum = getRandomInt(TOAST_MESSAGES.length);
  VanillaToasts.create({ 
    title: "¿Quieres desactivar estas notificaciones?", 
    type: 'info',
    buttons: true,
    callback: function() {},
    icon: TOAST_MESSAGES[rndNum][2], 
    timeout: TOAST_INFINITY_TIMEOUT
  });
}

function launchToast() {
  let timesClosed = parseInt(getCookieValue("toasts_close_counter"));
  let showToasts = (getCookieValue("toasts_show") === 'true');
  if(showToasts) {
    if((timesClosed%3 != 2)) {
      createRandomToast();
      setTimeout(launchToast, TOAST_INTERVAL_TIMEOUT); // Every random toast schedules the next toast
    } else {
      createDismissToast(); // Now we are prompting to the user to stop toasts
                            // so, no need to chain toasts here. The next toasts
                            // are chained when the user press NO, see that event listener.
    }
  }
}

function getCookieValue(name) {
	return document.cookie.split('; ').reduce((acc, cur) => {
		  const parts = cur.split('=')
		  return parts[0] === name ? parts[1] : acc
	}, '')
}

function setCookie(name, val, expiresInSession) {
	var expireDate = ""
	if(!expiresInSession) {
		var timeToExpire = 60*60*1000; // min*sec*mili ~ 1h
		var date = new Date();
		date.setTime(date.getTime() + timeToExpire);
		expireDate = date.toUTCString();
	}
	document.cookie = name + "=" + val + "; expires=" + expireDate;
}

/**
 * Here we launch the first toast
 * @see MainFooter.xhtml
 */
// setTimeout(launchToast, FIRST_TOAST_TIMEOUT);
// setCookie("toasts_close_counter", 0, true);
// setCookie("toasts_show", true, true);