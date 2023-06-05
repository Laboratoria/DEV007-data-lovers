# Data Lovers

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Definición del producto](#2-definición-del-producto)* 
* [3. Consideraciones generales](#3-consideraciones-generales)
* 
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

***

## 1. Preámbulo

Según [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 millones de terabytes de datos, una cifra sin
precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en _**información**_ fácil de leer para
los usuarios, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

En la siguiente imagen, podemos ver cómo con la data que se ve en la parte izquierda se puede construir una interfaz amigable y entendible por los usuarios, al lado derecho.


![pokemon-data-to-ui](https://user-images.githubusercontent.com/12631491/218505816-c6d11758-9de4-428f-affb-2a56ea4d68c4.png)

## 2. Definición del producto

Para este proyecto se diseñó y elaboró una _interfaz web_ que permite visualizar un _conjunto de datos_ y, a su vez, manipularlos mediante la opción de filtrado, ordenar y encontrar un cálculo agregado.

La temática trabajada para el desarrollo de este proyecto corresponde a los largometrajes del estudio de animación japonesa *Studio Ghibli*, conocido por películas como _‘Mi vecino Totoro’_, _‘El viaje de Chihiro’_ o _‘El castillo ambulante’_, entre otros grandes éxitos. 

Para empezar, se implementó un [**formulario virtual**](https://docs.google.com/forms/d/1aHItlyliLKVVP9IAvzVMI7R6xIp7E5OhWLMtdA5LdYo/edit?ts=6451fa6e/ "formulario virtual") como herramienta de investigación, el cual fue diligenciado por doce personas con rango de edades entre los 21 y 52 años.

![image](https://github.com/LauriLugo/DEV007-data-lovers/assets/129604876/60fd5439-b47a-4b17-a61d-527a12b50ba6)
![image](https://github.com/LauriLugo/DEV007-data-lovers/assets/129604876/7136e9ae-f954-43dd-88b0-1dab9c4d7de1)
![image](https://github.com/LauriLugo/DEV007-data-lovers/assets/129604876/b7d84f0b-f8e2-43d6-87b9-34b3ea292e23)
![image](https://github.com/LauriLugo/DEV007-data-lovers/assets/129604876/a972e85d-f62d-421b-80e9-51599dd8ff59)
![image](https://github.com/LauriLugo/DEV007-data-lovers/assets/129604876/a0d383fe-cb85-4ecb-9897-a072209b67d3)


***

En base al conocimiento obtenido del usuario, se trabajaron las siguientes preguntas: 

* **¿Quiénes son los principales usuarios del producto?** // Personas de 20 a 55 años interesadas en el anime o animación japonesa.

* **¿Cuáles son los objetivos de estos usuarios en relación con el producto?** // Contar con un espacio en la web que reúna diferente información de interés de las animaciones y películas de Studio Ghibli.

*	**¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?** // Según los resultados de la investigación, la mayoría de los usuarios coinciden en desear conocer los nombres, la descripción y los personajes de todas las películas de Studio Ghibli.

*	**¿Cuándo utilizan o utilizarían el producto?** // Según los resultados de la investigación, los usuarios harían uso de la página web para revisar, decidir y elegir qué película ver, sea en solitario o en compañía de familiares o amigos; así mismo han comentado que la página web les sería útil para conocer la temática o sinopsis de cada película, para conocer las fechas de estreno y saber si es apta o no para ver en familia o con niños.

***

Como resultado del proceso de investigación se obtuvieron las siguientes **_Historias de Usuario_**:

### Historia de Usuario 1: El usuario desea ver los nombres de todas las películas de Studio Ghibli hasta el año 2019.

+ *Criterios de aceptación:*
  + El usuario debe poder visualizar imágenes de cada película, expuestas u organizadas como una tabla o grilla.
  +	El usuario debe poder ver el título de cada película al pasar el mouse sobre la imagen respectiva.
  +	El usuario desea que sea responsive (apto para pc y smartphone).
  +	El usuario debe poder hacer clic en cada imagen para poder acceder a la información de la película.
+ *Definición de terminado:*
  +	Hemos hecho pruebas de usabilidad con al menos 2 usuarios.
  +	Todo el código está subido a la rama principal del repositorio.
  +	Hemos publicado la historia en GitHub Pages

### Historia de usuario 2: El usuario desea acceder a la descripción de todas las películas.

+ *Criterios de aceptación:*
  +	Una vez el usuario haya hecho clic en la imagen de la película, podrá acceder a la información de la misma.
  +	El usuario debe poder encontrar el nombre de la película como título y el texto descriptivo a un lado de una imagen de referencia.
  +	El usuario debe poder navegar en esta sección a través de la rueda de desplazamiento del mouse (scroll wheel)
  +	El usuario desea que sea responsive (apto para pc y smartphone).
+ *Definición de terminado:*
  +	Hemos hecho pruebas de usabilidad con al menos 2 usuarios.
  +	Todo el código está subido a la rama principal del repositorio.
  +	Hemos publicado la historia en GitHub Pages

### Historia de usuario 3: El usuario desea identificar la fecha de lanzamiento de todas las películas.

+ *Criterios de aceptación:*
  +	El usuario debe poder encontrar la fecha de lanzamiento de cada película seguido de la descripción de la misma.
  +	El usuario desea que sea responsive (apto para pc y smartphone).
+ *Definición de terminado:*
  +	Hemos hecho pruebas de usabilidad con al menos 2 usuarios.
  +	Todo el código está subido a la rama principal del repositorio.
  +	Hemos publicado la historia en GitHub Pages

### Historia de usuario 4: El usuario desea visualizar los personajes principales de todas las películas.

+ *Criterios de aceptación:*
  +	Mediante el scrolling, el usuario debe poder encontrar los personajes principales de cada película organizados uno al lado del otro y con sus respectivos nombres en la parte inferior.
  +	El usuario debe poder encontrar un texto corto que describa al personaje principal.
  +	El usuario desea que sea responsive (apto para pc y smartphone).
+ *Definición de terminado:*
  +	Hemos hecho pruebas de usabilidad con al menos 2 usuarios.
  +	Todo el código está subido a la rama principal del repositorio.
  +	Hemos publicado la historia en GitHub Pages

### Historia de usuario 5: El usuario desea conocer los directores y productores de todas las películas.

+ *Criterios de aceptación:*
  +	Mediante el scrolling, el usuario debe poder encontrar los directores y productores de cada película organizados uno al lado del otro y con sus respectivos nombres en la parte inferior.
  +	El usuario desea que sea responsive (apto para pc y smartphone).
+ *Definición de terminado:*
  +	Hemos hecho pruebas de usabilidad con al menos 2 usuarios.
  +	Todo el código está subido a la rama principal del repositorio.
  +	Hemos publicado la historia en GitHub Pages

### Historia de usuario 6: El usuario desea encontrar datos curiosos de todas las películas.

+ *Criterios de aceptación:*
  +	Mediante el scrolling, el usuario debe poder encontrar datos curiosos de la película.
  +	El usuario desea que sea responsive (apto para pc y smartphone).
+ *Definición de terminado:*
  +	Hemos hecho pruebas de usabilidad con al menos 2 usuarios.
  +	Todo el código está subido a la rama principal del repositorio.
  +	Hemos publicado la historia en GitHub Pages

***

## Diseño de la Interfaz de Usuario

### _Prototipo de baja fidelidad_

Una vez definidas las _Historias de Usuario_, se elaboró el prototipo de baja fidelidad como primer paso en el diseño de la interfaz del usuario:

###### Página principal
![image](https://github.com/LauriLugo/DEV007-data-lovers/assets/129604876/d3dc42da-4e67-4670-af30-fd7098651422)

###### Páginas secundarias
![image](https://github.com/LauriLugo/DEV007-data-lovers/assets/129604876/4a0fdffd-78af-47c3-91d1-27c0f4db7283)

### _Prototipo de alta fidelidad_

Lo siguiente fue diseñar la _Interfaz de Usuario_ mediante la herramienta de diseño visual [Figma](https://www.figma.com/file/7TkIPPyn5aKSYjmHptOugb/PROTOTIPO%E2%9C%A8%7C-Data-Lovers?type=design&node-id=3-2&t=7CYnFQrzpcPmIedv-0/). Este diseño representa el ideal de la solución propuesta y sigue los fundamentos de visual design.

###### Página principal
![image](https://github.com/LauriLugo/DEV007-data-lovers/assets/129604876/5d307684-2443-4b64-85ff-a548e4b32733)

###### Páginas secundarias
![image](https://github.com/LauriLugo/DEV007-data-lovers/assets/129604876/f9151ac6-17b8-4c47-aff4-8477d2f024d6)


## 3. Consideraciones generales

Durante el desarrollo del proyecto se implementaron _tests_ de usabilidad con distintos usuarios, y _pruebas unitarias_ para las funciones encargadas de *procesar*, *filtrar* y *ordenar* la data, así como *calcular* estadísticas. Las _pruebas unitarias_ dan una cobertura de más del 70% de statements (_sentencias_), functions (_funciones_), lines (_líneas_), y branches (_ramas_) del archivo `<src/data.js>`.

La lógica del presente proyecto está implementada completamente en JavaScript (ES6), HTML y CSS. En ningún momento se usaron librerías o frameworks.

•	El archivo `src/index.html` muestra la interfaz inicial de la página web; también se trabajaron diferentes archivos _html_ para visualizar la data de todas las películas.

•	El archivo `src/main.js` contiene todo el código correspondiente a la interacción con el _DOM_: operaciones como creación de nodos, registro de manejadores de eventos (event listeners o event handlers), entre otros.

•	El archivo `src/data.js` contiene todas las funciones que corresponden a obtener, procesar y manipular datos, estas funciones son puras e independientes del _DOM_ y serán usadas después desde el archivo `src/main.js` al cargar la página y cada vez que el usuario interactúe (click, filtrado, ordenado, ...).

•	El archivo `src/data` contiene los datos de las diferentes fuentes, y dentro de cada carpeta dos archivos: uno con la extensión `.js` y otro con la extensión `.json`.

•	El archivo `test/data.spec.js` contiene las pruebas unitarias de las funciones implementadas en el archivo `data.js`.

Para el desarrollo de este proyecto se trabajó en JavaScript, incluyendo conceptos como _variables_, _condicionales_, _funciones_, _arreglos_, _objetos_, así como _eventos_ y manipulación del _DOM_, se trabajó con el uso de _ESLINT_, _HTML_, _CSS_ y con control de versiones _Git y GitHub_.


## 4. Conclusiones

* Se diseñó y construyó una interfaz web Se diseñó y construyó una interfaz web donde se puede visualizar la data trabajada por medio de tarjetas y páginas secundarias. 

* Se diseñó y construyó una interfaz web que permite al usuario interactuar para obtener la información que necesita a través de una barra de búsqueda y un listado que ordena y filtra. 

* Se diseñó y construyó una interfaz web responsive: puede visualizarse sin problemas desde distintos tamaños de pantallas: móviles, tablets y desktops.

* Se diseñó y construyó una interfaz web que responde a cada una de las necesidades de los usuarios, necesidades identificadas durante el proceso de investigación.

* Se diseñó y construyó una interfaz web centrada en el usuario siguiendo los principios básicos de diseño visual creando prototipos de alta fidelidad.


