// 1. Grab the DOM elements
let input = document.querySelector('input')
const button = document.querySelector('button')
const div =  document.querySelector('.container')
let message = document.querySelector('.warning-message')

	
// 2. Create the event listener 
button.addEventListener('click', () => {
    let val = input.value
    
    // condition to check if the input value is a number 
    if (typeof Number(val) === 'number' && Number(val) > 0) {
        div.innerHTML = ''
        input.value = ''
        message.innerHTML = ''

        // generate even and odd numbers 
        for (let i = 0;  i < val; i++) {
            // even numbers
            if (i % 2 === 0) {
                let box = document.createElement('div') 
                box.setAttribute('class', 'num')
                box.setAttribute('class', 'white')
                box.classList.add('container-animation')
                box.textContent = i
                box.style.background = 'green'
                box.style.minWidth = '7%'
                box.style.height = '6vh'
                box.style.lineHeight = '6vh'
                box.style.margin = '8px'
                box.style.paddingLeft = '5%'
                box.style.paddingRight = '5%'
                div.appendChild(box)
            } 
                // odd numbers
                else {
                let box = document.createElement('div') 
                box.setAttribute('class', 'num') 
                box.classList.add('container-animation')
                box.textContent = i
                box.style.background = 'yellow'
                box.style.minWidth = '7%'
                box.style.height = '6vh'
                box.style.lineHeight = '6vh'
                box.style.margin = '8px'
                box.style.color = '#000'
                box.style.paddingLeft = '5%'
                box.style.paddingRight = '5%'
                div.appendChild(box)
            }
        }

    // condition when input value is not a number    
    } else if (val.length === 0) {
        div.innerHTML = ''
        input.value = ''
        message.innerHTML = ''
        message.textContent = 'Enter a number to generate numbers'
    } else if (typeof (val) === 'string') {
        div.innerHTML = ''
        input.value = ''
        message.innerHTML = ''
        message.textContent = 'Input value must be a number'
    }
})