const reflectiveSquare = document.querySelector('.reflective-square');
const images2 = document.querySelector('.image-3');
const images = document.querySelector('.image-2');
const image = document.querySelector('.image');
const holo = document.querySelector('.holo');
const holo2 = document.querySelector('.holo-2');



document.addEventListener('mousemove', (event) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = event;

    // マウス位置から計算
    const rotateX = (clientY / innerHeight - 0.5) * 60; // 垂直方向の回転
    const rotateY = (clientX / innerWidth - 0.5) * 60;  // 水平方向の回転
    const scale = 1 + ((1 - Math.abs(clientX / innerWidth - 0.5)) * 0.3);

    // 背景位置の計算
    const xPercent = (clientX / innerWidth) * 100;
    const yPercent = (clientY / innerHeight) * 100;

    // 色の変化 (Y方向も影響させる)
    const hueRotate = ((clientX / innerWidth) * 360 + (clientY / innerHeight) * 180) % 360;

    // 動きと色を統一的に適用
    const transformStyle = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
    const filterStyle = `hue-rotate(${hueRotate}deg)`;
    const backgroundPosition = `${xPercent}% ${yPercent}%`;

    // 動きを同期的に適用
    requestAnimationFrame(() => {
        reflectiveSquare.style.transform = transformStyle;
        reflectiveSquare.style.filter = filterStyle;
        reflectiveSquare.style.backgroundPosition = backgroundPosition;

        holo.style.filter = filterStyle;

        // 他の画像に適用する動き
        image.style.transform = transformStyle;
        images.style.transform = transformStyle;
        images2.style.transform = transformStyle;
        holo.style.transform = transformStyle;
        holo2.style.transform = transformStyle;

        // マウスの位置で opacity を切り替え
        if (clientX > innerWidth / 2) {
            // 右半分にマウスがある場合
            holo.style.opacity = '0.6';
            holo2.style.opacity = '0';
        } else {
            // 左半分にマウスがある場合
            holo.style.opacity = '0';
            holo2.style.opacity = '0.6';
        }
    });
});
