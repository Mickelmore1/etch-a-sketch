document.addEventListener("dragstart", (event) => {
    event.preventDefault();
});


squareList = document.querySelectorAll('.square');
console.log(squareList)


let isMouseClickDown = Boolean;

document.addEventListener('mousedown', () => {
    isMouseClickDown = true;
    console.log("true")
})

document.addEventListener('mouseup', () => {
    isMouseClickDown = false;
    console.log('false')
})



squareList.forEach(div => {
    div.addEventListener('mousemove', () => {
        if(isMouseClickDown == true) {
            document.getElementById(div.id).style.background = 'black';
        } 
    });
});

function clearGrid() {
    document.getElementById('square').style.background = '';
}

document.getElementById('reset').addEventListener('click', () => {
    squareList.forEach(div => {
        div.style.background = "";
    })
})





