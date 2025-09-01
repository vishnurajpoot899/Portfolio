let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

let icon = document.getElementById("light");
icon.src = "sun.png";
icon.onclick = function() {
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")) {
        icon.src = "moon.png";
    }
    else{
        icon.src = "sun.png"
    }
}


var typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'C++ Enthusiast','SQL Developer'],
    typeSpeed: 50,
    loop: true,
    backspeed: 50,
  });