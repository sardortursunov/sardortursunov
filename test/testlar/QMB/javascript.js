function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="admin"&& password=="1")
{
    
    alert("Kirish muvofaqqiyatli amalga oshirildi!");
    window.open("gost_fanlar.html");
    
    return false;
}
else
{
    let txt='';
let ism=prompt("Iltimos ismingizni kiriting!");
if(confirm("Salom "+ism+"! Sizda parol yo'qmi?")) {
        alert("Biz bilan bog'laning "+ism+"!");
}else{
    alert("Iltimos parolni qaytadan kiriting!")
}

}


}   