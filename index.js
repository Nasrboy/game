window.alert("WELCOME TO THE FUN GAME ")
window.alert("CHALLENGE YOUR MIND \n Made by Nasr Tech \"Nasr Developer\"...")
window.alert("You have to guess any number of your own between 0 and 10 inclusive")
window.alert("The number will be matched with auto-generated random number,\n Hence you win if exactly matched with what you guess")
window.alert("LOADING...\n Press Ok to start")

var x = Math.round(Math.random()*10)
var y = Number(window.prompt("Guess a number btn 0 and 10 inclusive"))


function checkNumber(x,y){
    if (x==y){
        window.alert(`Good job you guess the number 🎉🎉🎉 ${x} `)
        while(true){
            let z = window.confirm("DO YOU WANT TO PLAY AGAIN")
            if(z){
                x = Math.round(Math.random()*10)
                y = Number(window.prompt("Guess a number again"))  
                checkNumber(x,y)
                break  
            }else{
                break
            }
        }
    }else if(y < x){
        window.alert(`The number was greater than ${y} 😂🤣😂 TRY AGAIN`)
    }else{
        window.alert(`The number was less than ${y} 🤣🤣🤣 TRY AGAIN`)
    }
}
while(true){ 
    checkNumber(x,y)
    x = Math.round(Math.random()*10)
    y = Number(window.prompt("Guess a number again"))
}