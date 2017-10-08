# Resultados EP1 - WordPress

### Bitácora
1. Se crearon los dos emuladores, uno de celular y otro tablet. Se creó un script para esto.
1. Se descargó e instaló la aplicación, en versión 8.2, en ambos emuladores. Se creó un script para esto
1. Se configuró gmail (necesario para iniciar sesión en WordPress) y 
1. Se inició sesión en WordPress para acceder a todas las funcionalidades
1. Se corrieron pruebas pequeñas de mil eventos para configurar el script.
1. Se corrieron las pruebas de los monkeys 10 veces. El script creado corre los monkeys de forma paralela.
1. Se documentó resultados de monkeys.

### Monkeys
Con el script [correr_monkeys.sh](scripts/correr_monkeys.sh) que corre monkeys con un seed y varias opciones, se corren
monkeys con 100 mil eventos en ambos emuladores (celular y tablet). Se corrió el script 10 veces. La ejecución en el 
celular tuvo un crash de sistema una vez. La ejecución en la tablet no tuvo ninguno problema en ninguna ejecución. La
ejecución de los monkeys se demoraba en promedio 19-20 minutos. En la carpeta logs está la última ejecución de la tablet
y la ejecución con crash del celular.

### Fallas/defectos encontrados
- Hubo un crash al correr el monkey en el celular, pero no fue de la aplicación, fue de android. [log](logs/cel_error.txt)
