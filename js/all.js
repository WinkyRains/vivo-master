// 假设这是我们的机型数据
const data = {
    x:[
        "vivo x100s Pro",
        "vivo x100s",
        "vivo x100 Pro",
        "vivo x100",
        "vivo x-fold3",
        "vivo x-fold2",
        "vivo x-flip",
        "vivo x90s",
        "vivo x90Pro",
        "vivo x90",
        "vivo x80Pro",
        "vivo x80"
    ],//使用二维数组存储不同类手机的型号
    y: [
        "vivo y200T",
        "vivo y200i",
        "vivo y200GT",
        "vivo y100i",
        "vivo y100",
        "vivo y78t",
        "vivo y78m",
        "vivo y78",
        "vivo y36m",
        "vivo y36i",
        "vivo y36",
        "vivo y12"
    ],
    s:[
        "vivo s19",
        "vivo s18Pro",
        "vivo s18e",
        "vivo s18",
        "vivo s17Pro",
        "vivo s17e",
        "vivo s17",
        "vivo s16Pro",
        "vivo s16e",
        "vivo s16",
        "vivo s15Pro",
        "vivo s15"
    ],
    i:[
        "IQOO 12",
        "IQOO 11s",
        "IQOO 11",
        "IQOO 10",
        "IQOO Neo9s Pro",
        "IQOO Neo8",
        "IQOO Neo7",
        "IQOO Neo6",
        "IQOO Z9Turbo",
        "IQOO Z9x",
        "IQOO Z8x",
        "IQOO Z7"
    ],

};

// 获取所有类型按钮
const typeButtons = document.querySelectorAll('.type-button');
// 遍历每个类型按钮并添加点击事件监听器
typeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const type = this.getAttribute('data-type');
        // 设置当前选中的类型
        setCurrentType(type);
    });
});
// 设置当前选中的类型
function setCurrentType(type) {
    // 在这里可以存储当前选中的类型，比如使用localStorage或者全局变量
    // 这里我们简单地将其存储在一个对象中
    window.currentType = type;
    // 清空搜索结果
    document.getElementById('searchResults').innerHTML = '';
}
// 获取搜索输入框
const searchInput = document.getElementById('search');

// 添加输入事件监听器
searchInput.addEventListener('input', function() {
    const searchTerm = this.value;
    const currentType = window.currentType;
    if (!currentType || !searchTerm) return;

    const filteredData = data[currentType].filter(item => item.includes(searchTerm));

    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = '';
    filteredData.forEach(result => {
        const div = document.createElement('div');
        div.classList.add('result-item');
        div.textContent = result;
        // 添加点击事件监听器，实现跳转
        div.addEventListener('click', function() {
            // 根据机型名称跳转到s1.html
            switch(this.textContent) {
                case "IQOO 12":window.location.href = "s1.html";break;
                case "IQOO 11s":window.location.href = "s2.html";break;
                case "IQOO 11":window.location.href = "s3.html";break;
                case "IQOO 10":window.location.href = "s4.html";break;
                case "IQOO Neo9s Pro":window.location.href = "s5.html";break;
                case "IQOO Neo8":window.location.href = "s6.html";break;
                case "IQOO Neo7":window.location.href = "s7.html";break;
                case "IQOO Neo6":window.location.href = "s8.html";break;
                case "IQOO Z9Turbo":window.location.href = "s9.html";break;
                case "IQOO Z9x":window.location.href = "s10.html";break;
                case "IQOO Z8x":window.location.href = "s11.html";break;
                case "IQOO Z7":window.location.href = "s12.html";break;
                case "vivo s19":window.location.href = "s13.html";break;
                case "vivo s18Pro":window.location.href = "s14.html";break;
                case "vivo s18e":window.location.href = "s15.html";break;
                case "vivo s18":window.location.href = "s16.html";break;
                case "vivo s17Pro":window.location.href = "s17.html";break;
                case "vivo s17e":window.location.href = "s18.html";break;
                case "vivo s17":window.location.href = "s19.html";break;
                case "vivo s16Pro":window.location.href = "s20.html";break;
                case "vivo s16e":window.location.href = "s21.html";break;
                case "vivo s16":window.location.href = "s22.html";break;
                case "vivo s15Pro":window.location.href = "s23.html";break;
                case "vivo s15":window.location.href = "s24.html";break;
                case "vivo x100s Pro":window.location.href = "s37.html";break;
                case "vivo x100s":window.location.href = "s38.html";break;
                case "vivo x100 Pro":window.location.href = "s39.html";break;
                case "vivo x100":window.location.href = "s40.html";break;
                case "vivo x-fold3":window.location.href = "s41.html";break;
                case "vivo x-fold2":window.location.href = "s42.html";break;
                case "vivo x-flip":window.location.href = "s43.html";break;
                case "vivo x90s":window.location.href = "s44.html";break;
                case "vivo x90Pro":window.location.href = "s45.html";break;
                case "vivo x90":window.location.href = "s46.html";break;
                case "vivo x80Pro":window.location.href = "s47.html";break;
                case "vivo x80":window.location.href = "s48.html";break;
                case "vivo y200T":window.location.href = "s25.html";break;
                case "vivo y200i":window.location.href = "s26.html";break;
                case "vivo y200GT":window.location.href = "s27.html";break;
                case "vivo y100i":window.location.href = "s28.html";break;
                case "vivo y100":window.location.href = "s29.html";break;
                case "vivo y78t":window.location.href = "s30.html";break;
                case "vivo y78m":window.location.href = "s31.html";break;
                case "vivo y78":window.location.href = "s32.html";break;
                case "vivo y36m":window.location.href = "s33.html";break;
                case "vivo y36i":window.location.href = "s34.html";break;
                case "vivo y36":window.location.href = "s35.html";break;
                case "vivo y12":window.location.href = "s36.html";break;
                default:
                    // 默认情况下不执行任何操作
                    break;
            }
        });
        resultsDiv.appendChild(div);
    });
});