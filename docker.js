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


            Docker Image
                - The actual package
                - artifact, that can be moved around

            Docker Container
                - actually start the application
                - container environment is created

*/
//Docker vs. Virtual Machine
/*
    - Size: Difference between them is Docker image much smaller
    - Speed: Docker containers start and run much fast
    - Compatibility: VM of any OS can run on any OS host


    - Docker on OS level
    - Different levels of abstraction
    - Why linus-based docker containers don't run on Windows
*/
//Docker Installation
/*
    - Before installing Docker
        -pre-requisites 
            Docker Toolbox for older Mac and Windows
    - Install Docker on Mac
    - Install Docker on Windows
    - Install Docker on Linux

    Docker engine
    Docker CLI client
    Docker Compose
*/
//Main Commands
/*
    Basic Commands
    Overview
    - Container vs Image
    - Version and Tag
    - Docker Commands
        - docker pull
        - docker run
        - docker start
        - docker stop
        - docker ps
        - docker exec -it
        - docker logs
    Difference Image and Container
    - CONTAINER is a running enviroment for IMAGE
        - application image: postgres, redis, mongo, ...
        - port binded: talk to application running inside of container
            - Port 5000
        - virtual file system

        official docker images
            - postgres
                docker run postgres
            - redis
                docker run redis
                docker run redis:4.0
                    - pulls image and starts container
        docker ps - to check what container running
        docker run -d redis - with -d to run the container fetching back its id
        docker stop (container id) - to stop running the docker container
        docker ps -a - with -a you can see which container running or not
                     - lists running and stopped container
        docker start (container id) - to run the specific container

        CONTAINER Port vs HOST Port
            - Multiple containers can run on your host machine
            - Your laptop has only certain ports available

        Binding host to redis
            - docker run -p6000:6379 redis
            - docker ps - this will show that we already bind the host to redis
            - docker run -p6000:6379 -d redis - to run the container returning its id
            
            - docker run -p 6001:6379 redis:4.0 - to run, if same port with the above which is 6000:6379 it will cause error

*/
//Debugging a Container
/*
    - docker logs
    - docker exec -it

    - docker pull = which pulls the image to repository to local
    - docker run = combines combine pull and start, pull the image if not locally available
    - docker start = starts the container
    - docker stop 
    - docker run -d = -d you can run the container in detached mode
    - docker run -d -p = -p allows you to find a host to the container
    - docker run -d -p6000:6379
    - docker ps -a = -a to see all the container running or not
    - docker images = to see all the images

    - docker ps = to see a container that currently running
    - docker logs (container id) = to see the logs of the container

    - docker run -d -p60001:6379 --name redis-older redis:4.0 = to run the container with a name (to change the name)
    - docker ps = to see the container running

    - docker run -d -p6000:6379 --name redis-latest redis = to run the container with a name (to change the name)
    - docker ps = to see the container running

    - docker logs redis-older = to see the logs of the container (using name)

    - docker exec -it (container id) /bin/bash (bash) = to run the container in interactive mode
         - ls
         - pwd
         - cd /
         - env
    - docker exec -it redis-order /bin/bash = to run the container in interactive mode (using name)

    - docker run = where you create a new container from an image, docker run will take an image with a specific version or latest
    - docker start = you not working with images but rather with containers, for examples you have a container running and you want to start it again
*/

//Volumes - Persisting Data

//How to use docker in practice
//Demo Project
/*
    Workflow with Docker
    - Development
    - Continuous Integration/Delivery
    - Deployment
*/
//Developing with Containers
/*
    - JS and Nodejs application = simple demo of javascript and nodejs in the backend, to stimulate local development process
    - MongoDB Docker Container = connect to a docker container with a mongoDB in it

    Docker in Software Development
        - docker pull redis
        - docker pull postgres

        - docker pull mongo
        - docker pull mongo-express 
    
        - docker images = to see all the images

    Docker Network
        - Docker network ls
        
        - docker network create mongo-network = to create a network
    Run Mongo Containers
        - docker run -p 27017:27017 -d mongo = to run the mongo container in detached mode
        - docker run -p 27017:27017 -d -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password --name mongodb --net mongo-network mongo

        - docker ps = to see the container running
        - docker logs (container id) = to see the logs of the container

        - docker run -d -p 8081:8081 -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin -e ME_CONFIG_MONGODB_ADMINPASSWORD=password --net mongo-network --name mongo-express -e ME_CONFIG_MONGODB_SERVER=mongodb mongo-express
            = connect to mongodb container

        - docker logs (container id) = to see the logs of the container
        - docker logs (container id) | tail = to see the last logs of the container
        - docker logs (container id) -f = to see the logs of the container in real time

        Fully funtional javascript nodejs application which has presistence with mongoDB and also have mongo UI both of them running in docker container
        
*/
//Docker Compose - Running multiple services
/*
    - Using Docker Compose
         - for running multiple Docker containers
    - Docker Compose = tool for defining and running multi-container Docker applications
    - Creating the Docker Compose File
          - docker-compose -f mongo.yaml up = to run the docker compose file
          - docker-compose -f mongo.yaml down = to stop the docker compose file
*/
//Dockerfile - Building own Docker image
//Deploying the containerized App

//Volumes Demo

