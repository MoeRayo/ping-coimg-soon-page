const emailInput = document.getElementById('email-input');
const subscribeButton = document.getElementById('subscribe-input');
const errorMsg = document.getElementById('error-message')
const mailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
emailInput.addEventListener('blur',($event)=>{
    if ($event.target.value.match(mailFormat){
        emailInput.style.border = 'thin solid green';
        errorMsg.style.display = 'none';
    } else{
        emailInput.style.border ='thin solid red';
        errorMsg.style.display = 'inline';
    }
});