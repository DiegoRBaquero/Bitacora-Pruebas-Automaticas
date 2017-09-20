# Reporte Pruebas Cruzadas 1

Este reporte contiene las pruebas cruzadas del grupo 9 (José Miguel Suarez y Camilo Escobar Velásquez). 

## Consideraciones
Teniendo en cuenta el presupuesto de ingenieros (1), de las [tres aplicaciones](https://gitlab.com/MISO4208/Bitacora/wikis/Selecci%C3%B3n-Aplicaciones) seleccionadas, se harán pruebas cruzadas sobre dos de esas: [Tell Form](https://www.tellform.com/) ([GitHub](https://github.com/tellform/tellform)) y [Mileage](https://f-droid.org/packages/com.evancharlton.mileage/) ([GitHub](https://github.com/evancharlton/android-mileage)).

## Instrucciones pruebas cruzadas
No se encontraron las instrucciones para pruebas cruzadas en [Repositorio](https://gitlab.com/MISO4208/) o [Wiki](https://gitlab.com/MISO4208/Bitacora/wikis/home)

## Pruebas cruzadas Tell Form
Para la instalación local de Tell Form era necesario tener Docker. Por lo que se instaló con Homebrew. Una vez instalado la aplicación, se corrió y quedó en la barra, esta instaló el CLI en la primera ejecución.

![Docker Tray](Imágenes/Docker_tray.jpg)

![Docker CLI](Imágenes/Docker_v.jpg)

Siguiendo las [intrucciones en la página de TellForm sobre la instalación con Docker](https://www.tellform.com/install_docker), se instaló MongoDB, Redis y Tell Form:

![Docker MongoDB](Imágenes/Docker_mongo.jpg)

![Docker Redis](Imágenes/Docker_redis.jpg)

![Docker Tell Form](Imágenes/Docker_tellform.jpg)
![Docker Tell Form](Imágenes/Docker_tellform2.jpg)

Screen inicial:
![Screen inicial](Imágenes/Screen_inicial.jpg)

Con un correo "xxxx@" se hace validación en el cliente:
![Email invalido 1](Imágenes/Email_invalido1.jpg)
Pero si se agrega un dominio sin extensión se realiza validación en backend:
![Email invalido 2](Imágenes/Email_invalido2.jpg)

**Es importante aclarar que se utilizó de usuario "test", el correo test@diegorbaquero.com y la contraseña "a", por lo que no puso problema**

El link de validación no tiene el puerto:
![Link validacion](Imágenes/Link_validacion.jpg)
Por lo que ocurre este error
![Error link](Imágenes/Error_link.jpg)
Al agregar el puerto:
![Arreglo link](Imágenes/Arreglo_link.jpg)

Al intentar hacer login con correo y contraseña ("a"):
![Missing credentials](Imágenes/Missing_credentials.jpg)

**Se creó otra cuenta con usuario diego, diego@diegorbaquero.com y contraseña "hola"**

Al intentar visualizar una encuesta se utiliza el dominio "diego.local", por lo que no funciona:
![Error_dominio](Imágenes/Error_dominio.jpg)
Sin embargo, se marca como si ya hubiera una respuesta:
![Responses](Imágenes/Responses.jpg)
![Responses](Imágenes/Responses2.jpg)

El link de compartir está mal en todas partes:
![Link_share](Imágenes/Link_share.jpg)
![Link_share2](Imágenes/Link_share2.jpg)

Se puede seleccionar ambas opciones en un un option button:
![Option_button](Imágenes/Option_button.jpg)

Hay varios errores que se ven desde consola:
![Error angular](Imágenes/Error_angular.jpg)
![Error conexión](Imágenes/Error_conx.jpg)

No guarda, no se muestra mensaje de error, se ve un 500 en Dev Tools con las rutas completas de los archivos:
![Error 500](Imágenes/Error_500.jpg)
![Error 500 2](Imágenes/Error_5002.jpg)

Permitió cambiar el usuario a esta cadena:
`diegorbaquerohola123queesestohahahahahaadsoifoasasdkfhasdfasdgsdfgsdfgasdfghgfdsasdfgfdsasdfghgfdsasdfgfdsasdfghgfdsasdfghgfdsasdfghgfdsasdfghgfdsasdfghjhgfdsasdfghgfdsadiegorbaquerohola123queesestohahahahahaadsoifoasasdkfhasdfasdgsdfgsdfgasdfghgfdsasdfgfdsasdfghgfdsasdfgfdsasdfghgfdsasdfghgfdsasdfghgfdsasdfghgfdsasdfghjhgfdsasdfghgfdsadiegorbaquerohola123queesestohahahahahaadsoifoasasdkfhasdfasdgsdfgsdfgasdfghgfdsasdfgfdsasdfghgfdsasdfgfdsasdfghgfdsasdfghgfdsasdfghgfdsasdfghgfdsasdfghjhgfdsasdfghgfdsa`
![Usuario largo](Imágenes/Usuario_largo.jpg)

Permitió poner una contraseña de 1 caracter:
![Contra 1](Imágenes/Contra.jpg)
![Contra 2](Imágenes/Contra2.jpg)
![Contra 3](Imágenes/Contra3.jpg)
Y luego no permita hacer login:
![Contra 4](Imágenes/Contra4.jpg)

Al hacer restore con un usuario no existe y luego uno sí existente, no se borra el anterior mensaje de error:
![Restore](Imágenes/Restore.jpg)

## Pruebas cruzadas Mileage


## Conclusiones/Discusión
- Tell Form tiene bastantes errores que podría mejorar. Está usando una versión vieja de angular (1.4). Permitir campos muy grandes da paso a un ataque donde se llene la base de datos. Si aceptan una contraseña tan corta (que no deberián), deberían aceptarla para hacer login; aunque realmente deberían pedir una longitud mínima. Los errores se muestran completos en la respuesta (Aunque puede ser porque es un ambiente dev)
