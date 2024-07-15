const inputGmail = document.getElementById('input-gmail')
const subBtn = document.getElementById('sub-btn')

subBtn.addEventListener('click', () => {
    console.log(inputGmail.value);
    inputGmail.value = ''
})
// let menuBtn = document.querySelector('.menu-btn')
// let navBar = document.querySelector('.navbar')

// menuBtn.addEventListener('click', () => {
//     navBar.classList.toggle('active')
// })
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navBar = document.querySelector('.navbar');

    menuBtn.addEventListener('click', () => {
        navBar.classList.toggle('.active');
    });
});
