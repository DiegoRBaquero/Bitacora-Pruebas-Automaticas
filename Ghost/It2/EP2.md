# Estrategia de pruebas 2

Para la segunda iteración se cuenta con 15 horas en total. La idea de esta iteración es utilizar únicamente herramientas
automatizadas. De las quince horas, doce serán destinadas a la construcción y la ejecución de pruebas, y todos los pasos
previos necesarios como la actualización de componentes. Se cuenta además  con 3 horas para documentar las pruebas y los 
resultados obtenidos en las pruebas. Si hay tiempo, se realizarán pruebas de carga sencillas con Apache Benchmark.

### Presupuesto/recursos
- Una persona
- 15 horas
- Macbook Pro
- Cypress 0.20

### Objetivos
- Actualizar Ghost a la última versión
- Actualizar (si es necesario) y correr las pruebas automáticas de sistema e2e con Cypress para buscar fallas por cambios
- Crear pruebas ripper con Cypress
- Crear y correr pruebas con Gremlins.js para encontrar posibles fallas inesperadas
- Crear y correr una prueba sencilla de Calabash

### Nivel de pruebas
- Sistema
- Integración

### Tipos de pruebas
- end-to-end con Cypress, funcional y no funcional (timeouts, errores)
- ripper testing, no funcional con Cypress
- funcional con Calabash
- no funcional con Gremlins
- Carga con Apache Benchmark (no funcional, script automatizado para evaluación manual)
