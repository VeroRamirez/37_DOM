function validateForm(){
	/* Escribe tú código aquí */
    
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var mail = document.getElementById("input-email").value;
    var password = document.getElementById("input-password").value; 
    var bici = document.getElementsByTagName("select")[0].value;
    
    txtNombre=validaVacio(nombre,"Nombre");
    txtNombre2=validaMayuscula(nombre);
    
    
    if(txtNombre!="" || txtNombre2!=""){
        var validacion = document.createElement('span');
        validacion.appendChild(document.createTextNode(txtNombre + txtNombre2));
        document.getElementById("name").parentElement.appendChild(validacion);
    }
    
    txtApellido=texto=validaVacio(apellido,"Apellido");
    txtApellido2=texto=validaMayuscula(apellido);

    if(txtApellido!="" || txtApellido2!=""){
        var validacion = document.createElement('span');
        validacion.appendChild(document.createTextNode(txtApellido + txtApellido2));
        document.getElementById("lastname").parentElement.appendChild(validacion);
    }
    
    txtEmail=validaVacio(mail,"Email");
    txtEmail2=validaEmail(mail);
    
    if(txtEmail!="" || txtEmail2!=""){
        var validacion = document.createElement('span');
        validacion.appendChild(document.createTextNode(txtEmail + txtEmail2));
        document.getElementById("input-email").parentElement.appendChild(validacion);
    }
    
    txtPassword=validaVacio(password,"Password");
    txtPassword2=validaLongitud(password,6);
        
    if(txtPassword!="" || txtPassword2!=""){
        var validacion = document.createElement('span');
        validacion.appendChild(document.createTextNode(txtPassword + txtPassword2));
        document.getElementById("input-password").parentElement.appendChild(validacion);
    }
    
    txtCombo =validaCombo(bici, "Tipo de Bicicleta");
    if(txtCombo!=""){
        var validacion = document.createElement('span');
        validacion.appendChild(document.createTextNode(txtCombo));
        document.getElementsByTagName("select")[0].parentElement.appendChild(validacion);
    }
}

function validaVacio(texto,nombre){
    if(texto==null || texto.trim().length==0){
        return nombre + " no puede estar vacio ";
    }
    return "";
}

function validaCombo(opcion, campo){
    if(opcion==0){
       return"Selecciona " + campo + " valido"; 
    }
    return "";
}

function validaMayuscula(cadena){
  var patron = /^[A-Z][a-zA-Z]*$/;
  // En caso de querer validar cadenas con espacios usar: /^[a-zA-Z\s]*$/
  if(cadena.search(patron)==-1){
      return "debe iniciar con mayuscula";
  }
    return "";
}

function validaLongitud(cadena,longitud){
    resp="";
    if(cadena.length<longitud){
        resp= "debe tener al menos " + longitud + " caracteres ";
    }
    if(cadena=="password" || cadena=="123456" || cadena=="098754"){
        resp+= ' no debe ser  "password" o "123456" o "0987654" pon un password seguro';
    }
    return resp;
}

function validaEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)){
        return "";
    }
    return ' formato no valido';
}
