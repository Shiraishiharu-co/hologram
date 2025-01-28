const username = prompt("Enter username:");
  const password = prompt("Enter password:");

  if (username !== "coburncreative" || password !== "coburn25") {
    document.body.innerHTML = "<h1>Access Denied</h1>";
} else {
    document.body.innerHTML = `
    <div class="card">
        <div class="card-image">
            <div class="reflective-square"></div>
            <img src="assets/img/toreka_frame.png" alt="" class="image-3">
            <img src="assets/img/toreka_charactor.png" alt="" class="image-2">
            <img src="assets/img/toreka_background.png" alt="" class="image">
            <img src="assets/img/holo-HP49.png" alt="holo" class="holo">
            <img src="assets/img/holo-HP49-2.png" alt="holo" class="holo-2">
        </div>
    </div>
    <div class="link">
        <a href="index.html">CH01</a>
    </div>
    <div class="link-2">
        <a href="holo-K10.html">K10</a>
    </div>
    <div class="link-3">
        <a href="holo-K38.html">K38</a>
    </div>
    <div class="link-4">
        <a href="holo-SB38.html">SB38</a>
    </div>
    <div class="link-5">
        <a href="holo-HP49.html">HP49</a>
    </div>
    `;
const reflectiveSquare = document.querySelector('.reflective-square');
const images2 = document.querySelector('.image-3');
const images = document.querySelector('.image-2');
const image = document.querySelector('.image');
const holo = document.querySelector('.holo');


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

        holo.style.transform = transformStyle;
        holo.style.filter = filterStyle;

        image.style.transform = transformStyle;
        images.style.transform = transformStyle;
        images2.style.transform = transformStyle;
    });
});
}