// toggle buttoin functionality.
const navbar = document.querySelector('.navbar');
const icon = document.querySelector('#icon');
//adding a class to the navbar.
function addClass(){
    navbar.classList.toggle('active');
    //Changing the icon by following the conditions above.
    if(navbar.classList != 'navbar'){
        icon.className = 'fas fa-times';
    }
    else{
        icon.className = 'fas fa-bars';
    }
}

// This removes the mobile navbar when you click on mobile navlinks.
function navigation(){
    navbar.classList.remove('active');
    icon.className = 'fas fa-bars';
}
