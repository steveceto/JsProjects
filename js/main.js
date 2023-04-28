const yes = document.getElementsByClassName('yes')
const no = document.getElementsByClassName('no')

for (var i = 0; i < yes.length; i++) {

    yes[i].addEventListener("mouseover", function(){this.style.backgroundColor = 'blue';});
    yes[i].addEventListener("mouseout", function(){this.style.backgroundColor = '#15803D';});
    yes[i].addEventListener("click", function(){
        var valu = this.value;
        console.log(valu);
        const answer = document.querySelector('h2');
        answer.innerText = valu;
        
    }); 
 }

 for (var i = 0; i < no.length; i++) {
    no[i].addEventListener("mouseover", function(){this.style.backgroundColor = 'blue';});
    no[i].addEventListener("mouseout",function(){this.style.backgroundColor = 'rgb(220,38,38)';});
}

    

     
