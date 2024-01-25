const btn = document.getElementById('btn');
const res = document.getElementById('result');
const background = document.getElementById('bg');
const colorsArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
const mode = document.getElementById('mode');
const op = document.getElementById('op');


// mode.addEventListener('click', ()=>{
//     document.body.style.backgroundColor = '#383869';
//     mode.innerText = 'Light Mode';
// })


btn.addEventListener('click', ()=>{
const hexColor = generateHexColor();
background.style.backgroundColor = hexColor;
res.innerText = hexColor;
op.innerText = 'New Colour Generated!';
})
const generateHexColor = ()=>{
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += colorsArr[randomnumber()];
    }
    return hexColor;
}
const randomnumber = ()=>{
    return Math.floor(Math.random() * colorsArr.length);
}