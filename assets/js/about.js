//Quit to main menu
window.addEventListener('keydown', (e) => {
  if(e.key == 'q'){
    window.location = './menu.html'
  }
})

//Loading description figures

// constants
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const links = [...document.querySelectorAll('li')]
const imgArr = [
  './assets/img/1.JPG',
  './assets/img/2.JPG',
  './assets/img/3.JPG',
  './assets/img/4.JPG',
]

let imgIndex = 0

//Lerp function (delayed movement)
function lerp(start, end, time) {
  return start * (1 - time) + end * time
}

let newImgArr = []

//Mouse variables
let targetX = 0
let targetY = 0
let currentX = 0
let currentY = 0

window.addEventListener('mousemove', e => {
  targetX = e.clientX
  targetY = e.clientY
})

//Images to DOM and newImgArr
imgArr.map((img, index) => {
  let newImage = new Image(400)
  newImage.src = img
  newImage.classList.add('description')
  document.body.append(newImage)
  newImgArr.push(newImage)
})

//Draw to canvas
let percent = 0
let target = 0

function drawImage(index) {
  let {width, height} = newImgArr[index].getBoundingClientRect()

  //Adjust to different screens
  canvas.width = width * window.devicePixelRatio
  canvas.height = height * window.devicePixelRatio
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`

  //Better pixelating
  ctx.webkitImageSmoothingEnabled = false
  ctx.mozImageSmoothingEnabled = false
  ctx.msSmoothingEnabled = false
  ctx.imageSmoothingEnabled = false

  // Enables fade-in or fadeout on hover/mouseleave at to speeds
  if(target === 1) {
    if(percent < 0.2) {
      percent += 0.01
    }else if(percent < 1){
      percent += 0.1
    }
  }else if(target === 0) {
    if(percent > 0.2){
      percent -= 0.3
    }else if(percent > 0) {
      percent -= 0.1
    }
  }

//Creates pixelated effect
let scaledWidth = width * percent
let scaledHeight = height * percent

if(percent >= 1) {
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
  ctx.drawImage(newImgArr[index], 0, 0, width, height)
}else{
  ctx.drawImage(newImgArr[index], 0, 0, scaledWidth, scaledHeight)
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
  if(canvas.width !== 0 && canvas.height !== 0) {
    ctx.drawImage(canvas, 0, 0, scaledWidth, scaledHeight, 0, 0, width, height)
  }
}
}//End drawImage-function

//Loop for mouseeffects
links.map((link, index) => {
  link.addEventListener('mouseover', ()=> {
    for(let i = 0; i < links.length; i++){
      if(i !== index){
        links[i].style.opacity = 0.2
        links[i].style.zIndex = 0
      }else{
        links[i].style.opacity = 1
        links[i].style.zIndex = 3
      }
    }
  })//End eventlistener mouseover

  link.addEventListener('mouseleave', () => {
    links.map((link, index) => {
      link.style.opacity = 1
    })
    target = 0
  })//End eventlistener mouseleave

  link.addEventListener('mouseenter', () => {
    imgIndex = index
    target = 1
  })//End eventlistener mouseenter
})//End links-loop

//Endless loopfunction for updating drawing
function animate() {
  currentX = lerp(currentX, targetX, 0.075)
  currentY = lerp(currentY, targetY, 0.075)
  let {width, height} = newImgArr[imgIndex].getBoundingClientRect()
  canvas.style.transform = `translate3d(${currentX - (width / 2)}px, ${currentY - (height / 2)}px, 0)`
  drawImage(imgIndex)
  window.requestAnimationFrame(animate)
}

animate()
