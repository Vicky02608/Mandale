document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const arrowIcon = item.querySelector('.arrow-icon');

        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherArrow = otherItem.querySelector('.arrow-icon');
                    otherArrow.style.transform = 'rotate(0deg)';
                }
            });

            // Toggle the current item's active state and rotate the arrow
            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                arrowIcon.style.transform = 'rotate(180deg)';
            } else {
                arrowIcon.style.transform = 'rotate(0deg)';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    /**
     * Function to show a specific slide and update the active dot.
     * @param {number} n The index of the slide to show.
     */
    const showSlide = (n) => {
        // Ensure the index wraps around
        currentSlide = (n + slides.length) % slides.length;

        // Remove the 'active' class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active-dot'));

        // Add the 'active' class to the current slide and dot
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active-dot');
    };

    /**
     * Function to go to the next slide.
     */
    const nextSlide = () => {
        showSlide(currentSlide + 1);
    };

    /**
     * Function to go to the previous slide.
     */
    const prevSlide = () => {
        showSlide(currentSlide - 1);
    };

    // Event listeners for navigation buttons
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Event listeners for dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Set up automatic slideshow
    let autoSlideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

    // Pause slideshow on mouse hover
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });
    sliderContainer.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(nextSlide, 5000);
    });

});
