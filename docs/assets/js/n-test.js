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
  
  //ページ読み込み時に画面中央でエフェクトを1回適用
window.addEventListener('load', () => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    UPDATE({ x: centerX, y: centerY });
  });

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
