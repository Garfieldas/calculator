const screen = document.querySelector('#scren');
const buttons = document.querySelector('#buttons');
const buttonsList = buttons.querySelectorAll('button');

let getValue = (e) => {
    let value = e.target.textContent;
    console.log(value);
    return value;
}

buttonsList.forEach((btn) => {
    btn.addEventListener("click", getValue);
    
});