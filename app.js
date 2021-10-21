drawCanvas(2,2);
drawPalette();

function changeColor(){
    if (this.style.background == "red") {
        this.style.background = "white";
    } else {
      this.style.background = "red";
    }

}

function getColor(){
    let colorName = this.style.background;
    alert(colorName);
}

function drawCanvas(height=5, width=5){
    const container = document.getElementById("canvas");
    for (let i=0; i<height; i++){
        let div = document.createElement('div');
        
        for (let j=0; j<width; j++) {
            let div_ch= document.createElement('div');
            div_ch.className="square";
            div_ch.onclick = changeColor;
            div.appendChild(div_ch);
        }
 
        container.appendChild(div);
    }

}

function drawPaletteElement(colorName) {
    const container = document.getElementById("palette");
    let div = document.createElement('div');
    div.className="oval";
    div.style.background = colorName;
    div.onclick = getColor;
    container.appendChild(div);

}
function drawPalette(){
    drawPaletteElement("blue");
    drawPaletteElement("red");

}