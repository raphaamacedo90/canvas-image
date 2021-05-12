let tela = document.getElementById("tela");


let ctx = tela.getContext("2d");

let img = new Image();

img.src = "images.jfif";

img.onload = desenharImg;

function desenharImg(){

    
    ctx.drawImage(this,50,70,this.naturalWidth/2,this.naturalHeight/2)
}


ctx.drawImage(img,20,20)

