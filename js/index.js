window.onload = function() {

    let _direction = true;//设置默认方向->right
    let _move = () =>{
        let lists = document.querySelectorAll('.item');//获取所有图片
        if(_direction){//如果图片左移，小图列表第1个图片切换为大图
            document.querySelector('#slide').appendChild(lists[0]);
        }
        else{//如果右移则将小图列表最后一个图切换为大图
            document.querySelector('#slide').prepend(lists[lists.length-1]);
        }
    }
    let timer = setInterval(_move,2500);//设置轮播延时
    document.querySelector('.container').addEventListener('mouseover',() =>{
        clearInterval(timer);//鼠标移入图片暂停轮播
    });
    document.querySelector('.container').addEventListener('mouseout',() =>{
        timer = setInterval(_move,2500);//鼠标移出继续轮播
    });
    document.querySelectorAll('.s_button')[1].onclick=()=>{
        _direction = true;//预先设置方向为true，点击向右按钮，_direction=true图片向右轮播
        _move();
    }
    document.querySelectorAll('.s_button')[0].onclick=()=>{
        _direction = false;//预先设置方向为true，点击向左按钮，_direction=true图片向左轮播
        _move();
    }

    function c(){
        var wave = document.createElement('div');
        wave.className = 'wave';
        wave.style.left = (event.clientX - 50) + 'px';
        wave.style.top = (event.clientY - 50) + 'px';
        document.getElementById('container').appendChild(wave);

        setTimeout(function() {
            wave.remove();
        }, 1000);
    }

    var img = document.getElementById('searchImg');
    img.addEventListener('mouseover', function() {
        this.src = 'images/logo-icon/search1.png';
    });
    img.addEventListener('mouseout', function() {
        this.src = 'images/logo-icon/search2.png';
    });
    let button = document.getElementsByClassName('button')[0];
    let box = document.getElementsByClassName('box')[0];
    let pirze = box.getElementsByTagName('div');
    console.log(pirze);

    let k = 0;
    let time = 500;
    let count = 0;
    let int;
    let rom = 0;
    button.onclick = eve;
//初始化九宫格
    function eve() {
        pirze[k].style.background = "pink";
        int = setInterval(pu, time)
        rom = Math.floor(Math.random() * pirze.length);
        button.onclick = null;
    }

    function pu() {
        if (k < pirze.length - 1) {
            k++;
            pirze[k - 1].style.background = "#CBD7F9FF";
            pirze[k].style.background = "pink";
        } else {//转动到/转动过底色
            k = 0;
            count++;
            pirze[pirze.length - 1].style.background = "#CBD7F9FF";
            pirze[k].style.background = "pink";
        }
        if (count <= 5) {
            if (time <= 100) {
                time = 100;
            } else {
                time -= 20;
            }//设置转动速度
        } else {
            if (time >= 500) {
                time = 500;
            } else {
                time += 20;
            }

        }
        if (count > 7 && rom == k) {
            clearInterval(int);
            count = 0;
            rom = 0;
            time = 500;
            button.onclick = eve;
            let prizeName = pirze[k].getAttribute('data-prize');
            setTimeout(function(){
                if(prizeName === '谢谢参与'){//弹出中奖信息
                    alert("很遗憾，您未中奖");
                }
                if(prizeName==="vivoy36"){
                    alert("恭喜您，抽中vivo y36!");
                }
                if(prizeName==="IQOOz7"){
                     alert("恭喜您，抽中IQOO z7!");
                }
                if(prizeName==="vivoY200i"){
                     alert("恭喜您，抽中vivo Y200i!");
                }
                if(prizeName==="IQOOneo9s"){
                    alert("恭喜您，抽中IQOO Neo9s!");
                }
                if(prizeName==="vivoX90pro"){
                    alert("恭喜您，抽中vivo X90pro!");
                }
                if(prizeName==="vivoX100sPro"){
                    alert("恭喜您，抽中vivo X100sPro!");
                }
                if(prizeName==="vivoS19"){
                     alert("恭喜您，抽中vivo S19!");
                }
            },300)
        }else{
            clearInterval(int);
            int = setInterval(pu, time)
        }

    }

    function Scroll() {}
    Scroll.prototype.upScroll = function(dom, _h, interval) {
        var dom = document.getElementById(dom);
        var timer = setTimeout(function() {
            var _field = dom.firstElementChild;
            _field.style.marginTop = _h;
            clearTimeout(timer);
        }, 1000)//定时器每秒改变字幕与顶部的margin-top
        setInterval(function() {
            var _field = dom.firstElementChild;
            _field.style.marginTop = "0px";
            dom.appendChild(_field);//达到顶部的字幕被添加到所有字幕的末尾
            var _field = dom.firstElementChild
            _field.style.marginTop = _h;//给末尾结点的字幕重新赋值margin-top
        }, interval)
    }
    var myScroll = new Scroll();
    myScroll.upScroll("demo", "-36px", 3000);//初始化滚动速度
}


