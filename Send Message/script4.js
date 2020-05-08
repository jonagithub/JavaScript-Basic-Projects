const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click',sendMsg)

function sendMsg(){
    let content = messageIn.value;
   // console.log(content);
   if(content === ''){
       alert('Please Enter Valid Value. Current Value is Empty')
   }
   else{
    messageOut.innerHTML = content;
    messageIn.value = ''; 
   }
  // yeslae chahee type garisake paxi send button thixe paxi tyo content box khali parxa
}

