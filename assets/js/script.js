// Fixed NavBar

window.addEventListener('scroll', function() {
  var header = document.querySelector('.header')
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  if (scrollTop > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


/* Mobile nav toggle */

const mobileNavShow = document.querySelector('.mobile-nav-show');
const mobileNavHide = document.querySelector('.mobile-nav-hide');

document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
  el.addEventListener('click', function(event) {
    event.preventDefault();
    mobileNavToogle();
  })
});

function mobileNavToogle() {
  document.querySelector('body').classList.toggle('mobile-nav-active');
  mobileNavShow.classList.toggle('d-none');
  mobileNavHide.classList.toggle('d-none');
}

/* Hide mobile nav on same-page/hash links */

document.querySelectorAll('#navbar a').forEach(navbarlink => {

  if (!navbarlink.hash) return;

  let section = document.querySelector(navbarlink.hash);
  if (!section) return;

  navbarlink.addEventListener('click', () => {
    if (document.querySelector('.mobile-nav-active')) {
      mobileNavToogle();
    }
  });

});

/* Toggle mobile nav dropdowns */

const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

navDropdowns.forEach(el => {
  el.addEventListener('click', function(event) {
    if (document.querySelector('.mobile-nav-active')) {
      event.preventDefault();
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('dropdown-active');

      let dropDownIndicator = this.querySelector('.dropdown-indicator');
      dropDownIndicator.classList.toggle('bi-chevron-up');
      dropDownIndicator.classList.toggle('bi-chevron-down');
    }
  })
});


// Hero Modal

function openModal() {
    const videoFrame = document.getElementById('video-frame');
    const videoUrl = 'https://www.youtube.com/embed/Xtt5qKzsXa0?controls=0&autoplay=1';
    videoFrame.src = videoUrl;
    videoModal.style.display = 'block';
}

function closeModal() {
    const videoFrame = document.getElementById('video-frame');
    videoFrame.src = '';
    videoModal.style.display = 'none';
}
    
const videoModal = document.getElementById('videoModal');

window.onclick = function(event) {
    if (event.target == videoModal) {
      closeModal();
    }
};

// Testimonials carousel

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    navText: ["<span class='carousel-control-prev-icon'></span>", "<span class='carousel-control-next-icon'></span>"],
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1000
  });
});

// Events

var animatedDiv = document.querySelector('.animated-div');

function startAnimation() {
  animatedDiv.style.animation = 'slide 0.28s linear forwards';
}

function reverseAnimation() {
  animatedDiv.style.animation = 'slide-reverse 0.28s linear forwards';
}
