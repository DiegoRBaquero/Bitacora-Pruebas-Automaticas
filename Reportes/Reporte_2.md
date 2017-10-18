# Reporte 1
```
Diego Rodríguez Baquero	201223538
MISO4208 - Pruebas automáticas
Octubre 18 de 2017
```
## Introducción
En este segundo reporte, se presentan los cambios, la estrategia de pruebas y los resultados obtenidos. Con el fin de no repetir información, se vinculan otros documentos, por lo que este es un documento *interactivo*.

## Cambios vs reporte 1
- Se descartó Quill y WordPress iOS, se agregó WordPress Android por facilidad de pruebas
- No hay pruebas manuales, a todo lo manual se le generó un script

## Estrategias de prueba
Para la planeación de las estrategias de prueba (EP), se tuvo en cuenta los siguientes recursos generales compartidos:
- 1 Ingeniero
- 8 horas a la semana
- 4~ semanas
- Macbook Pro 13"
- Cypress
- WebdriverIO
- Calabash
- Apache Benchmark
- Android SDK, AVD, etc

En los siguientes *links* se pueden ver las estrategias de prueba:
- [EP2 Ghost](../Ghost/It2/EP2.md)
- [EP2 WordPress Android](../WordPress-Android/It2/EP2.md)

## Resultados
Los resultados documentan el proceso realizado que se planteó en la estrategia de pruebas para esta segunda iteración.

En los siguientes *links* se pueden ver los resultados:
- [Resultados Ghost](../Ghost/It2/Resultados.md)
- [Resultados WordPress Android](../WordPress-Android/It2/Resultados.md)

## Conclusiones/Discusión
- Ghost sigue cambiando rápidamente y tiene fallas no reproducibles aleatoriamente. Sin embargo arreglan y agregan nuevas cosas sin mayores fallas. La comunidad está creciendo rápidamente, con la esperanza de más soporte, más clientes pagos y mejoras/arreglos más frecuentes.
- WordPress, tanto en iOS como en Android, cuenta con una gran cantidad de pruebas en código y conexión con los diferentes servicios de la plataforma, además de pruebas generales de interfaz, lo que mantiene una excelente aplicación con variedad de funcionalidades sin tantos *patches*

## Backlog Iteración 3
- Agregar más casos de uso automatizados a las pruebas existentes
- Crear nuevas pruebas según lo visto en la clase
