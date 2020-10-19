;(function(){
    //获取元素
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let password1 = document.getElementById("password1");
    let loginBtn = document.getElementById("loginBtn");
    let tooltip1 = document.getElementById("tooltip1");
    let tooltip2 = document.getElementById("tooltip2");
    let tooltip3 = document.getElementById("tooltip3");
    let usernameTip = document.querySelector(".usernameTip");
    let passwordTip = document.querySelector(".passwordTip");
    let passwordTip1 = document.querySelector(".passwordTip1");

    //设置两把锁 定义用户名和密码锁
    let username_lock = false;
    let password_lock = false;

    //用户名验证
    username.onblur = function() {
        //获取输入的内容值
        let value = username.value;
        //定义正则表达式
        let reg = /^[^\d]\w{6,12}$/;
        //正则验证
        if (!reg.test(value)) {
            username_lock = false;
            this.style.borderColor = "red";
            tooltip1.style.color = "red";
            tooltip1.innerHTML = "请输入7-13位字母、数字、下划线的字符，不以数字开头";
            usernameTip.innerHTML = "x";
            usernameTip.style.color = "red";
            return;
        } 

        //发送ajax请求去验证用户名是否存在
        QF.get("../php/checkusername.php", {username: value}, function(data){
            console.log(data);
            if (!data.error) {
                username_lock = true;
                username.style.borderColor = "green";
                tooltip1.innerHTML = data.data;
                tooltip1.style.color = "green";
                usernameTip.innerHTML = "√";
                usernameTip.style.color = "green";
            } else {
                username_lock = false;
                username.style.borderColor = "red";
                tooltip1.style.color = "red";
                tooltip1.innerHTML = data.data;
                usernameTip.innerHTML = "x";
                usernameTip.style.color = "red";
            }
        })
    }

    //密码框获取焦点时发生的事件
    password.onfocus = function(){
        password1.value = "";
        password1.style.borderColor = "";
        tooltip3.style.color = "";
        tooltip3.innerHTML = "";
    }

    //验证密码
    password.onblur = function(){
        let val = this.value;
        let reg = /^[^\d]\w{6,12}$/;
        if (!reg.test(val)) {
            password_lock = false;
            this.style.borderColor = "red";
            tooltip2.style.color = "red";
            tooltip2.innerHTML = "请输入7-13位字母、数字、下划线的字符，不以数字开头";
            passwordTip.innerHTML = "x";
            passwordTip.style.color = "red";
        } else {
            password_lock = true;
            this.style.borderColor = "green";
            tooltip2.innerHTML = "";
            passwordTip.innerHTML = "√";
            passwordTip.style.color = "green";
        }
    }

    //确认密码第二次绑定事件
    password1.onblur = function(){
        let val = password.value;
        let val1 = password1.value;
        let reg = /^[^\d]\w{6,12}$/;

        if (!reg.test(val1)) {
            password_lock = false;
            password1.style.borderColor = "red";
            tooltip3.style.color = "red";
            tooltip3.innerHTML = "请输入7-13位字母、数字、下划线的字符，不以数字开头";
            passwordTip1.innerHTML = "x";
            passwordTip1.style.color = "red";
            return;
        }
        
        tooltip3.innerHTML = val === val1 ? "" : "请输入7-13位字母、数字、下划线的字符，不以数字开头";
        password1.style.borderColor = val === val1 ? "green" : "red";
        password_lock = val === val1;
        passwordTip1.innerHTML = val === val1 ? "√" : "x";
        passwordTip1.style.color = val === val1 ? "green" : "red";
    }

    //注册按钮事件
    loginBtn.onclick = function() {
        if (!(username_lock && password_lock)) {
            alert("请重新检查");
            return;
        }

        //获取 用户名和密码
        let user = username.value;
        let pass = password.value;

        //发送ajax请求 
        QF.post("../php/registry.php", { username: user, password: pass }, function(data){
            console.log(data);
            if (!data.error) {
                alert(data.msg);
                setTimeout(function(){
                    location.href = "./login.html";
                }, 500)
            } else {
                alert(data.msg);
            }
        })
    }

})();