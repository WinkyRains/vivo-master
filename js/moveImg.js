// 获取图片元素
const image = document.getElementById('movingImage');

// 初始化图片的位置和速度
let imageX = Math.random() * window.innerWidth;
let imageY = Math.random() * window.innerHeight;
let speedX = (Math.random() * 5) - 2.5; // 随机速度范围 -2.5 到 2.5
let speedY = (Math.random() * 5) - 2.5; // 随机速度范围 -2.5 到 2.5

// 设置图片初始位置
image.style.left = `${imageX}px`;
image.style.top = `${imageY}px`;

// 动画函数
function moveImage() {
    // 更新图片位置
    imageX += speedX;
    imageY += speedY;

    // 检查是否到达边界，如果是则反转速度方向
    if (imageX <= 0 || imageX >= window.innerWidth) {
        speedX = -speedX;
    }
    if (imageY <= 0 || imageY >= window.innerHeight) {
        speedY = -speedY;
    }
    // 应用新的位置
    image.style.left = `${imageX}px`;
    image.style.top = `${imageY}px`;
    // 递归调用动画函数以创建连续运动
    requestAnimationFrame(moveImage);
}
// 启动动画
moveImage();