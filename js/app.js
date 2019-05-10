/********Definimos variables globales*******/

header = document.querySelector('.bg-header');
/******** Evento que se ejecuta cuando la pagina ya alla cargado*******/
window.addEventListener("load", function () {

	// Validamos que el elemento exista primero en el DOM
	if (header) {
		window.onscroll = function(){
			// Obtenemos la posicion del scroll en pantall
			var scroll = document.documentElement.scrollTop || document.body.scrollTop;
			// Realizamos alguna accion cuando el scroll este entre la posicion 300 y 400
			if(scroll > 300){
				header.classList.add('header-scroll');
			} else{
				header.classList.remove('header-scroll');
			}
		} // fin onscroll
	} //fin if
	

}); // Cierre del evento load

/************ Mis funciones *************/

