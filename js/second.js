const reset = document.querySelector('.reset')
let decrease = document.querySelector('.decrease')
let increase = document.querySelector('.increase')
var txt = document.querySelector('.txt')

reset.addEventListener('mouseover', function(){
    reset.style.backgroundColor = 'red'
})
reset.addEventListener('mouseout', function(){
    reset.style.backgroundColor = 'black'
})
reset.addEventListener('click', function(){
    reset.style.transform = "scale(0.7)"
    setTimeout(() => {
        reset.style.transform = "scale(1)";
      }, 200);
      txt.innerHTML = 0
})

increase.addEventListener('click', function(){
    increase.style.transform = "scale(0.8)"
    setTimeout(() => {
        increase.style.transform = "scale(1)";
      }, 200);
      txt.innerText = parseInt(txt.innerText)  + 1
})
decrease.addEventListener('click', function(){
    decrease.style.transform = "scale(0.8)"
    setTimeout(() => {
        decrease.style.transform = "scale(1)";
      }, 200);
      txt.innerText = txt.innerText - 1
})
