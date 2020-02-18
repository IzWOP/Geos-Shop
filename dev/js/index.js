//@prepros-append about.js
//@prepros-append schedule.js
//@prepros-append contact.js
//@prepros-append about.js


document.addEventListener("DOMContentLoaded", function(event) {
 let menu = document.getElementsByClassName('menu')[0];
 let logo = document.getElementsByClassName('logo')[0];


    for (let i = 0; i < menu.children.length; i++) {
        const el = menu.children[i];
        el.addEventListener('click', (e)=>{
            e.preventDefault();

            switch (el.classList[0]) {
                case 'about':
                    window.location.href = "./about.html";
                    break;

                case 'schedule':
                    window.location.href = "./schedule.html"
                    break;

                case 'contact':
                    window.location.href = "./contact.html"
                    break;
                default:
                    break;
            }
        })  
    }
    
    let mobileMenu = document.getElementById('menu'); 
    for (let i = 0; i < mobileMenu.children.length; i++) {
        const el = mobileMenu.children[i];
        console.log(el)
        el.addEventListener('click', (e)=>{
            e.preventDefault();

            switch (el.classList[0]) {

                case 'mobileAbout':
                    console.log('dead')
                    window.location.href = "./about.html";
                    break;

                case 'mobileSchedule':
                    window.location.href = "./schedule.html"
                    break;

                case 'mobileContact':
                    window.location.href = "./contact.html"
                    break;

            
                default:
                    break;
            }
        })  
    }
    logo.addEventListener('click',(e)=>{
        e.preventDefault();
        window.location.href = "./index.html"
    });
});