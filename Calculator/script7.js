const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');



for(let i = 0; i<btns.length; i++){
    btns[i].addEventListener('click', function() {
        let number = btns[i].getAttribute('data-num'); /* grabs the attribute like * + / - 0 1 2 3... 9*/
        screen.value += number 
        /* so every time I'm gonna click the button I'm gonna  collect the data attribute  that actually holds the
        value that I see over here and then I'm gonna add it over here s o this is what this loop is doing*/
    
    })
}

equalBtn.addEventListener('click',function(){
  
  if(screen.value === ''){
    alert('Input is empty')
  }
  else{
      let value = eval(screen.value)
      screen.value = value
  }
  
    /*eval function evaluates*/
 

})

clearBtn.addEventListener('click',function(){
    screen.value = '';
})