"use strict";!function(){var e,r,o=document.getElementById("username"),n=document.getElementById("password"),t=document.getElementById("remenber"),l=document.getElementById("loginBtn1"),s=document.getElementById("loginBtn2"),i=document.getElementById("tooltip1"),c=document.getElementById("tooltip2"),u=document.querySelector(".usernameTip"),a=document.querySelector(".passwordTip"),d=JSON.parse(localStorage.getItem("userinfo"));d&&(e=d.username,r=d.password,d=d.isRemenber,o.value=e,n.value=r,t.checked=d);var m=!1,g=!1;o.onblur=function(){var e=this.value;/^[^\d]\w{6,12}$/.test(e)?(m=!0,this.style.borderColor="green",i.innerHTML="",u.innerHTML="√",u.style.color="green"):(m=!1,this.style.borderColor="red",i.innerHTML="请输入7-13位字母、数字、下划线的字符，不以数字开头",i.style.color="red",u.innerHTML="x",u.style.color="red")},n.onblur=function(){var e=this.value;/^[^\d]\w{6,12}$/.test(e)?(g=!0,this.style.borderColor="green",c.innerHTML="",a.innerHTML="√",a.style.color="green"):(g=!1,this.style.borderColor="red",c.innerHTML="请输入7-13位字母、数字、下划线的字符，不以数字开头",c.style.color="red",a.innerHTML="x",a.style.color="red")},t.onchange=function(){var e=this.checked,r={username:username.value,password:password.value,isRemenber:e};e?localStorage.setItem("userinfo",JSON.stringify(r)):localStorage.removeItem("userinfo")},l.onclick=function(){o.onblur(),n.onblur(),m&&g&&QF.post("../php/login.php",{username:o.value,password:n.value},function(e){console.log(e),e.error?alert(e.data):location.href="../index.html"})},s.onclick=function(){location.href="./registry.html"}}();