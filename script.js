document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("#image-slider img");
    let currentIndex = 0;

    function showNextImage() {
        // 隱藏當前圖片
        images[currentIndex].classList.remove("active");

        // 計算下一張圖片索引
        currentIndex = (currentIndex + 1) % images.length;

        // 顯示下一張圖片
        images[currentIndex].classList.add("active");
    }

    // 初始化顯示第一張圖片
    images[currentIndex].classList.add("active");

    // 每3秒切換一張圖片
    setInterval(showNextImage, 3000);
});
