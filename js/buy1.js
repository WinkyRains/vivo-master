window.onload = function() {
    var img = document.getElementById('searchImg');
    img.addEventListener('mouseover', function() {
        this.src = 'images/logo-icon/search1.png';
    });
    img.addEventListener('mouseout', function() {
        this.src = 'images/logo-icon/search2.png';
    });
    var bb;var cc;
    var nn = document.getElementById('name-p').innerHTML;
    var price;
    var ob1 = document.getElementById('btn-ver-1');
    var ob2 = document.getElementById('btn-ver-2');
    var ob3 = document.getElementById('btn-ver-3');
    var ob4 = document.getElementById('btn-ver-4');

    var oc1 = document.getElementById('btn-clr-1');
    var oc2 = document.getElementById('btn-clr-2');
    var oc3 = document.getElementById('btn-clr-3');
    var oc4 = document.getElementById('btn-clr-4');



    var prices = {
        '6GB+128GB': '3499',
        '8GB+256GB': '3799',
        '12GB+256GB': '4099',
        '16GB+512GB': '4499'
    };

    ob1.addEventListener('click', function() {
        updatePrice('6GB+128GB');
    });
    ob2.addEventListener('click', function() {
        updatePrice('8GB+256GB');
    });
    ob3.addEventListener('click', function() {
        updatePrice('12GB+256GB');
    });
    ob4.addEventListener('click', function() {
        updatePrice('16GB+512GB');
    });
    window.updatePrice = function(version) {
        // 更新价格
        var priceElement = document.getElementById('price-p');
        priceElement.innerHTML = '￥ ' + prices[version];
        price = priceElement.innerHTML;
        bb = version; // 保存选择的版本
    }

    window.buyc1 = function() {
        cc = oc1.innerHTML;
    }
    window.buyc2 = function() {
        cc = oc2.innerHTML;
    }
    window.buyc3 = function() {
        cc = oc3.innerHTML;
    }
    window.buyc4 = function() {
        cc = oc4.innerHTML;
    }
    document.querySelector('.user-check').addEventListener('change', function() {
        const buyButton = document.getElementById('btn-buy');
        if (this.checked) {
            buyButton.disabled = false;
        } else {
            buyButton.disabled = true;
        }
    });
    window.buy = function() {
        const checkBox = document.querySelector('.user-check');
        if (!checkBox.checked) {
            alert('请先阅读并同意《vivo服务条款》');
            return;
        }
        else{
            var number = document.getElementById('num').value;
            var selectedVersionPrice = prices[bb];
            var totalPrice = selectedVersionPrice * number;

            alert("您已成功支付" + "￥" +totalPrice);
            alert("感谢您购买" + nn + " " + bb + cc + " x " + number);
        }

    }
};

