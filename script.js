const passwordBox=document.getElementById("password")
const length=12

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase="abcdefghijklmnopqrstuvwxyz"
const number="0123456789"
const symbol="@#$%^&*()_+~|{}[]<>/-="

const allChars=upperCase + lowerCase + number + symbol

function createPassword(){
    let password=""
    password += upperCase[Math.floor(Math.random()* upperCase.length)]
    password += lowerCase[Math.floor(Math.random()* lowerCase.length)]
    password += number[Math.floor(Math.random()* number.length)]
    password += symbol[Math.floor(Math.random()* symbol.length)]

    while(length>password.length){
        password+=allChars[Math.floor(Math.random()* allChars.length)]
    }
    passwordBox.value=password

}

function copyPassword(){
    passwordBox.select()
    document.execCommand("copy")
}


// another method


// generate random captcha


// function generateRandom(){

//     const chars="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

//     let strLength=7

//     let result=""

//     for(i=0;i<strLength;i++){
//         let randNum=Math.floor(Math.random()*chars.length)

//         result+=chars.substring(randNum,randNum+1)
//     } 

//     document.getElementById('randomChar').innerHTML=result

// }