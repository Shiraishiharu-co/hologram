function insertButtonHTML() {
  const buttonContainer = document.getElementById('button');
  if (buttonContainer) {
    buttonContainer.innerHTML = `
      <div class="button">
        <div class="button-link-1">
            <a href="SB38.html">SB38</a>
        </div>
        <div class="button-link-2">
            <a href="K209.html">K209</a>
        </div>
        <div class="button-link-3">
            <a href="KP78.html">KP78</a>
        </div>
        <div class="button-link-4">
            <a href="K196.html">K196</a>
        </div>
        <div class="button-link-5">
            <a href="KP12.html">KP12</a>
        </div>
        <div class="button-link-6">
            <a href="K254.html">K254</a>
        </div>
        <div class="button-link-7">
            <a href="K-10.html">K-10</a>
        </div>
        <div class="button-link-8">
            <a href="K66.html">K66</a>
        </div>
        <div class="button-link-9">
            <a href="KP24.html">KP24</a>
        </div>
        <div class="button-link-10">
            <a href="K59.html">K59</a>
        </div>
        <div class="button-link-11">
            <a href="KP13.html">KP13</a>
        </div>
        <div class="button-link-12">
            <a href="K65.html">K65</a>
        </div>
        <div class="button-link-13">
            <a href="HP49.html">HP49</a>
        </div>
        <div class="button-link-14">
            <a href="K17.html">K17</a>
        </div>
        <div class="button-link-15">
            <a href="CH02.html">CH02</a>
        </div>
        <div class="button-link-16">
            <a href="CH01.html">CH01</a>
        </div>
        <div class="button-link-17">
            <a href="K-38.html">K38</a>
        </div>
        <div class="button-link-18">
            <a href="KP15.html">KP15</a>
        </div>
        <div class="button-link-19">
            <a href="KP85.html">KP85</a>
        </div>
        <div class="button-link-20">
            <a href="KP37.html">KP37</a>
        </div>
        <div class="button-link-21">
            <a href="KP92.html">KP92</a>
        </div>
        <div class="button-link-22">
            <a href="KP42.html">KP42</a>
        </div>
        <div class="button-link-23">
            <a href="KP40.html">KP40</a>
        </div>
        <div class="button-link-24">
            <a href="K114.html">K114</a>
        </div>
        <div class="button-link-25">
            <a href="K162.html">K162</a>
        </div>
        <div class="button-link-26">
            <a href="KP63.html">KP63</a>
        </div>
        <div class="button-link-27">
            <a href="K106.html">K106</a>
        </div>
        <div class="button-link-28">
            <a href="KP35.html">KP35</a>
        </div>
        <div class="button-link-29">
            <a href="KP34.html">KP34</a>
        </div>
        <div class="button-link-30">
            <a href="KP76.html">KP76</a>
        </div>
        <div class="button-link-31">
            <a href="MP06.html">MP06</a>
        </div>
        <div class="button-link-32">
            <a href="KP4.html">KP4</a>
        </div>
      </div>
    `;
  }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertButtonHTML);
  } else {
    insertButtonHTML();
  }
  
  console.clear();
  
  const CARD = document.querySelector('.card-wrapper');
  
  const UPDATE = ({ x, y }) => {
    const BOUNDS = CARD.getBoundingClientRect();
    const pointerX = x - BOUNDS.x;
    const pointerY = y - BOUNDS.y;
    const ratioX = pointerX / BOUNDS.width;
    const ratioY = pointerY / BOUNDS.height;
    CARD.style.setProperty('--ratiox', ratioX);
    CARD.style.setProperty('--ratioy', ratioY);
    
    const mX = ratioX * 100;
    const mY = ratioY * 100;
    CARD.style.setProperty('--mx', `${mX}%`);
    CARD.style.setProperty('--my', `${mY}%`);
    
    const rX = (ratioX - 0.5) * -45;
    const rY = (ratioY - 0.5) * 75;
    CARD.style.setProperty('--rx', `${rX}deg`);
    CARD.style.setProperty('--ry', `${rY}deg`);
    
    const posX = 50 + (ratioX - 0.5) * 28;
    const posY = 50 + (ratioY - 0.5) * 28;
    CARD.style.setProperty('--pos', `${posX}% ${posY}%`);
    CARD.style.setProperty('--posx', `${posX}%`);
    CARD.style.setProperty('--posy', `${posY}%`);
    
    const hyp = Math.sqrt(Math.pow(ratioX - 0.5, 2) + Math.pow(ratioY - 0.5, 2)) * 10 / 7;
    CARD.style.setProperty('--hyp', hyp);
  };
  
  // PC やタッチパネルなど、pointer イベントで動作するデバイス用
  document.body.addEventListener('pointermove', UPDATE);
  
  // スマホやiPadなど、タッチイベント用に touchmove も追加
  document.body.addEventListener('touchmove', function(e) {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      UPDATE({ x: touch.clientX, y: touch.clientY });
    }
    // タッチ時のスクロールを防止（必要に応じて調整）
    e.preventDefault();
  }, { passive: false });

  const cardWrapper = document.querySelector('.card-wrapper');
cardWrapper.addEventListener('touchstart', () => {
  cardWrapper.classList.add('hover-active');
});
cardWrapper.addEventListener('touchend', () => {
  cardWrapper.classList.remove('hover-active');
})

const card = document.querySelector('.card-wrapper');
const color = card.querySelector('.color');

// 切り替えたい３つの画像パス
const imgs = [
  'url("../img/K106-1.jpg")',
  'url("../img/K106-2.jpg")',
  'url("../img/K106-3.jpg")'
];

card.addEventListener('mousemove', e => {
  const rect = card.getBoundingClientRect();
  const ratioX = (e.clientX - rect.left) / rect.width;        // 0〜1
  const idx = Math.floor(ratioX * imgs.length);               // 0,1,2
  const safeIdx = Math.min(idx, imgs.length - 1);             // 端数対策
  
  // CSS変数 --base-img に当該URLをセット
  color.style.setProperty('--base-img', imgs[safeIdx]);
});