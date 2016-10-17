function validateForm(){
	/* Escribe tú código aquí */
    
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var mail = document.getElementById("input-email").value;
    var password = document.getElementById("input-password").value; 
    var bici = document.getElementsByTagName("select")[0].value;
    
    validaVacio(nombre,"Nombre");
    validaMayuscula(nombre,"Tu nombre")
    
    validaVacio(apellido,"Apellido");
    validaVacio(mail,"Mail");
    validaVacio(password,"Password");
    validaCombo(bici, "Tipo de Bicicleta"); 
    
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
    alert(cadena.search(patron));
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
    }
    return true;
}
