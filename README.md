# pong
game canvas vanilla javascript 

![alt text](https://github.com/olygood/imagesWeb/blob/master/pong.png) 
![img pong](https://github.com/olygood/imagesWeb/blob/master/pong2.png)  



Document:onkeydown event : 

Keydown,keyup, Keypress  

Keypress: deprecated 

 

Ce sont des keybordEvent() 

Les événements keydown et keyup : 

fournissent un code indiquant quelle touche est enfoncée, tandis que keypress : indique quel caractère a été entré. Par exemple, un "a" minuscule sera signalé comme 65 par keydown et keyup, mais comme 97 par keypress. Un "A" majuscule est signalé comme 65 par tous les événements. 

IME: 

Un éditeur de méthode d'entrée (IME) est un programme qui permet aux utilisateurs d'entrer des caractères qui ne sont pas pris en charge par leur clavier à l'aide d'une autre combinaison de touches. Depuis Firefox 65, les événements keydown et keyup sont désormais déclenchés lors de la composition de l'IME (bug 354358). Pour ignorer tous les événements keydown qui font partie de la composition, faites quelque chose comme ceci (229 est une valeur spéciale définie pour un keyCode relatif à un événement qui a été traité par un IME) : 

 

 

eventTarget.addEventListener("keydown",event=>{ 

if(event.isComposing ||event.keyCode ===229){ 

return; 

} 

// do something 

}); 

 

eventTarget.addEventListener("keydown",event=>{if(event.isComposing ||event.keyCode ===229){return;}// do something}); 

 

 

 

 

 

 

 

Keydown code touche flèche directionnel: 

ArrowLeft ArrowUp ArrowRight ArrowDown 
