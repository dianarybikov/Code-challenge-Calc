// import "./style.css"
const buttons = document.getElementById('buttons')
const screen = document.getElementById('screen')
const spans = document.querySelectorAll("spans")
buttons.addEventListener('click', handleClick)

Array.from(spans).forEach(function(element){
    element.addEventListener('click',() => {
        if (screen.innerText !== "Error" && element.innerText !== "=" 
        && element.innerText !== "÷" && element.innerText !== "X"){
            screen.innerText = screen.innerText.concat(element.innerText)
        }
        else if (element.innerText === "÷") {
            screen.innerText = screen.innerText.concat('/')
        }
        else if(element.innerText === "X"){
            screen.innerText = screen.innerText.concat('*')
        }
    })
})
function handleClick(event){
    if(event.target.id === "clear"){
        clearScreen()
    }
    else if (event.target.id !== "buttons"){
        updateScreen(event.target.id)
    }
}

function updateScreen(string){
    screen.innerText = screen.innerText + string
}

function clearScreen(){
    screen.innerText = " "
}
