function greeting(PersonName){
    // Blokk med kode som funksjonen består av
    let greeting = "Greeeting" + PersonName

    console.log(greeting)
}

greeting("Per")
greeting("Pål")
greeting("Espen")

console.log ("Looks like the same")

function ButtonHandler () {
    console.log("Button Clicked")
}

let MyButton = document.getElementById("Eksample-Button")
console.log(MyButton)
console.dir(MyButton)

MyButton.addEventListener("click", ButtonHandler)


// SetUp Counter

let counter = document.querySelector("#counter")
console.log(counter)

// Hent ut Display Elementet

let DisplayElement = counter.querySelector("span")
console.log(DisplayElement)


// Funksjonen 
function increment() {
    // Les av DOM verdien, og konvert til et tall
    let value = Number(counter.textContent)
    // Gjør utregninger som måtte trengst
    let Newvalue = value + 1
    // Oppdaterer DOMet med den nye verdien
    DisplayElement.textContent = Newvalue
}

function decrement () {
    console.log("Decrementing")
}

function reset () {
    console.log("Resetting")
}


// Hentet ut alle knappene


// Koble funksjoner til Knappen 

let Counter = document.querySelector("#counter")
console.log (Counter)

let IncrementButton = Counter.querySelector("Button:nth-Child(2)")
let decrementButton = Counter.querySelector("Button:nth-Child(3)")
let resetButton = Counter.querySelector("Button:nth-Child(4)")

console.log(IncrementButton)
console.log(decrementButton)
console.log (resetButton)

IncrementButton.addEventListener("click", increment)
decrementButton.addEventListener("click", decrement)




