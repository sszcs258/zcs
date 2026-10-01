const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/live2d-widget@3.1.4/lib/L2Dwidget.min.js";
script.onload = () => {
  L2Dwidget.init({
    model: {
      jsonPath: "https://cdn.jsdelivr.net/npm/live2d-widget-model-hibiki@1.0.5/assets/hibiki.model.json",
      scale: 0.8 // 桌面端模型缩放，从1降到0.8，整体变小
    },
    display: {
      position: "left",
      width: 120,  // 桌面宽度从150→120
      height: 240, // 桌面高度从300→240
      hOffset: 0,
      vOffset: -10
    },
    mobile: {
      show: true,
      scale: 0.35 // 移动端缩放从0.5→0.35，大幅缩小，不会挡住内容
    },
    react: {
      opacityDefault: 0.7,
      opacityOnHover: 0.2
    }
  });
};
document.body.appendChild(script);
