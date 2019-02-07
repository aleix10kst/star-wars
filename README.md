## - AngularJS User Registration and Login Example

### Instalación
 * <pre><code> npm install </code></pre>
 * <pre><code> npm install webpack -g </code></pre>
 * <pre><code> npm install webpack-dev-server -g </code></pre>
* Para ejecutar:
 * <pre><code> webpack-dev-server </code></pre>

##Instrucciones:


A continuación detallamos las tareas a realizar.

###Antes de empezar:
- Por cada uno de los puntos y subpuntos que se detallan, crea un commit con los cambios realizados.
- En el comentario del commit especifica los cambios que has realizado así como explicaciones o aportaciones que consideres importante comentar. Valoraremos especialmente que los commits estén bien documentados

### Tareas
* 0. Crea un repositorio nuevo en tu cuenta de github.
    * Copia todo el contenido del proyecto que te hemos facilitado.
* 1. Crea una página pública que se acceda mediante: localhost:8080/#!/ships o similar.
    * 1.1 - El controlador de esta página debe realizar una petición a un servicio.
    * 1.2 - El servicio realizará la petición a http://swapi.co/api/starships/. --> Ojo con esto que puede dar problemas de autorización. Comprobar la header authorization para ese path. Hay que poner 'none'
    * 1.3 - Muestra el resultado por consola.
    * 1.4 - Utiliza Promesas para gestionar el resultado.
    * 1.5 Añade esta página al menú

* 2. Crea un componente que se llame de la siguiente forma: `<starship-list> </starship-list>` será una lista de elementos.
    * 2.1 - Este componente recibirá datos del controlador padre ( la página ships).
    * 2.2 - El componente mostrará por pantalla el campo name de cada uno de los elementos.
    * 2.3 - El componente tendrá un campo "más datos". Al pulsarlo, añadirá  la siguiente página a la lista. La gestión de añadir los resultados a la lista se realizará en el padre. 
    * 2.4 - Intenta mejorar el rendimiento  del servicio de starships y justifica las mejoras. 


* 3.  Por cada una de las naves, 
    * 3.1 Crea un  componente que renderice una ficha de la nave y añadelo dentro del componente starship-list. Este componente se llamará starship.
    * 3.2 Utiliza el grid de bootstrap para montar una parrilla de 4 naves por fila en desktop y 2 en mobile.
    * 3.3 Muestra el listado con: 
    * 3.3.1 El nombre de la nave.
    * 3.3.1 Una imágen de la nave. Para conseguir la imágen utiliza esta url:  https://starwars-visualguide.com/assets/img/starships/{ID_NAVE}.jpg
    * 3.4. Implementa mejoras de rendimiento si lo consideras necesario y justifica las mejoras. 
    
    

