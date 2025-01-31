// const username = prompt("Enter username:");
//   const password = prompt("Enter password:");

//   if (username !== "coburncreative" || password !== "coburn25") {
//     document.body.innerHTML = "<h1>Access Denied</h1>";
// } else {
//     document.body.innerHTML = `
//     <div class="card">
//         <div class="card-image">
//             <div class="reflective-square"></div>
//             <img src="assets/img/toreka_frame.png" alt="" class="image-3">
//             <img src="assets/img/toreka_charactor.png" alt="" class="image-2">
//             <img src="assets/img/toreka_background.png" alt="" class="image">
//             <img src="assets/img/holo-HP49.png" alt="holo" class="holo">
//             <img src="assets/img/holo-HP49-2.png" alt="holo" class="holo-2">
//             <img src="assets/img/holo-HP49-3.png" alt="holo" class="holo-3">
//         </div>
//     </div>
//     <div class="link">
//         <a href="index.html">CH02</a>
//     </div>
//     <div class="link-2">
//         <a href="holo-K10.html">K10</a>
//     </div>
//     <div class="link-3">
//         <a href="holo-K38.html">K38</a>
//     </div>
//     <div class="link-4">
//         <a href="holo-SB38.html">SB38</a>
//     </div>
//     <div class="link-5">
//         <a href="holo-KP76.html">KP76</a>
//     </div>
//     <div class="link-6">
//         <a href="holo-HP49.html">HP49</a>
//     </div>
// `;


async function loadButton() {
    const response = await fetch("button.html");
    const content = await response.text();
    document.getElementById("button").innerHTML = content;
}

loadButton();

const reflectiveSquare = document.querySelector('.card-reflective');
const image = document.querySelector('.card-reflective-image');
const images = document.querySelector('.card-reflective-image-2');
const images2 = document.querySelector('.card-reflective-image-3');
const holo = document.querySelector('.card-reflective-holo');
const holo2 = document.querySelector('.card-reflective-holo-2');
const holo3 = document.querySelector('.card-reflective-holo-3');      
    
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
            holo3.style.transform = transformStyle;
    
            // 三分割の境界線を計算
            const oneThird = innerWidth / 3; // 画面の幅を3分割
            const twoThirds = (innerWidth / 3) * 2;
        
            // 位置に応じて opacity を切り替え
            if (clientX <= oneThird) {
                // 左側 (holo)
                holo.style.opacity = '0.6';
                holo2.style.opacity = '0';
                holo3.style.opacity = '0';
            } else if (clientX > oneThird && clientX <= twoThirds) {
                // 中央 (holo-2)
                holo.style.opacity = '0';
                holo2.style.opacity = '0.6';
                holo3.style.opacity = '0';
            } else {
                // 右側 (holo-3)
                holo.style.opacity = '0';
                holo2.style.opacity = '0';
                holo3.style.opacity = '0.6';
            }
        });
    });
// }    