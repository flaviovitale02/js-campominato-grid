const gridContainer = document.querySelector('div.grid-container');
const button = document.querySelector('button')

button.addEventListener('click', function(){
    newGame()
})

function newGame(){
    gridContainer.innerHTML = ``;



    const level = parseInt(document.getElementById('select-level').value) 
    let gridElementNumber = 0
    if(level === 0){
        gridElementNumber = 100
    }else if(level === 1){
        gridElementNumber = 81
    }else{
        gridElementNumber = 49
    }

    let gridElementPerRow = Math.sqrt(gridElementNumber)

    for(let i = 0; i < gridElementNumber; i++){
        const newGridElement = createGridElement('div', 'grid-element', `<h2 class="fs-5">${i + 1}</h2>`)

        let gridElementSize = 'calc(100% / ' + gridElementPerRow + ')'
        newGridElement.style.width = gridElementSize
        newGridElement.style.height = gridElementSize

        newGridElement.addEventListener('click',function(){
            console.log(i+1)
            newGridElement.classList.add('selected')
        })
        gridContainer.appendChild(newGridElement)
    }
}

function createGridElement (tag , className, h2Element){
    const gridElement = document.createElement(tag)
    gridElement.className = className
    gridElement.innerHTML = h2Element
    return gridElement
}