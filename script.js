let menu = document.querySelector('#menu-btn');

let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('fa-times')
    items.classList.remove('active');
    login.classList.remove('active');
    search_input.classList.remove('active');
}

let cart = document.querySelector('#cart-btn');

let items = document.querySelector('.items-cart');

cart.onclick = () => {
    items.classList.toggle('active');
    menu.classList.remove('fa-times')
    navbar.classList.remove('active');
    login.classList.remove('active');
    search_input.classList.remove('active');
}


let user = document.querySelector('#user-btn');

let login = document.querySelector('.login');

user.onclick = ()=>{
    login.classList.toggle('active');
    menu.classList.remove('fa-times') 
    navbar.classList.remove('active');
    items.classList.remove('active');
    search_input.classList.remove('active');
}

let search = document.querySelector('#search-btn');

let search_input = document.querySelector('.search-input');

search.onclick = ()=>{
    search_input.classList.toggle('active');
    menu.classList.remove('fa-times') 
    navbar.classList.remove('active');
    items.classList.remove('active');
    login.classList.remove('active');
}


window.onscroll = ()=>{
    navbar.classList.remove('active');
    items.classList.remove('active');
    login.classList.remove('active');
    search_input.classList.remove('active');
}


function voirProduits(id, button ){

    const allProducts = document.querySelectorAll('.item');
    allProducts.forEach(products => products.classList.remove('active'));

    const itemselected = document.getElementById(id);
    itemselected.classList.toggle('active');

    const allButtons = document.querySelectorAll('.boutton');
    allButtons.forEach(button => button.classList.remove('active'));

    button.classList.add('active');

}


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });