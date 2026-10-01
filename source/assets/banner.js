const apiUrl = "https://www.dmoe.cc/random.php";

// 预加载图片
function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(url);
    img.onerror = () => reject("图片加载失败");
    img.src = url;
  });
}

async function changeBannerBg(){
  const bannerDom = document.getElementById('page-header');
  if(!bannerDom) return;
  const imgUrl = apiUrl + "?rand=" + Math.random();
  try{
    const readyUrl = await loadImage(imgUrl);
    bannerDom.style.backgroundImage = `url(${readyUrl})`;
  }catch(e){
    console.warn("背景图加载失败", e);
  }
}

document.addEventListener('DOMContentLoaded',()=>{
  changeBannerBg();
  // 30秒自动切换
  setInterval(changeBannerBg, 30000);
})
