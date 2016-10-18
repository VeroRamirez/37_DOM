function validateForm(){
	/* Escribe tú código aquí */
    
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var mail = document.getElementById("input-email").value;
    var password = document.getElementById("input-password").value; 
    var bici = document.getElementsByTagName("select")[0].value;
    
    if(!validaVacio(nombre,"Nombre"))
        return false;
    if(!validaMayuscula(nombre,"Tu nombre"))
        return false;
    
    if(!validaVacio(apellido,"Apellido"))
        return false;
    if(!validaMayuscula(apellido,"Apellido"))
        return false;
    
    if(!validaVacio(mail,"Email"))
        return false;
    if(!validaEmail(mail))
        return false;
    
    if(!validaVacio(password,"Password"))
        return false;
    if(!validaLongitud(password,6,"Password"))
        return false;
    
    if(!validaCombo(bici, "Tipo de Bicicleta"))
        return false;
    
    alert("VALIDACION EXITOSA");
    
    
}

function validaVacio(texto,nombre){
    if(texto==null || texto.trim().length==0){
        alert("** El campo " + nombre + " no puede estar vacio");
        return false;
    }
    return true;
}

function validaCombo(opcion, campo){
    if(opcion==0){
       alert("** Selecciona " + campo + " valido"); 
        return false;
    }
    return true;
}

function validaMayuscula(cadena,campo){
  var patron = /^[A-Z][a-zA-Z]*$/;
  // En caso de querer validar cadenas con espacios usar: /^[a-zA-Z\s]*$/
  if(cadena.search(patron)==-1){
      alert(campo + " debe iniciar con mayuscula y sin espacios");
      return false;
  }
    return true;
}

function validaLongitud(cadena,longitud,campo){
    if(cadena.length<longitud){
        alert(campo + " debe tener al menos " + longitud + " caracteres");
        return false;
    }else if(cadena=="password" || cadena=="123456" || cadena=="098754"){
        alert(campo + ' no debe ser  "password" o "123456" o "0987654" pon un password seguro');
    }
    return true;
}

function validaEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)){
        return true;
    }
    alert('El email no es valido');
    return false;
}
