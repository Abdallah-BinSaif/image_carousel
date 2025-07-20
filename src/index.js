const previousButton = document.querySelector("#previous")
const nextButton = document.querySelector("#next")
const imageHolder = document.querySelector("#image") 

const images = [
    "./assets/playingRabbit.png",
    "./assets/pondDog.png",
    "./assets/Rabbit.png", 
    "./assets/sleepingCat.png", 
    "./assets/yellowCat.png"
]

let currentImage = 0

previousButton.addEventListener("click", ()=>{
    if(currentImage < 1) {
        currentImage = images.length - 1
    }else {
        currentImage--
    }
    updateImage()
})
nextButton.addEventListener("click", ()=>{
    if(currentImage > images.length - 2) {
        currentImage = 0
    }else {
        currentImage++
    }
    updateImage()
})

function updateImage() {
    imageHolder.setAttribute("src", images[currentImage])
}
updateImage()
