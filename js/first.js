const btn = document.querySelector('.btn');

btn.addEventListener('mouseover', function(){
    btn.style.backgroundColor ='#55BEF4';
})
btn.addEventListener('mouseout', function(){
    btn.style.backgroundColor ='#F22775';
})

btn.addEventListener('click', function(){
    //btn.preventDefault;
    btn.style.transform = "scale(0.8)"
    setTimeout(() => {
        btn.style.transform = "scale(1)";
      }, 100);
    inputText=''
    txt = document.querySelector('.txt');
    inputText = txt.value; 
    const li = document.createElement('li');
    li.style.backgroundColor ='white'
    li.appendChild(document.createTextNode(` ${txt.value}`));
    user = document.querySelector('.ul');
    user.appendChild(li);
    
})