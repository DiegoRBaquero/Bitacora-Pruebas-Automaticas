# Reporte 1
```
Diego Rodríguez Baquero	201223538
MISO4208 - Pruebas automáticas
Septiembre 13 de 2017
```
## Introducción
En este primer reporte, se presentan las aplicaciones escogidas, la estrategia de pruebas y los resultados obtenidos. Con el fin de no repetir información, se vinculan otros documentos, por lo que este es un documento *interactivo*.

### Selección de las aplicaciones
Como parte del curso de Pruebas automáticas, es necesario seleccionar 3 aplicaciones sobre las cuales se aplicará el conocimiento arendido durante el curso con la finalidad de tener un acercamiento a las herramientas y poner en práctica los talleres realizados.

1. La primera aplicación, [Ghost](../Ghost), una aplicación web. Ghost es una plataforma de publicación, como blogs, sencilla y que utiliza nuevas tecnologías. Se escogió por el interés que se tiene en el ecosistema de Node.js y npm, además de la necesidad de una plataforma dinámica para hacer *blogging*.

2. La segunda aplicación, [Quill](../Quill), una aplicación nativa de android. Quill es un cliente de la plataforma Ghost que soporta blogs *self-hosted*, así como los blogs del servicio Ghost Pro.

3. La tercera aplicación, [WordPress](../WordPress), una aplicación nativa de iOS. WordPress es una plataforma, inicialmente pensada para blogs, que soporta todo tipo de páginas web y plugins. Esta aplicación es entonces un cliente de la plataforma, tanto para páginas *self-hosted*, como para páginas del servicio de [WordPress.com](https://wordpress.com).

## Estrategias de prueba
Para la planeación de las estrategias de prueba (EP), se tuvo en cuenta los siguientes recursos generales compartidos:
- 1 Ingeniero
- 8 horas a la semana
- 3 semanas
- Macbook Pro 13"
- iPhone 6
- Huawei Y330

En los siguientes *links* se pueden ver las estrategias de prueba:
- [EP1 Ghost](../Ghost/It1/EP1.md)
- [EP1 Quill](../Quill/It1/EP1.md)
- [EP1 WordPress](../WordPress/It1/EP1.md)

## Resultados
Los resultados documentan el proceso realizado que se planteó en la estrategia de pruebas para esta primera iteración.

En los siguientes *links* se pueden ver los resultados:
- [Resultados Ghost](../Ghost/It1/Resultados.md)
- [Resultados Quill](../Quill/It1/Resultados.md)
- [Resultados WordPress](../WordPress/It1/Resultados.md)

## Conclusiones/Discusión
- Ghost es una plataforma que está cambiando rápidamente y que es posible que introduza fallas en cualquier momento. La documentación para instalación desde la página principal no es la mejor. Sin embargo, en la documentación más detallada para desarrolladores, se cubren todos los pasos necesarios para hacer el *setup* tanto en un ambiento local, como en un de producción.
- Quill es una aplicación sencilla que funciona muy bien. Sus pruebas son del API, cuenta con un setup automático de la última versión de Ghost en su ejecución de pruebas de API, y aunque las pruebas no se actualizan hace 2 años, las pruebas iniciales realizadas cubren la funcionalidad del API bien. Por esta razón, se toma la decisión de cambiar la aplicación para la siguiente iteración.
- WordPress es una aplicación más compleja, con diversas funcionalidades. Tiene un equipo de trabajo rápido, con ciclos de desarrollo de aproximadamente 2 semanas. Cuenta con una gran cantidad de pruebas en código y conexión con los diferentes servicios de la plataforma, además de pruebas generales de interfaz.

## Backlog Iteración 2
- Seleccionar una nueva app para reemplazar Quill.
- Realizar pruebas de conectividad, desempeño y usabilidad, entre otros.
- Realizar pruebas de fuzz testing y rippers automáticas.
