const board = document.querySelector('#board')
const colors=['#FFB6C1','#CD5C5C','#9370DB','#00FA9A','#20B2AA']
const SQUARES_NUMBER = 600

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
        setColor(square))
    
     square.addEventListener('mouseleave', () => 
        removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color=getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow=`0 0 2px ${color},0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow=`0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}