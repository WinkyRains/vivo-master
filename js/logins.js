const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const usernameInput1 = document.getElementById('username');
const emailInput1 = document.getElementById('email');
const passwordInput1 = document.getElementById('password');
const passwordInput2 = document.getElementById('l-password');
const usernameInput2 = document.getElementById('l-username');

// 添加表单提交事件监听器
form1.addEventListener('submit', function(event) {
    // 阻止表单默认提交行为
    event.preventDefault();
    // 获取输入的值
    const username = usernameInput1.value;
    const email = emailInput1.value;
    const password = passwordInput1.value;
    if(username.length<4){
        document.getElementById('usernameError1').textContent = '用户名长度不能小于4！';
        document.getElementById('username').value = '';//清空提示
    }else{
        document.getElementById('usernameError1').textContent = '';
    }
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;//正则验证邮箱
    regex.test(email);
    if (!regex.test(email)) {
        document.getElementById('emailError1').textContent = '邮箱无效！';
        document.getElementById('email').value = '';
    }else{
        document.getElementById('emailError1').textContent = '';
    }
    if(password.length<8){
        document.getElementById('passwordError1').textContent = '密码长度不能小于8！！';
        document.getElementById('password').value = '';
    }
    else{
        document.getElementById('passwordError1').textContent = '';
    }
    if(username.length>=4&&password.length>=8&&regex.test(email)){
        document.getElementById('usernameError1').textContent = '';
        document.getElementById('emailError1').textContent = '';
        document.getElementById('passwordError1').textContent = '';
        alert("注册成功！");
    }
    // 打印到控制台
    // console.log('用户名:', username);
    // console.log('邮箱:', email);
    // console.log('密码:', password);

    // 或者使用alert显示
    // alert(`用户名: ${username}\n邮箱: ${email}\n密码: ${password}`);
});
form2.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = usernameInput1.value;
    const password = passwordInput1.value;
    const username2 = usernameInput2.value;
    const password2 = passwordInput2.value;
    if (!username && !password) {//判空
        document.getElementById('usernameError2').textContent = '用户名和密码不能为空！';
        return; // 阻止进一步执行，防止多个alert弹出中断页面提示
    }
    if(username2 !== username || password !== password2) {
        // 如果用户名或密码错误，显示错误信息
        document.getElementById('usernameError2').textContent = '用户名错误！';
        document.getElementById('passwordError2').textContent = '用户密码错误！';
        if(username === username2){
            document.getElementById('usernameError2').textContent = '';
        }
        if(password === password2){
            document.getElementById('usernameError2').textContent = '';
        }
    } else{
        // 如果登录成功，跳转到指定页面
        document.getElementById('usernameError2').textContent = '';
        document.getElementById('passwordError2').textContent = '';
        alert("登录成功！");
        window.location.href = 'all.html';
    }
});