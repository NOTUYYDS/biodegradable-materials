document.addEventListener("DOMContentLoaded", function () {
    const imagesContainer = document.querySelector(".slider-images");
    const dots = document.querySelectorAll(".slider-dots .dot");
    let currentIndex = 0; // 當前圖片索引

    // 更新圖片和小點的狀態
    function updateSlider(index) {
        const offset = -index * 100; // 計算偏移量
        imagesContainer.style.transform = `translateX(${offset}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    // 點擊小點切換圖片
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateSlider(currentIndex);
        });
    });

    // 自動播放（可選）
    setInterval(() => {
        currentIndex = (currentIndex + 1) % dots.length; // 循環切換
        updateSlider(currentIndex);
    }, 5000); // 每5秒切換一次
});
