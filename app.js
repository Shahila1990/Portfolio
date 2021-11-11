const humbuger = document.querySelector('.header .nav-bar .nav-list .humburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

humbuger.addEventListener('click', () => {
    humbuger.classList.toggle('active')
    mobile_menu.classList.toggle('active')
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if(scroll_position > 270) {
        header.style.backgroundColor = '#29323c' 
    }
    else{
        header.style.backgroundColor = 'transparent';
    }
});

menu.forEach((item) => {
    item.addEventListener('click' , () => {
        mobile_menu.classList.toggle("active");
         humbuger.classList.toggle("active");
    })
})