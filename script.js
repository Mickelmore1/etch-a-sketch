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

function createGrid(){
       const sliderValue = document.getElementById('sliderValue').innerHTML;
       const gridSize = sliderValue * sliderValue;

       document.getElementById('grid').innerHTML = "" //Removing all divs from the grid before creating new ones.  

       for (let x = 0; x < gridSize; x++) {
        const gridDiv = document.getElementById('grid');
        const newDiv = document.createElement('div')

        newDiv.setAttribute('id', x);
        newDiv.setAttribute('class', "square")
        newDiv.style.flexBasis = (100/sliderValue) + '%'

        gridDiv.appendChild(newDiv);
        }     
       colourGrid();
    }

function colourGrid() {
    let squareList = document.querySelectorAll('.square');

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


function colourGridRainbow() {
    let squareList = document.querySelectorAll('.square');

    squareList.forEach(div => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        let randomColorHex = "#" + randomColor;
    
        div.addEventListener('mouseover', () => {
            if(isMouseClickDown == true) {
             document.getElementById(div.id).style.background = randomColorHex;
            } 
        });

        div.addEventListener('mousedown', () => {
        document.getElementById(div.id).style.background = randomColorHex;
        });
    });
}

function colourGridWhite() {
    let squareList = document.querySelectorAll('.square');

    squareList.forEach(div => {
        div.addEventListener('mouseover', () => {
            if(isMouseClickDown == true) {
            document.getElementById(div.id).style.background = 'white';
            } 
        });

        div.addEventListener('mousedown', () => {
        document.getElementById(div.id).style.background = 'white';
        });
})
}

function resetGrid() {
    let squareList = document.querySelectorAll('.square');
    squareList.forEach(div => {
        div.style.background = "";
    })
}

let colour = '#000000';
document.getElementById('colorpicker').addEventListener('change', (hex) => {
    colour = hex.target.value  
    console.log(colour)  
    colourGrid();
})

document.getElementById('eraser').addEventListener('click', colourGridWhite)
document.getElementById('rainbowBrush').addEventListener('click', colourGridRainbow)
document.getElementById('slider').addEventListener('mouseup', createGrid);
document.getElementById('reset').addEventListener('click', resetGrid);

liveSlider();
createGrid();
resetGrid();


