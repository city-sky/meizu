"use strict";!function(){var o=document.getElementById("username"),n=document.getElementById("password"),t=document.getElementById("password1"),e=document.getElementById("loginBtn"),r=document.getElementById("tooltip1"),l=document.getElementById("tooltip2"),s=document.getElementById("tooltip3"),d=document.querySelector(".usernameTip"),i=document.querySelector(".passwordTip"),c=document.querySelector(".passwordTip1"),u=!1,y=!1;o.onblur=function(){var e=o.value;if(!/^[^\d]\w{6,12}$/.test(e))return u=!1,this.style.borderColor="red",r.style.color="red",r.innerHTML="请输入7-13位字母、数字、下划线的字符，不以数字开头",d.innerHTML="x",void(d.style.color="red");QF.get("../php/checkusername.php",{username:e},function(e){console.log(e),e.error?(u=!1,o.style.borderColor="red",r.style.color="red",r.innerHTML=e.data,d.innerHTML="x",d.style.color="red"):(u=!0,o.style.borderColor="green",r.innerHTML=e.data,r.style.color="green",d.innerHTML="√",d.style.color="green")})},n.onfocus=function(){t.value="",t.style.borderColor="",s.style.color="",s.innerHTML=""},n.onblur=function(){var e=this.value;/^[^\d]\w{6,12}$/.test(e)?(y=!0,this.style.borderColor="green",l.innerHTML="",i.innerHTML="√",i.style.color="green"):(y=!1,this.style.borderColor="red",l.style.color="red",l.innerHTML="请输入7-13位字母、数字、下划线的字符，不以数字开头",i.innerHTML="x",i.style.color="red")},t.onblur=function(){var e=n.value,r=t.value;if(!/^[^\d]\w{6,12}$/.test(r))return y=!1,t.style.borderColor="red",s.style.color="red",s.innerHTML="请输入7-13位字母、数字、下划线的字符，不以数字开头",c.innerHTML="x",void(c.style.color="red");s.innerHTML=e===r?"":"请输入7-13位字母、数字、下划线的字符，不以数字开头",t.style.borderColor=e===r?"green":"red",y=e===r,c.innerHTML=e===r?"√":"x",c.style.color=e===r?"green":"red"},e.onclick=function(){var e,r;u&&y?(e=o.value,r=n.value,QF.post("../php/registry.php",{username:e,password:r},function(e){console.log(e),e.error?alert(e.msg):(alert(e.msg),setTimeout(function(){location.href="./login.html"},500))})):alert("请重新检查")}}();