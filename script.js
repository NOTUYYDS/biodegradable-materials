document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".slider-wrapper");
    const dots = document.querySelectorAll(".dot");
    const slideCount = dots.length;
    let currentIndex = 0;

    function showSlide(index) {
        // Update the transform property to slide
        wrapper.style.transform = `translateX(-${index * 100}%)`;

        // Update active dot
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        showSlide(currentIndex);
    }

    // Auto-slide every 3 seconds
    const interval = setInterval(nextSlide, 3000);

    // Dot click event
    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            currentIndex = parseInt(dot.dataset.index);
            showSlide(currentIndex);
            clearInterval(interval); // Stop auto-slide when user interacts
        });
    });

    // Initialize the slider
    showSlide(currentIndex);
});


    // 自動播放
    setInterval(autoSlide, intervalTime);
});

