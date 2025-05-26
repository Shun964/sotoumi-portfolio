//---------------------------------------------
// 1. ハンバーガーメニューの開閉（HTML: ナビゲーション）
//---------------------------------------------
function toggleMenu() {
  const nav = document.getElementById('mobileNav');
  nav.style.display = (nav.style.display === 'block') ? 'none' : 'block';
}

//---------------------------------------------
// 2. スクロール時アニメーション（HTML: コンセプト文・Note/Base画像・Instagram）
//---------------------------------------------
function revealFadeUp() {
  const triggers = document.querySelectorAll('.fade-up-trigger');
  const windowHeight = window.innerHeight;

  triggers.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < windowHeight - 100) {
      el.classList.add('fade-up');
    }
  });
}

window.addEventListener('scroll', revealFadeUp);
window.addEventListener('load', revealFadeUp);

//---------------------------------------------
// 3. 横スクロールギャラリー初期位置リセット（HTML: ポートフォリオ）
//---------------------------------------------
window.addEventListener('load', () => {
  const carousel = document.getElementById('carousel');
  if (carousel) {
    carousel.scrollLeft = 0;
  }
});

//---------------------------------------------
// 4. 横スクロールギャラリー：インジケーター表示と操作（HTML: ポートフォリオ）
//---------------------------------------------
const carousel = document.getElementById('carousel');
const indicators = document.getElementById('indicators');

if (carousel && indicators) {
  const images = carousel.querySelectorAll('img');

  // インジケーター生成
  images.forEach((_, index) => {
    const dot = document.createElement('span');
    if (index === 0) dot.classList.add('active');
    indicators.appendChild(dot);
  });

  const dots = indicators.querySelectorAll('span');

  // スクロール連動でインジケーター更新
  carousel.addEventListener('scroll', () => {
    const index = Math.round(carousel.scrollLeft / carousel.clientWidth);
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
  });
}

//---------------------------------------------
// 5. 横スクロールギャラリー：左右ボタンの挙動（HTML: ポートフォリオ）
//---------------------------------------------
function prevSlide() {
  const carousel = document.getElementById('carousel');
  if (!carousel) return;
  const imageWidth = carousel.querySelector('img').clientWidth + 16;
  carousel.scrollBy({ left: -imageWidth, behavior: 'smooth' });
}

function nextSlide() {
  const carousel = document.getElementById('carousel');
  if (!carousel) return;
  const imageWidth = carousel.querySelector('img').clientWidth + 16;
  carousel.scrollBy({ left: imageWidth, behavior: 'smooth' });
}
