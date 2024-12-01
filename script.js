document.addEventListener("DOMContentLoaded", function () {
    // 圖片滑動區域邏輯
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

    // 程式碼語法高亮邏輯
    const codeBlocks = document.querySelectorAll("code.python");

    codeBlocks.forEach(block => {
        block.innerHTML = block.innerHTML
            .replace(/\b(def|import|as|for|in|if|else|elif|return|print)\b/g, '<span class="keyword">$1</span>') // 關鍵字
            .replace(/\b\d+\b/g, '<span class="number">$&</span>') // 數字
            .replace(/#.*$/gm, '<span class="comment"><span class="comment-symbol">#</span>$&</span>') // 註解
            .replace(/(['"].*?['"])/g, '<span class="string">$1</span>'); // 字符串
    });
});

