; (function () {
    //获取元素
    let usernameInp = document.getElementById("username");
    let passwordInp = document.getElementById("password");
    let remenberInp = document.getElementById("remenber");
    let loginBtn1 = document.getElementById("loginBtn1");
    let loginBtn2 = document.getElementById("loginBtn2");
    let tooltip1 = document.getElementById("tooltip1");
    let tooltip2 = document.getElementById("tooltip2");
    let usernameTip = document.querySelector(".usernameTip");
    let passwordTip = document.querySelector(".passwordTip");

    //获取本地存储的信息
    let userinfo = JSON.parse(localStorage.getItem("userinfo"));
    if (userinfo) {
        let { username, password, isRemenber } = userinfo;
        usernameInp.value = username;
        passwordInp.value = password;
        remenberInp.checked = isRemenber;
    }

    //定义用户名和密码锁
    let username_lock = false;
    let password_lock = false;

    //用户名验证正则
    usernameInp.onblur = function () {
        //获取输入的内容值
        let val = this.value;
        //定义正则表达式
        let reg = /^[^\d]\w{6,12}$/;
        //正则验证
        if (reg.test(val)) {
            username_lock = true;
            this.style.borderColor = "green";
            tooltip1.innerHTML = "";
            usernameTip.innerHTML = "√";
            usernameTip.style.color = "green";
        } else {
            username_lock = false;
            this.style.borderColor = "red";
            tooltip1.innerHTML = "请输入7-13位字母、数字、下划线的字符，不以数字开头";
            tooltip1.style.color = "red";
            usernameTip.innerHTML = "x";
            usernameTip.style.color = "red";
        }
    }

    //密码验证正则
    passwordInp.onblur = function () {
        //获取密码框输入的内容
        let val = this.value;
        //定义正则表达式
        let reg = /^[^\d]\w{6,12}$/;
        //正则验证
        if (reg.test(val)) {
            password_lock = true;
            this.style.borderColor = "green";
            tooltip2.innerHTML = "";
            passwordTip.innerHTML = "√";
            passwordTip.style.color = "green";
        } else {
            password_lock = false;
            this.style.borderColor = "red";
            tooltip2.innerHTML = "请输入7-13位字母、数字、下划线的字符，不以数字开头";
            tooltip2.style.color = "red";
            passwordTip.innerHTML = "x";
            passwordTip.style.color = "red";
        }
    }

    //记住密码
    remenberInp.onchange = function () {
        //获取当前状态
        let isRemenber = this.checked;
        //如果为真 将用户名、密码、当前元素的状态填入本地存储
        let obj = {
            username: username.value,
            password: password.value,
            isRemenber
        }

        //判定
        if (isRemenber) {
            localStorage.setItem("userinfo", JSON.stringify(obj));
        } else {
            localStorage.removeItem("userinfo");
        }

    }

    //登录按钮事件
    loginBtn1.onclick = function () {
        //人工让事件触发
        usernameInp.onblur();
        passwordInp.onblur();

        //判断锁是否打开
        if (!(username_lock && password_lock)) {
            //说明至少有一个是没有打开的
            return;
        }

        //发送AJAX请求
        QF.post("../php/login.php", { username: usernameInp.value, password: passwordInp.value }, function (data) {
            console.log(data);
            if (!data.error) {
                location.href = "../index.html";
            } else {
                alert(data.data);
            }
        })

    }

    loginBtn2.onclick = function(){
        location.href = "./registry.html";
    }

})();