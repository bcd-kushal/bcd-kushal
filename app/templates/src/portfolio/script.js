//toggle icon navbar
let menuicon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
 menuicon.onclick=()=>{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
 }
//scroll section
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>= offset && top <offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
           //active section for animation on scroll
           sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    }); 
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
    //remove toggle and navbar when click navbar links (scroll)
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
}