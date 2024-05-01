

function Submit(){
    let email = document.getElementById("email").value;
    let password = +document.getElementById("password").value;
    if (email === "sardormaxmudov2303@gmail.com") {
        if(password === 123){
            alert("SUCCESS")
        }else{
            alert("password xato")
        }
    } else {
        alert("Email yoki Password xato. Iltimos, ma'lumotlarni tekshirib qayta kiriting.");
    }
} 


