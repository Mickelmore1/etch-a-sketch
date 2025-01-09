
let slider = document.getElementById('slider')
let sliderValue = document.getElementById('sliderValue')
sliderValue.innerHTML = slider.value;

slider.oninput = function() {
    sliderValue.innerHTML = this.value;
}


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

squareList = document.querySelectorAll('.square');

function colourGrid() {
    squareList.forEach(div => {
        div.addEventListener('mouseover', () => {
            if(isMouseClickDown == true) {
             document.getElementById(div.id).style.background = 'black';
            } 
        });
        div.addEventListener('mousedown', () => {
        document.getElementById(div.id).style.background = 'black';  
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

colourGrid();
resetGrid();


