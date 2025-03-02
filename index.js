document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 500,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
        on: {
            init: function() {
                console.log('Swiper initialized');
            }
        }
    });
    
    // Add additional event listeners if needed
    document.querySelector('.next').addEventListener('click', function() {
        swiper.slideNext();
    });
    
    document.querySelector('.prev').addEventListener('click', function() {
        swiper.slidePrev();
    });

     // Pause autoplay on hover
     const swiperEl = document.querySelector('.swiper');
     swiperEl.addEventListener('mouseenter', function() {
         swiper.autoplay.stop();
     });
     
     swiperEl.addEventListener('mouseleave', function() {
         swiper.autoplay.start();
     });
});
   



document.addEventListener('DOMContentLoaded', function() {
    // Set up Intersection Observer to trigger counter animation when in view
    const counters = document.querySelectorAll('.counter_number');
    const options = {
        threshold: 0.5,
        rootMargin: "0px"
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                const speed = 2000; // animation speed in milliseconds
                
                let count = 0;
                const updateCount = () => {
                    const increment = target / (speed / 30); // Increment per step
                    
                    if (count < target) {
                        count += increment;
                        counter.innerText = Math.ceil(count);
                        setTimeout(updateCount, 30);
                    } else {
                        counter.innerText = target;
                    }
                };
                
                updateCount();
                observer.unobserve(counter); // Only animate once
            }
        });
    }, options);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
});


  // Navbar Toggle
  window.toggleNavBar = function () {
    const bar = document.querySelector('.bar');
    const navBar = document.getElementById("nav_link");
    if (bar && navBar) {
        bar.classList.toggle('active');
        navBar.classList.toggle("navigation");

        if (navBar.classList.contains("navigation")) {
            const items = navBar.querySelectorAll('li');
            items.forEach(item => {
                item.style.animation = 'none';
                item.offsetHeight;
                item.style.animation = null;
            });
        }
    }
}


    // Shadow Scroller
    if (document.querySelector("#nav_drop")) {
        function ShadowScroller() {
            const shadowHeader = document.querySelector("#nav_drop");
            window.addEventListener("scroll", () => {
                const isScrolled = window.scrollY > 200;
                shadowHeader.classList.toggle("shadow", isScrolled);
            });
        }
        ShadowScroller();
    }
