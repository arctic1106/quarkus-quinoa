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


## If you want to build an _über-jar_, execute the following command:
```shell script
./mvnw package -Dquarkus.package.jar.type=uber-jar
```
The application, packaged as an _über-jar_, is now runnable using `java -jar target/*-runner.jar`.

## Creating a native executable
You can create a native executable using:
```shell script
./mvnw package -Dnative
```

## Or you can run the native executable build in a container using:
```shell script
./mvnw package -Dnative -Dquarkus.native.container-build=true
```
You can then execute your native executable with: `./target/code-with-quarkus-1.0.0-SNAPSHOT-runner`
