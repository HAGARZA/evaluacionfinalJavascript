//Declaramos variables
var borrar = false;
var resultado = document.getElementById('resultado');
var memoria = document.getElementById('memoria');

function init(){
//variables
  var on = document.getElementById('on');//resetear
  var sign = document.getElementById('sign');//Mas/menos(+/-)
  var raiz = document.getElementById('raiz');//raiz
  var dividido = document.getElementById('dividido');//Division(/)
  var por = document.getElementById('por');//Multiplicacion(X)
	var menos = document.getElementById('menos');//Resta(-)
	var punto = document.getElementById('punto');//punto(.)
	var igual = document.getElementById('igual');//Resultado(=)
	var mas = document.getElementById('mas');//Suma(+)
//Variables de Numeros
  var nueve = document.getElementById('nueve');
  var ocho = document.getElementById('ocho');
  var siete = document.getElementById('siete');
  var seis = document.getElementById('seis');
  var cinco = document.getElementById('cinco');
  var cuatro = document.getElementById('cuatro');
  var tres = document.getElementById('tres');
  var dos = document.getElementById('dos');
  var uno = document.getElementById('uno');
  var cero = document.getElementById('cero');

//Fuciones que se ocupan para cada uno de las variables o botones.
	mas.onclick = function(){arit('+');}
	mas.onmousedown = function(){reducirtamaño3(mas);}
 	mas.onmouseup = function(){tamañonormal3(mas);}

	igual.onclick = function(){calcular();}
	igual.onmousedown = function(){reducirtamaño2(igual);}
	igual.onmouseup = function(){tamañonormal2(igual);}

	punto.onclick = function(){validapunto();}
	punto.onmousedown = function(){reducirtamaño2(punto);}
	punto.onmouseup = function(){tamañonormal2(punto);}

	cero.onclick = function(){ escribir(0);}
	cero.onmousedown = function(){reducirtamaño2(cero);}
	cero.onmouseup = function(){tamañonormal2(cero);}

	uno.onclick = function(){ escribir(1);}
	uno.onmousedown = function(){reducirtamaño2(uno);}
	uno.onmouseup = function(){tamañonormal2(uno);}

	dos.onclick = function(){ escribir(2);}
	dos.onmousedown = function(){reducirtamaño2(dos);}
	dos.onmouseup = function(){tamañonormal2(dos);}

	tres.onclick = function(){ escribir(3);}
	tres.onmousedown = function(){reducirtamaño2(tres);}
	tres.onmouseup = function(){tamañonormal2(tres);}

	cuatro.onclick = function(){ escribir(4);}
	cuatro.onmousedown = function(){reducirtamaño(cuatro);}
	cuatro.onmouseup = function(){tamañonormal(cuatro);}

	cinco.onclick = function(){ escribir(5);}
	cinco.onmousedown = function(){reducirtamaño(cinco);}
	cinco.onmouseup = function(){tamañonormal(cinco);}

	seis.onclick = function(){ escribir(6);}
	seis.onmousedown = function(){reducirtamaño(seis);}
	seis.onmouseup = function(){tamañonormal(seis);}

	siete.onclick = function(){ escribir(7);}
	siete.onmousedown = function(){reducirtamaño(siete);}
	siete.onmouseup = function(){tamañonormal(siete);}

	ocho.onclick = function(){ escribir(8);}
	ocho.onmousedown = function(){reducirtamaño(ocho);}
	ocho.onmouseup = function(){tamañonormal(ocho);}

	nueve.onclick = function(){ escribir(9);}
	nueve.onmousedown = function(){reducirtamaño(nueve);}
	nueve.onmouseup = function(){tamañonormal(nueve);}

	on.onclick = function(){
  resultado.innerHTML = 0;
  memoria.innerHTML = 0;}
	on.onmousedown = function(){reducirtamaño(on);}
	on.onmouseup = function(){tamañonormal(on);}

	sign.onclick  = function(){agregasigno();}
	sign.onmousedown = function(){reducirtamaño(sign);}
	sign.onmouseup = function(){tamañonormal(sign);}

	raiz.onmousedown = function(){reducirtamaño(raiz);}
	raiz.onmouseup = function(){tamañonormal(raiz);}

	dividido.onclick = function(){arit('/');}
	dividido.onmousedown = function(){reducirtamaño(dividido);}
	dividido.onmouseup = function(){tamañonormal(dividido);}

	por.onclick = function(){arit('*');}
	por.onmousedown = function(){reducirtamaño(por);}
	por.onmouseup = function(){tamañonormal(por);}

	menos.onclick = function(){arit('-');}
	menos.onmousedown = function(){reducirtamaño(menos);}
	menos.onmouseup = function(){tamañonormal(menos);}
}
/*Este codigo es el que manda el numero al span*/
	function escribir(n){
	 var caja2 = resultado.textContent;
	 if (borrar) {
		 resultado.textContent="";
		 borrar = false;
		 resultado.textContent = n;
	 } else if (caja2 == "0" && n != "."){
		 cajao = caja2.replace("0", "")
		 resultado.textContent = cajao + n;
	 }
/*Validamos que no pase de los 8 caracteres*/
   else if (caja2.length <= 7){
		 resultado.textContent = caja2 + n;
	 }
	}

/*Valida que solo podramos anotar un punto*/
function validapunto(){

var  cadena = resultado.innerText;

  if(cadena.indexOf('.') == -1){
  escribir('.');
 }
}
/*Fucniones para los botones*/
  function reducirtamaño(elemento){
    elemento.style.width = "19.3%";
    elemento.style.height = "15.3%";
    elemento.style.margin = "3.9px";
 }
  function tamañonormal(elemento){
    elemento.style.width = "20.3%";
    elemento.style.height = "16.5%";
    elemento.style.margin = "2px";
  }

  function reducirtamaño2(elemento){
    elemento.style.width = "25%";
    elemento.style.height = "37%";
    elemento.style.margin = "3.9px";
 }
  function tamañonormal2(elemento){
    elemento.style.width = "27%";
    elemento.style.height = "40%";
    elemento.style.margin = "2px";
  }
  function reducirtamaño3(elemento){
    elemento.style.width = "90%";
    elemento.style.height = "90%";
 }
  function tamañonormal3(elemento){
    elemento.style.width = "100%";
    elemento.style.height = "100%";
  }

function arit(o){
  var caja1 = memoria.innerText;
  var caja2 = resultado.innerText;
  var unum = caja1.substring(caja1.length-1);
  //console.log("unum: " + unum);

  calcular();


  if (unum == "+" || unum == "-" || unum=="*" || unum=="/") {
    unum = unum.replace(unum,o);
    var res = caja1.substring(0,caja1.length-1);
    memoria.innerHTML = res+unum;
    //console.log("res + num: " + res + " " + unum);

    resultado.innerHTML = "";
  }
  if (caja1 == "" && caja2 != ""){
    memoria.innerHTML = caja2 + o;
    //console.log("caja2 + o: " + caja2 +" " + o);

  resultado.innerHTML = "";
  }
  else{
 memoria.innerHTML = caja1 + caja2 + o;
     //console.log("caja 1 + caja2 + o: " + caja1 + " " + caja2 + " " + o);
  }
  borrar = true;
}

/*Pioridad de cada operacion que se tiene que hacer*/
function prioridadOperacion(){
  console.log("Entra prioridad de operandos");
  var  caja_memoria = memoria.innerText;
var  caja_resultado = resultado.innerText;
console.log("memoria: " + caja_memoria);
console.log("display: " + caja_resultado);

var cadena = caja_memoria + caja_resultado;

 var validacadena = 0;

 if(cadena.indexOf('+') != -1){
    validacadena = 1;
 }else if(cadena.indexOf('-') != -1){
       validacadena = 1;
 }else if(cadena.indexOf('/') != -1){
       validacadena = 1;
 }else if(cadena.indexOf('*') != -1){
       validacadena = 1;
 }


if (validacadena == 1){
  resultado.innerHTML  = "(" + cadena + ")";
  memoria.innerHTML = "";

}

}


function agregasigno(){
  var  cadena = resultado.innerText;

    if(cadena.indexOf('-') == -1){
      //console.log('valor de cero: ' + cadena.indexOf('0'));

    /*Si el numero es diferente a cero nos permite*/
       if(cadena.indexOf('0') != 0){
         cadena = '-' + cadena;
           resultado.innerHTML  = cadena;

       }

   }else{
       /*SI el signo ya existe '-' lo quita*/
        cadena = cadena.replace("-", "");
        resultado.innerHTML  = cadena;
   }


}


function calcular(){
  var caja1 =  memoria.innerText;
  var caja2 =  resultado.innerText;


     //console.log("Calcula " +  "memorria: "  + caja1 + " " + "caja2: " + caja2);
  resultado.innerHTML = eval(caja1 + caja2);


/* Para mostrar solo 8 caracteres*/
 resultado.innerHTML =  resultado.innerText.substring(0,7);
memoria.innerHTML = "";

  borrar = true;
  blocdel = true;
}
