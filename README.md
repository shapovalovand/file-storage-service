# file-storage-service
For start project, please run the following commands

For installing dependencies

```npm i```

For running PostgreSQL via DockerCompose

```docker-compose up -d```

For running application

```npm start```

I didn't implement migration mechanism at that time, so every running app will be override the existing DB

For future implementation - adding config (`.env`)
All images will be store in the `data` directory and

A few cURLs

GET

```curl --location --request GET 'localhost:3000/example.png' --header 'Content-Type: text/plain' --data-binary '@'```

PUT

```curl --location --request PUT 'localhost:3000/example.png' --form 'file=@"/Users/andreyp/Desktop/example.png"'```
