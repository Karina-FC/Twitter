var btn = document.getElementById('btn');
boton.addEventListener('click', function(){

	//tenemos que tomar el texto ingresado en el textarea
	var comments = document.getElementById('comment').value;
	//limpiar el textarea
	document.getElementById('comment').value = '';

	//contenedor que esta en el html
	var cont = document.getElementById('contador');

	//creamos el div que contiene cada comentario
	var newComments = document.createElement('div');
	var elementComment = document.createElement('p');

	//creamos los nodos de texto
	var nodoTextComment = document.createTextNode(comment);
	
	//aca hacemos el appendchild
	elementComment.appendChild(nodoTextComment);

	newComments.appendChild(elementComment);

	//le agregamos como atributo una clase llamada texto
	newComments.setAttribute('class', 'texto');

	contenedorTexto.appendChild(newComments);
	var counter = document.getElementById('contenedorTexto');
	counter.innerHTML = 0;
})

	var textArea = document.getElementById('comment');
	textArea.onkeydown = function(){
	//rescatamos el valor del textarea
	var comments = document.getElementById('comment').value;
	//sacamos la longitud de ese mensaje
	var long = comments.length;
	//vamos a rescatar
	var counter = document.getElementById('contador');
	counter.innerHTML =  long;

}
