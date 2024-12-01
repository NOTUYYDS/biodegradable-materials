document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".slider-images img");
    const dots = document.querySelectorAll(".slider-dots .dot");
    const progressBar = document.querySelector(".progress-bar .progress");
    let currentIndex = 0;
    const totalImages = images.length;
    const intervalTime = 3000; // 每張圖片停留時間（毫秒）

    // 切換到指定圖片
    function showSlide(index) {
        images.forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });

        // 重置並更新進度條
        progressBar.style.width = "0";
        setTimeout(() => {
            progressBar.style.width = "100%";
        }, 50); // 微調延遲，確保動畫正常運行
    }

    // 自動切換圖片
    function autoSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        showSlide(currentIndex);
    }

    // 初始化進度條
    setTimeout(() => {
        progressBar.style.width = "100%";
    }, 50);

    // 點擊小點手動切換
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    // 自動播放
    setInterval(autoSlide, intervalTime);
});

