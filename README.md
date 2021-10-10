# CmsFrontend

This is an example project to show how to use Angular as a frontend service to fetch data from backend service and show as contents. 
The backend service endpoint is set in environment.ts file (default to "http://localhost:8000")

Generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

<hr />

## Local development 
### Requirements
- Node.js version 14.0
- NPM

### Steps
1. Install packages listed in package.json using NPM.
```
$ npm install 
```
2. Run development server
Run Angular cli command for a dev server. 
```
$ ng serve
```
3. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

<hr />

## Local deployment (Containerizing)
### Requirements
- Docker version 20
- Docker Compose version 2.0.0

### Steps
1. Build Docker image 
```
$ docker-compose build cms-frontend
```
2. Deploy the image to Docker Container
 ```
$ docker-compose up
```
3. Navigate to `http://localhost:4200/` as the docker port exposed. 


