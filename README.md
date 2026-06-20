# Quarkus Quinoa Extension Example
This project uses Quarkus, the Supersonic Subatomic Java Framework.

## Quinoa
Configure root path in applicattion.properties
The page is configured to be accesible from root path.
Quinoa codestart added a tiny Vite app in src/main/webui.

## Running the application in dev mode
You can run your application in dev mode that enables live coding using:
```shell script
./mvnw compile quarkus:dev
```
Go to localhost:8080

## Packaging and running thin jar with lib direcroty.
```shell script
./mvnw package
```
It produces the `quarkus-run.jar` file in the `target/quarkus-app/` directory.
It’s not an _über-jar_ and dependencies are copied into the `target/quarkus-app/lib/` directory.
The application is now runnable using `java -jar target/quarkus-app/quarkus-run.jar`.

