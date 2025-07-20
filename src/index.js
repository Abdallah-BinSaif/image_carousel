const previousButton = document.querySelector("#previous")
const nextButton = document.querySelector("#next")
const imageHolder = document.querySelector("#image")

const image1 = "./assets/playingRabbit.png"
const image2 = "./assets/pondDog.png"
const image3 = "./assets/Rabbit.png"
const image4 = "./assets/sleepingCat.png"
const image5 = "./assets/yellowCat.png"

const images = [image1, image2, image3, image4, image5]

let previousImage = 0
let currentImage = 0
let nextImage = 0

previousButton.addEventListener("click", ()=>{
    if(previousImage < 1) {
        previousImage = images.length - 1
    }else {
        previousImage -= 1
    }
    currentImage = previousImage
    updateImage()
})
nextButton.addEventListener("click", ()=>{
    if(nextImage > images.length - 2) {
        nextImage = 0
    }else {
        nextImage += 1
    }
    currentImage = nextImage
    updateImage()
})

function updateImage() {
    imageHolder.setAttribute("src", images[currentImage])
}
