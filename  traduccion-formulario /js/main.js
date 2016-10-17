document.getElementById("form-signin-heading").innerHTML="Por favor inicia sesión";
document.getElementById("inputEmail").setAttribute('placeholder','Correo Electronico');
document.getElementById("inputPassword").setAttribute('placeholder','Contrasena');
document.querySelector('span').innerHTML="Recordar datos"
console.log(document.querySelector('span').innerHTML);
document.getElementsByTagName('button')[0].innerHTML="Iniciar Sesion";