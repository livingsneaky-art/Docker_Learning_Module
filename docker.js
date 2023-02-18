//DOCKER
//Course Overview
//What is Docker? What is a Container?
/*
    What is Docker?
    - What is a Container and what problems does it solve
    - Container Repository
    - DEVELOP application
    - DEPLOY application

    What is a Container? 
    - A way to package application with all the necessary dependencies and configuration
    - Portable artifact, easily shared and moved around
    - Makes development and deployment more efficient

    - Layers of images
    - Mostly Linux Base Image, because small in size
    - Application image on top

    Where do containers live?
    - Container Repository
        - Postgres
        - Redis
        - Nodejs
        - Nginx
    - Private repositories
    - Public repository for Docker
        - DockerHub
            - nginx
            - mongoDB
            - alpine
            - nodejs
            - redis
            - jenkins

    How containers improved..
        - Application Development

            Before containers
                - Installation process different on each OS environment
                - Many steps where something could go wrong

                - configuration on the server needed
                - dependency version conflicts
                - misunderstandings
                - textual guide of deployment
            After containers
                - own isloated enviroment
                - packaged with all needed configuration
                - one command to install the app
                - run same app with 2 different versions

                - Developers and Operations work together to package the application in a container
                - No environmental configuration needed on server - except Docker Runtime

*/
//Docker vs. Virtual Machine
//Docker Installation
//Main Commands
//Debugging a Container

//Volumes - Persisting Data

//How to use docker in practice
//Demo Project

//Developing with Containers
//Docker Compose - Running multiple services
//Dockerfile - Building own Docker image
//Dockerfile - Building own Docker image
//Deploying the containerized App

//Volumes Demo

