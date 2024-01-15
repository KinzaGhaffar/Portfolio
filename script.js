const container = document.querySelector('.container');

const cloneContainer = container.cloneNode(true);
cloneContainer.id = 'dark-container';
document.body.appendChild(cloneContainer);
cloneContainer.classList.remove('active');


const toggleIcons = document.querySelectorAll('.toggle-icon');
const icons = document.querySelectorAll('.toggle-icon i');
const darkContainer = document.querySelector('#dark-container');
const darkContainerImg = document.querySelector('#dark-container .home-img img');

darkContainerImg.src = 'images/kinzakinza.jpeg';

toggleIcons.forEach(toggle => {
    toggle.addEventListener('click', () => {

        toggle.classList.add('disabled');
        setTimeout(() => {
            toggle.classList.remove('disabled');
        },1500);

        icons.forEach(icon => {
            icon.classList.toggle('bx-sun');
        });

        container.classList.toggle('active');
        darkContainer.classList.toggle('active');
    });
});


    const scriptURL = 'https://script.google.com/macros/s/AKfycbwXmKz1vne5pdcf2oKJyuUwzfVDwYMEEbXBlNyxHzoubE8rgZKomrpE74LZeNtyJWRR/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
    
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message Sent Successfully!"
        })
        .catch(error => console.error('Error!', error.message))
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })