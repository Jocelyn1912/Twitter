//Evento del botón twittear
function add() {
	//Tomando el texto ingresado en el texarea
	var tweets = document.getElementById('tweet').value;
	//Limpiando el textarea
	document.getElementById('tweet').value = '';
	//Llamando contenedor html
	var container = document.getElementById('container');
	//Creando el div que contiene el texto
	var comments = document.createElement('div');
	//Asignando el texto del textarea al nuevo div
	var textNewComents = document.createTextNode(tweets);

	//Si el contenedor está vacío deshabilitar el botón de tweet
	if(tweets.length == 0 || tweets == null) {
		return document.getElementById('tweet');
		//document.getElementById('boton').disabled = true;		
	}

	//Agregando elementos al DOM
	var containerElement = document.createElement('p');
	containerElement.appendChild(textNewComents);
	comments.appendChild(containerElement);
	container.appendChild(comments);
}

//Contador de caracteres
var tweetTextarea = document.getElementById('tweet');
var counterMax = document.getElementById('tweetCounter');

/*
Función que contará cada caracter en la longitud de la oración
y le descontará 140 para ir obteniendo el valor del contador. 
*/
tweetTextarea.onkeydown = function () {	
	var currentCounter = counterMax.innerHTML = 140 - this.value.length;
	//Si el contador es menor a 0 desactivar el botón de twittear
	if (currentCounter < 0){
		document.getElementById('boton').disabled = true;

	//Si el contador es menor a 21 y mayor a 10 debe ponerse rojo
	} if (currentCounter < 21 && currentCounter > 10) {
		counterMax.classList.add('red');
	//Si el contador es menor a 11 y mayor a 0 debe ponerse amarillo
	} if (currentCounter < 11 && currentCounter > 0 ) {
		counterMax.classList.add('yellow');
	//Si el contador es menor a 0 se deben remover los colores
	} if (currentCounter < 0 ){
		counterMax.classList.remove('yellow');
		counterMax.classList.remove('red');
	}
};

/*
function checkLength(textField) {
	var strText = textField.value;
	if(strText.length > 10) {
		textField.style.backgroundColor = "#ff0000";
 	} else {
 		textField.style.backgroundColor = "#ffffff";
 	}
}
*/

/*
Función que hace crecer al textarea de acuerdo 
al contenido y así no se crea el scroll
*/
var textarea = document.getElementById('tweet');

textarea.oninput = function() {
  textarea.style.height = '';
  textarea.style.height = Math.min(textarea.scrollHeight, 200) + "px";
};