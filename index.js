// constatnts.
const navbar = document.querySelector('.navbar');
const icon = document.querySelector('#icon');
const email = document.querySelector('#email');
const number = document.querySelector('#number');
const emailBtn = document.querySelector('#showemail');
const numberBtn = document.querySelector('#phone');
const text = [
    'aoussiad92@gmail.com',
    '********************'
];
const num = [
    '0694785913',
    '**********'
];

// We use this to loop over text and num arrays. 
var counter = 0;

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
// contact section functionality.
function contact(){
    email.textContent = text[counter];
    counter++;
    if(counter === 1){
        emailBtn.textContent = 'Hide Email';
    }else{
        emailBtn.textContent = 'Show Email';

    }
    if(counter === 2){
        counter = 0;
    }
}
function phone(){
    number.textContent = num[counter];
    counter++;
    if(counter === 1){
        numberBtn.textContent = 'Hide Number';
    }else{
        numberBtn.textContent = 'Show Number';

    }
    if(counter === 2){
        counter = 0;
    }
}


