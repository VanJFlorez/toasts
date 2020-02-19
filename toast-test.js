/**
 * Run this in your browser terminal
 */

permissions = { tienda: true, comercio: true, ventasYrentas: true, rutasCompartidas: true }

ctr1 = 0;
for(i = 0; i < 100; i++) {
	TOAST_MESSAGES = getSessionMessages(permissions);
  for(j = 0; j < 1000; j++) {
    var rndNum = getRandomInt(TOAST_MESSAGES.length); 
    t = 
    {
        title: TOAST_GREETINGS[rndNum%TOAST_GREETINGS.length],
        text: TOAST_MESSAGES[rndNum][1],
        type: 'info',
        icon: TOAST_MESSAGES[rndNum][2],
        timeout: TOAST_ONSCREEN_TIMEOUT,
        redirectURL: TOAST_MESSAGES[rndNum][0]
    }
    if(t.text == '')
      ctr1++;
    if(t.redirectURL == '')
      ctr2++;
    
  }
}
console.assert(ctr1 == 0, "There are toasts with empty texts!");
console.assert(ctr2 == 0, "There are toasts with no redirection URL!");