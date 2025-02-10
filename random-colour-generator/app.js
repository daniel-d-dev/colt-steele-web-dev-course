// Select the button, body, and h1 elements from the DOM
const button = document.querySelector('button');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');

// Add a click event listener to the button
button.addEventListener('click', function () {
    // Generate a random RGB color and assign it to a variable    
    const newColour = makeRandomColour();

    // Change the background color of the body to the generated random color
    body.style.backgroundColor = newColour;

    // Change the inner text of the h1 element to show the RGB color value
    h1.innerText = newColour;
})

// Function to generate a random RGB color
const makeRandomColour = () => {

    // Generate random values for red, green, and blue (each ranging from 0 to 255)
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Return the color as a string in the 'rgb(r, g, b)' format
    return `rgb(${r}, ${g}, ${b})`;
}