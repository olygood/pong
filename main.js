// varaibles
const canva = document.getElementById('canva');
let ctx = canva.getContext('2d');
const  log = document.getElementById('log');

canva.width = 600;
canva.height = 400; 

let pad = {
    x : 0,
    y : 10,
    largeur : 20,
    hauteur : 80,
    vitesseX : 10,
    vitesseY : 10
}
let pad2 ={
    x : 0,
    y : 0,
    largeur : 20,
    hauteur : 80,
    vitesseX : 10,
    vitesseY : 10
}

let balle ={
    x:300,
    y:200,
    largeur: 10,
    hauteur: 10,
    vitesseX : 2,
    vitesseY : 2
    
}
let scoreJoueurGauche = 0;
let scoreJoueurDroite = 0;


function centrerBalle(){
    balle.x = (canva.width - balle.largeur) /2;
    balle.y = (canva.height - balle.hauteur) /2;
    

    // balle.vitesseX = 2;
    // balle.vitesseY = 2;
}
// GAME--------------------------------------------------------
// game loop setInterval sur 1000 => 1/60 ou 1000/60 conseillé

load()

// let interval = setInterval(run,1000/60);
let interval = setInterval(run,1000/60)
    function run()
{
    update();
    draw();
    
}

function load()
{
    centrerBalle();
   //position de départ
    pad2.x = canva.width - pad2.largeur;
    pad2.y = canva.height - pad2.hauteur;
}

function update()
{
    ctx.clearRect(0,0,canva.width,canva.height);
    document.addEventListener('keydown', logKeyPad);
    document.addEventListener('keydown', logKeyPad2)
       
        balle.x = balle.x + balle.vitesseX;
        balle.y = balle.y + balle.vitesseY;
        //a quelle moment la balle touche y canva.height quand la position balle+hauteur atteigne le vanva.height 
        //alors on inverse la vitesse y pour changer sa direction
        // touche bas 
       if(balle.y + balle.hauteur > canva.height -1)
       {
           balle.vitesseY = -balle.vitesseY;
       }
       // touche droit
       if(balle.x + balle.largeur > canva.width -1)
       {
        
        //perdu
        centrerBalle();
           scoreJoueurGauche += 1;
       }
       // touche haut
       if(balle.y < 1)
       {
           balle.vitesseY = -balle.vitesseY;
       }
        // touche gauche
       if(balle.x < 1 )
       {
           //perdu
           centrerBalle();
           scoreJoueurDroite +=1;
       }
              //la balle touche la raquette de gauche
              if(balle.x <= pad.x + pad.largeur){
                //tester si la balle est sur la raquette
                //bord bas de la balle > bord haut du pad ?
                // bord haut de la balle  < bord aut du pad
                if(balle.y + balle.hauteur > pad.y && balle.y < pad.y + pad.y + pad.hauteur){
                    balle.vitesseX = -balle.vitesseX;
                    balle.x = pad.x + pad.largeur
                }
               
            }
            //la balle a atteind le pad2 droite
            if(balle.x + balle.largeur > pad2.x){
                //test balle sur pad2
                if(balle.y + balle.hauteur > pad2.y && balle.y < pad2.y + pad.hauteur){
                    balle.vitesseX = -balle.vitesseX;
                }
               
            }
};
        
 
        
      
       
        //la balle touch la raquette Joueur Droite (pad2)
        // if(balle.x + balle.largeur > pad2.x)
        // {
        //     //tester si la balle est sur la raquette et pas dehors
        //     if(balle.y + balle.hauteur > pad2.y  &&  balle.y < pad2.y + pad2.hauteur)
        //     {
        //         balle.vitesseX = -balle.vitesseX;
                
        //     }
        // }

//fin update---------------------------------------------------------------------------------
function draw()
{
   
    ctx.fillRect(pad.x, pad.y, pad.largeur, pad.hauteur);
    ctx.fillRect(pad2.x, pad2.y, pad2.largeur, pad2.hauteur);
    ctx.fillRect(balle.x,balle.y,balle.largeur,balle.hauteur);
    //score peut mieux faire
    ctx.font = '18px serif';
    ctx.fillStyle = "black";
    ctx.fillText(scoreJoueurGauche, 150, 20);
    ctx.fillText(scoreJoueurDroite, 450, 20);
    //dessine une ligne
    ctx.beginPath();
    ctx.moveTo(300, 0);
    ctx.lineTo(300, 400);
    ctx.lineWidth= 2;
    ctx.stroke();

}

function logKeyPad(e) {
    let key = e.code;
    
    if(key =="KeyQ" && pad.y > 0){
        pad.y -= 1 * pad.vitesseY;
        
    }
       
   else if(key == "KeyA" && pad.y <canva.height - pad.hauteur){
       pad.y += 1 * pad.vitesseX;
    }
 
    
}
function logKeyPad2(e){
    let key  = e.code;
  
    if(key =="ArrowUp" && pad2.y>0){
        pad2.y -=1 *pad2.vitesseY;
    }
    else if(key=="ArrowDown" && pad2.y<canva.height -pad2.hauteur ){
        pad2.y +=1 *pad2.vitesseY;
    }
}

