//Preventing dragging behaviour. This would make detecting mouse down behaviour inconsistent.
document.addEventListener("dragstart", (event) => {
    event.preventDefault();
});

//Storing the value of thes mouse left click state. This allows the user to be 
//able to chose specific squares to colour when hovering, rather than it auto filling.
let isMouseClickDown = Boolean;
document.addEventListener('mousedown', () => {
    isMouseClickDown = true;
})

document.addEventListener('mouseup', () => {
    isMouseClickDown = false;
})



function liveSlider(){
    let slider = document.getElementById('slider')
    let sliderValue = document.getElementById('sliderValue')
    sliderValue.innerHTML = slider.value;
    slider.oninput = function() {
        sliderValue.innerHTML = this.value;
    }
}

let colour = '#000000';

document.getElementById('colorpicker').addEventListener('change', (hex) => {
    colour = hex.target.value    
    console.log(colour)
})


squareList = document.querySelectorAll('.square');

function colourGrid() {
    squareList.forEach(div => {
        div.addEventListener('mouseover', () => {
            if(isMouseClickDown == true) {
             document.getElementById(div.id).style.background = colour;
            } 
        });
        div.addEventListener('mousedown', () => {
        document.getElementById(div.id).style.background = colour;
        });
    });
}

function resetGrid() {
    document.getElementById('reset').addEventListener('click', () => {
        squareList.forEach(div => {
            div.style.background = "";
        })
    })
}



//paintColour()
liveSlider();
colourGrid();
resetGrid();


