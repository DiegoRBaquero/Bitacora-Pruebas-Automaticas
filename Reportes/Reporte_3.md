# Reporte 1
```
Diego Rodríguez Baquero	201223538
MISO4208 - Pruebas automáticas
Octubre 18 de 2017
```
## Introducción
En este segundo reporte, se presentan los cambios, la estrategia de pruebas y los resultados obtenidos. Con el fin de no repetir información, se vinculan otros documentos, por lo que este es un documento *interactivo*.

## Cambios vs reporte 2
- Por limitaciones de tiempo, se decidió no continuar WordPress, ya que la aplicación está muy bien probada utilizando varias metodologías, en cambio el trabajo se va a enfocar en Ghost, que es un producto joven y altamente cambiante.

## Estrategias de prueba
Para la planeación de las estrategias de prueba (EP), se tuvo en cuenta los siguientes recursos generales compartidos:
- 1 Ingeniero
- 15 horas en total
- 3~ semanas
- Macbook Pro 13"
- Cypress
- Cucumber-WebdriverIO
- Apache Benchmark
- Ghost 1.17

En los siguientes *links* se pueden ver las estrategias de prueba:
- [EP3 Ghost](../Ghost/It3/EP3.md)

## Resultados
Los resultados documentan el proceso realizado que se planteó en la estrategia de pruebas para esta segunda iteración.

En los siguientes *links* se pueden ver los resultados:
- [Resultados Ghost](../Ghost/It3/Resultados.md)

## Conclusiones/Discusión
- Ghost sigue cambiando rápidamente. Mejoraron el número de conexiones concurrentes posibles, pero dañaron un poco el desempeño. Las pruebas muestran que sigue funcionando bien.
- Las pruebas de usabilidad fueron buenas en general, Ghost es una plataforma sencilla, limpia y simple de usar.
