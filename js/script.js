let emailInput = document.getElementById('email-input');
let subscribeButton = document.getElementById('subscribe-input');
let errorMsg = document.getElementById('error-message');
let successMsg = document.getElementById('success-message');
let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
emailInput.addEventListener('blur',($event)=>{
    if ($event.target.value.match(mailFormat)){
        emailInput.style.border = 'thin solid green';
        errorMsg.style.display = 'none';
        successMsg.style.display = 'block';
        emailInput.value = '';
    } else{
        emailInput.style.border ='thin solid red';
        errorMsg.style.display = 'block';
        successMsg.style.display ='none';
        emailInput.value = 'example@email/com';
    }
});

// me.you@yahoo.com
