function calculoIMC() {
	//alert("Hola Mundo");

	//document.getElementById('error_form').innerHTML="Este es un Error!!";
	document.getElementById('error_form').innerHTML="";

	var altura=document.getElementById("altura").value;
	altura = altura.toString().replace('.','');
	altura = altura.toString().replace(',','');
	altura = altura/100;
	var peso=document.getElementById("peso").value;

	if (peso == "") {
		document.getElementById('error_form').innerHTML="Ingrese Peso";
	}else if(altura == ""){
		document.getElementById('error_form').innerHTML="Ingrese Altura";
	}else if (peso<0) {
		document.getElementById('error_form').innerHTML="Peso no puede ser negativo";
	}else if (altura<0) {
		document.getElementById('error_form').innerHTML="Altura no puede ser negativo";
	}else{
		var alturacuadrado = altura*altura;
		var imc = peso/alturacuadrado;

		document.getElementById("imc").value=Math.round(imc*100)/100;

		if (imc<16) {
			document.getElementById("estado").value="Infrapeso: Delgadez Severa";

		}else if (imc>16 && imc<16.99) {
			document.getElementById("estado").value="Infrapeso: Delgadez moderada";
		}else if (imc>17 && imc<18.49) {
			document.getElementById("estado").value="Infrapeso: Delgadez aceptable";
		}else if (imc>18.50 && imc<24.99) {
			document.getElementById("estado").value="Peso Normal";
		}else if (imc>25 && imc<29.99) {
			document.getElementById("estado").value="Sobrepeso";
		}else if (imc>30 && imc<34.99) {
			document.getElementById("estado").value="Obeso: Tipo I";
		}else if (imc>35 && imc<40.00) {
			document.getElementById("estado").value="Obeso: Tipo II";
		}else{
			document.getElementById("estado").value="Obeso: Tipo III";
		}
	}

}

function limpiar(){
	document.getElementById('error_form').innerHTML="";
	document.getElementById("estado").value="";
	document.getElementById("imc").value="";
	document.getElementById("peso").value="";
	document.getElementById("altura").value="";
}

function soloNumeros(e){
	var key = window.Event ? e.which : e.keyCode
	return (key >= 48 && key <= 57 || key == 44|| key == 46)
}