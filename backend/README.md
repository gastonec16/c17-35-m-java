# Get Started #
----
### Dependencias ###
 - Mysql 
   - [video tutorial](https://www.youtube.com/watch?v=_K2nOYwOq1E) 
 - Java version 17 o superior 
   - [link descarga java](https://www.oracle.com/ar/java/technologies/downloads/#jdk22-windows)  
 - Apache Maven (proyect management) version 3.8 o 3.9 
   - [link de descarga](https://maven.apache.org/download.cgi) 
   - [video tutorial](https://www.youtube.com/watch?v=rl5-yyrmp-0)

### Levantar el proyecto ###
Una vez configuradas todas las dependencias tenemos que crear una base de datos con el nombre `patrickscoin` o el que pararezca en el archivo `application.properties` ubicado en `backend\src\main\resources\application.properties`.

Una vez que tenemos la base de datos corriendo ejecutamos el siguiente comando en la siguiente ruta.

``` java
cd c17-35-m-java/backend
# mvn spring-boot:run
```

O ejecutamos en el directorio de carpetas de vscode con click derecho `run java` en el `Application.java`.
![run spring](backend\src\main\resources\readme\run-spring.webp "run spring")       

Outpu por consola esperado, por defecto se levantara en el puerto `8080`.
``` java
...
2024-04-08T20:37:34.209-03:00  INFO 13096 --- [PatricksCoins] [  restartedMain] o.s.b.d.a.OptionalLiveReloadServer       : LiveReload server is running on port 35729
2024-04-08T20:37:34.233-03:00  INFO 13096 --- [PatricksCoins] [  restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port 8080 (http) with context path ''
2024-04-08T20:37:34.240-03:00  INFO 13096 --- [PatricksCoins] [  restartedMain] com.NoCountry.Patrickscoin.Application   : Started Application in 1.336 seconds (process running for 151.701)
2024-04-08T20:37:34.243-03:00  INFO 13096 --- [PatricksCoins] [  restartedMain] .ConditionEvaluationDeltaLoggingListener : Condition evaluation unchanged
```
