
function login(){

    let user = document.getElementById('userName').value;
    let pass = document.getElementById('password1').value;
    console.log("user es :" + user );
    console.log("pass es :" + pass );

    if(user == "Mali" && pass == "123"){
        window.location = "/index2.html";
        return false;
    } else if(user == "Gera" && pass == "456") {
        window.location = "/index3.html";
        return false;
    } else if (user == "Maui" && pass == "789"){
        window.location = "/index4.html";
        return false;
    } else {
        alert("Datos de inicio de sesion incorrectos");
    } 
}





















    




