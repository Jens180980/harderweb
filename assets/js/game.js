const gameBoard = document.getElementById('gameboard')
let lastRenderTime = 0
const snakeSpeed = 2
const expandRate = 2
let controlArr = [{x:0, y:0}]
let snakeBody = [{x:5, y:10}, {x:5, y:11}, {x:5, y:12}]
let foodPosition = [{x:0, y:0}]
let status = true

function gameloop(currentTime){
    window.requestAnimationFrame(gameloop)
    const timeSinceLastRender = (currentTime - lastRenderTime) / 1000
    if(timeSinceLastRender < 1 / snakeSpeed) return
    lastRenderTime = currentTime
    
    update()
    draw()

}

window.requestAnimationFrame(gameloop)

// Update
function update(){
    updateSnake()
    updateFood()
}

// Draw
function draw(){
    gameBoard.innerHTML = ''
    drawSnake()
    drawFood()
}



// Controls

window.addEventListener('keydown', function(e){
    switch(e.key){
        case 'ArrowUp': controlArr = [{x:-1, y:0}]
            break
        case 'ArrowDown': controlArr = [{x:1, y:0}]
            break
        case 'ArrowRight': controlArr = [{x:0, y:1}]
            break
        case 'ArrowLeft' : controlArr = [{x:0, y:-1}]
            break
    }
})

// Snake

function drawSnake(){
    for (let segment of snakeBody) {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.x
        snakeElement.style.gridColumnStart = segment.y
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    }
}

function updateSnake(){

    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
      }

    snakeBody[0].x += controlArr[0].x
    snakeBody[0].y += controlArr[0].y  
}

// Food

function randomFoodPosition(){
    foodPosition[0].x = Math.floor(Math.random() * 21 + 1 )
    foodPosition[0].y = Math.floor(Math.random() * 21 + 1 ) 
}
randomFoodPosition()

function drawFood(){
    const food = document.createElement('div')
    food.style.gridRowStart = foodPosition[0].x
    food.style.gridColumnStart = foodPosition[0].y
    food.classList.add('food')
    gameBoard.appendChild(food)
}

function crashTest(){

    if(snakeBody[0].x === foodPosition[0].x && snakeBody[0].y === foodPosition[0].y){   
        status = false
    }
}

function updateFood(){
    crashTest()
    
    if(status == false){
        randomFoodPosition()
        status = true
        addSegment(expandRate)
    }
}

function addSegment(expand){
    for(let i = 0; i < expand; i++){
        snakeBody.push({...snakeBody[snakeBody.length -1 ]})
    }
}

// gameover check function

function outOfBounds(headPosition) {
    return (
      headPosition.x < 1 || headPosition.x > 21 ||
      Headposition.y < 1 || headPosition.y > 21
    )

    }


    