const button = document.getElementById('button')
const canvas = document.getElementById('canvas')
button.addEventListener('click',changeBgColor)

function colorGenerator(){
    let numericals = [0,1,2,3,4,5,6,7,8,9]
    let alphabets = ['a','b','c','d','e','f']
    let color = ''
    for(i = 0; i < 3; i++){
        color += numericals[Math.floor(Math.random()*numericals.length)]
        color += alphabets[Math.floor(Math.random()*alphabets.length)]
    }
    console.log(color)
    return color;
}

function changeBgColor(){
    let color = colorGenerator()
    canvas.style.backgroundColor = '#' + color;
}

