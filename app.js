drawCanvas(2,2);

function drawCanvas(height=5, width=5){
    const container = document.getElementById("canvas");
    for (let i=0; i<height; i++){
        let div = document.createElement('div');
        
        for (let j=0; j<width; j++) {
            let div_ch= document.createElement('div');
            div_ch.className="square";
            div.appendChild(div_ch);
        }
 
        container.appendChild(div);
    }
}