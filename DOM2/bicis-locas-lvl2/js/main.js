function validateForm(){
	/* Escribe tú código aquí */
    
    remueveErrores();
    
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var mail = document.getElementById("input-email").value;
    var password = document.getElementById("input-password").value; 
    var bici = document.getElementsByTagName("select")[0].value;
    
    txtNombre=validaVacio(nombre,"Nombre");
    txtNombre2=validaMayuscula(nombre);
    
    
    if(txtNombre!="" || txtNombre2!=""){
        var validacion = document.createElement('span');
        validacion.setAttribute("class","error");
        validacion.appendChild(document.createTextNode(txtNombre + txtNombre2));
        document.getElementById("name").parentElement.appendChild(validacion);
        
    }
    
    txtApellido=texto=validaVacio(apellido,"Apellido");
    txtApellido2=texto=validaMayuscula(apellido);

    if(txtApellido!="" || txtApellido2!=""){
        var validacion2 = document.createElement('span');
        validacion2.setAttribute("class","error");
        msg=document.createTextNode(txtApellido + txtApellido2);
        validacion2.appendChild(msg);
        document.getElementById("lastname").parentElement.appendChild(validacion2);
    }
    
    txtEmail=validaVacio(mail,"Email");
    txtEmail2=validaEmail(mail);
    
    if(txtEmail!="" || txtEmail2!=""){
        var validacion3 = document.createElement('span');
        validacion3.setAttribute("class","error");
        validacion3.appendChild(document.createTextNode(txtEmail + txtEmail2));
        document.getElementById("input-email").parentElement.appendChild(validacion3);
    }
    
    txtPassword=validaVacio(password,"Password");
    txtPassword2=validaLongitud(password,6);
        
    if(txtPassword!="" || txtPassword2!=""){
        var validacion4 = document.createElement('span');
        validacion4.setAttribute("class","error");
        validacion4.appendChild(document.createTextNode(txtPassword + txtPassword2));
        document.getElementById("input-password").parentElement.appendChild(validacion4);
    }
    
    txtCombo =validaCombo(bici, "Tipo de Bicicleta");
    if(txtCombo!=""){
        var validacion5 = document.createElement('span');
        validacion5.setAttribute("class","error");
        validacion5.appendChild(document.createTextNode(txtCombo));
        document.getElementsByTagName("select")[0].parentElement.appendChild(validacion5);
    }
}

/*********FUNCIONES********/
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

function remueveErrores(){
    spans=document.getElementsByClassName("error")
    while(spans.length>0){
        spans[0].parentElement.removeChild(spans[0]);
    }
}