window.onload = function() {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    const indicators = carousel.querySelectorAll('.carousel-indicator');
    let currentIndex = 0;

    function showImage(index) {
        const aImg = [
            "images/smart-phone-img/vivo-s19.png",
            "images/smart-phone-img/vivo-x100.png",
            "images/smart-phone-img/vivo-y200.png",
            "images/smart-phone-img/iqoo-neo9s-pro.png"
        ];
        document.getElementById("a").src = aImg[index];//将图片存入数组用于轮播
        images.forEach(image => image.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        images[index].classList.add('active');//当前图片被选中，其它图片消除选中
        indicators[index].classList.add('active');
        currentIndex = index;
        console.log(currentIndex);
        images.forEach((image, index) => {//设置图片索引
            image.addEventListener('click', function() {
                if(currentIndex === 1){
                    window.location.href = "s40.html";
                }
                if(currentIndex === 2){
                    window.location.href = "s25.html";
                }
                if(currentIndex === 3){
                    window.location.href = "s5.html";
                }
            });
        });
    }
    indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showImage(index);//点击序号，将序号对应的索引传入showImage,显示对应图片
    });
    });
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    left.addEventListener('click', function() {
        // 检查当前索引是否大于0，如果是，则减1
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = images.length - 1;
        }
        showImage(currentIndex);
    });
    right.addEventListener('click', function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        showImage(currentIndex);
    });


    var img = document.getElementById('searchImg');
    img.addEventListener('mouseover', function() {
        this.src = 'images/logo-icon/search1.png';
    });
    img.addEventListener('mouseout', function() {
        this.src = 'images/logo-icon/search2.png';
    });


    const categories = document.querySelectorAll('.sidebar .category');
    // 为每个分类列表项添加鼠标悬浮事件监听器
    categories.forEach((category) => {
        category.addEventListener('mouseover', function() {
            // 获取当前分类的id，并去除前缀'category'
            const categoryId = this.id.replace('category', '');

            // 隐藏所有div
            document.querySelectorAll('.p1').forEach((p1) => {
                p1.style.display = 'none';
            });

            // 显示与当前分类对应的div
            document.getElementById(`div${categoryId}`).style.display = 'block';
        });
        var op = document.getElementById('e');
        // 添加鼠标移出事件监听器，隐藏所有div
        op.addEventListener('mouseleave', function() {
            const categoryId = this.id.replace('category', '');
            document.querySelectorAll('.p1').forEach((p1) => {
                p1.style.display = 'none';
            });
        });
    });

    var oTime=document.getElementById("time");
    function add0(m){
        return m<10 ? '0'+m : m;//个位数前补0
    }
    function showCurrentTime(){
        var nowtime = new Date();
        var overtime = new Date('2026-7-1');//获取格式化的当前日期
        var time1 = nowtime.getTime();//获取现在时间
        var time2 = overtime.getTime();//获取到期时间
        var tartime = (time2 - time1)/1000;//获取剩余时间
        var d = parseInt(tartime/60/60/24);//获取剩余天数
        var h = parseInt(tartime/60/60%24);//获取剩余小时
        var m = parseInt(tartime/60%60);//获取剩余分
        var s = parseInt(tartime%60);//获取剩余秒
        oTime.innerHTML = "剩余"+add0(d) + "天" + add0(h) + "小时" + add0(m) + "分" + add0(s) + "秒";
    }
    setInterval(showCurrentTime,1000);//定时器
}
//菜单列表展示


// 秒杀倒计时