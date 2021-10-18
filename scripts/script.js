let name='Waseem',
    email='abc@gmail.com',
    phoneNumber='1234567890',
    noOfSigners='3',
    noOfNotarizations='';

let button = document.getElementById('submitButton');
    button.addEventListener('click', submit)

let main = document.getElementById('main');

let loading = document.getElementById('loading')
let loader = document.getElementById('loader')
function submit(e){
    e.preventDefault();

    loading.classList.add('loading');
    loader.classList.add('loader');
    fetch('https://api-notarize.herokuapp.com/customer/createPublicOrder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, phoneNumber, noOfSigners, noOfNotarizations})
    })
    .then(data=>{
        if(data.status == 200){
            window.location.replace('./success.html')
        }else{
            window.location.replace('./failure.html')
        }
    })



}

/*

fetch('https://api-notarize.herokuapp.com/customer/createPublicOrder', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, phoneNumber, noOfSigners, noOfNotarizations})
})
.then(data=>{

    if(data.status == 200){
        window.location.replace('./success.html')
    }else{
        alert('failiure')
    }
})

*/