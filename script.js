// Preloader
$(window).on('load', function () {
  setTimeout(function () {
    $('.loader_bg').fadeToggle();
  }, 1500);
});


document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    navLinks.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            nav.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const textContainer = document.getElementById('text-container');
    const text = `FROM CONCEPT TO\nCREATION WE PERFECT\nEVERY\nDETAIL\n`;
    let index = 0;
  
    function type() {
      if (index < text.length) {
        if (text[index] === '\n') {
          textContainer.innerHTML += '<br />';
        } else {
          textContainer.innerHTML += text[index];
        }
        index++;
        setTimeout(type, 100); // Adjust typing speed here
      }
    }
  
    textContainer.innerHTML = ''; // Clear the container before starting
    type();
  });
  


  document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 1000, // adjusts animation duration
        once: true, // animation only plays once when scrolling into view
    });
});





  document.addEventListener('DOMContentLoaded', function() {
        var typed = new Typed('#EVERY', {
            strings: ['EVERY', 'EACH', 'ALL'],
            typeSpeed: 150,
            backSpeed: 55,
            backDelay: 1000,
            startDelay: 500,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            autoInsertCss: true,
        });
    });
