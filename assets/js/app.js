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
		return document.getElementById('tweet')
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
//Función que contará cada caracter en la longitud de la oración y le descontará 140 para ir obteniendo el valor del contador. 
tweetTextarea.onkeydown = function () {	
	counterMax.innerHTML = 140 - this.value.length;		
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
