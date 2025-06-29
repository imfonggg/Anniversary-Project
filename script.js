// const heart = document.querySelector("#heart")

const heart = document.getElementById("Heart")
const nameInput = document.getElementById('nameInput')
const body = document.getElementById("body")
const letter = document.getElementById("letter")
const candle = document.getElementById("candleAni")
const slide = document.getElementById("slide")
const button = document.getElementById("btn")
const finalPage = document.getElementById("final")
const passwordText = document.getElementById("password")
const secretPassword = document.getElementById("secret-password")
const thankyou = document.getElementById("ty")
const hint = document.getElementById("hint")
const ratings = document.getElementById("ratings")
const reButton = document.getElementById("refreshBtn")
let count = 0

nameInput.addEventListener("change", confirmName)
heart.addEventListener("click", fillPage)
heart.addEventListener("mouseover", shake)
heart.addEventListener("mouseout", unshake)
candle.addEventListener("click",slider)
button.addEventListener("click", openFinalPage)
secretPassword.addEventListener("change", confirmPassword)
ratings.addEventListener("click", showButton)

function confirmName() {
    // const nameInput = document.getElementById('nameInput')
    if (nameInput.value.toLowerCase() === "alianah") {
        nameInput.style.fontSize = "32px"
        nameInput.placeholder = "Name :)"
        heart.classList.replace("still", "heart-beat-animate")
    }
    else {
        nameInput.value = ""
        nameInput.style.fontSize = "20px"
        nameInput.placeholder = "Wrong name :("
    }
}

function fillPage() {
    if(heart.className === "heart-beat-animate")
    {
        heart.classList.replace("heart-beat-animate", "heart-expand")
        letter.classList.replace("none","hidden")
        setTimeout(showLetter, 3000)
    }
}

function showLetter() {
    letter.classList.replace("hidden", "fadeInUp-animation")
    letter.style.visibility="visible"
}

function slider() {
    slide.classList.replace("empty", "expand-rect")
}

function shake() {
    heart.classList.replace("still", "heart-shake")
}

function unshake() {
    heart.classList.replace("heart-shake", "still")
}

function openFinalPage() {
    finalPage.classList.remove("fadeInUp-animation")
    finalPage.classList.add("fadeInUp-animation")
    finalPage.style.zIndex = "3"
    finalPage.style.opacity = "1"
}

function confirmPassword() {
    if ((secretPassword.value.toLowerCase() === "penis") || (secretPassword.value.toLowerCase() === "penishead") || (secretPassword.value.toLowerCase() === "dumpling")){
        thankyou.classList.remove("fadeInUp-animation")
        thankyou.classList.add("fadeInUp-animation")
        passwordText.classList.remove("fadeOut-animation")
        passwordText.classList.add("fadeOut-animation")
        passwordText.style.zIndex = "0"
        passwordText.style.opacity = "0"
        thankyou.style.opacity = "1"
    }
    else {
        if (count === 2){
            hint.classList.remove("fadeInUp-animation")
            hint.classList.add("fadeInUp-animation")
            hint.style.opacity = "1"
        }
        secretPassword.value = ""
        secretPassword.placeholder.fontSize = "10px"
        secretPassword.placeholder = "Wrong word :("
        count++
    }
}

function showButton() {
    reButton.classList.remove("fadeInUp-animation")
    reButton.classList.add("fadeInUp-animation")
    reButton.style.opacity = "1"
}

function refreshPage() {
    location.reload()
}