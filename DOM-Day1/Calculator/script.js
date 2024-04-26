let h1 = document.createElement("h1")
h1.innerHTML = "Calculator"
h1.setAttribute("class","h1")

let div_head = document.querySelector(".header")
div_head.appendChild(h1)

let buttonValues = ['C', '<-', '/', '*', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '.', '0', '00', '='];
let display = document.getElementById("display")
let btndiv = document.getElementById("buttons")

buttonValues.forEach((e)=>{
    let btn = document.createElement("button")
    btn.textContent = e
    btn.addEventListener("click", ()=>{
        if(e == "="){
            calculate()
        }
        else if(e == "C"){
            clearDisplay()
        }
        else if(e == "<-"){
            deleteChar()
        }
        else{
            appendToDisplay(e)
        }
    })
    btndiv.appendChild(btn)

})

let buttons = document.querySelectorAll('.buttons button');
buttons.forEach(button => {
    if (button.textContent === '=') {
        button.classList.add('equals-button');
    }
});

function appendToDisplay(e){
    display.value += e
}

function clearDisplay(){
    display.value = ""
}

function deleteChar() {
    let currentValue = display.value;
    let newValue = '';

    for (let i = 0; i < currentValue.length - 1; i++) {
        newValue += currentValue[i];
    }

    display.value = newValue;
}


function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }

}