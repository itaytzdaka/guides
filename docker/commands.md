
# run a docker file
docker build -t [image-name-to-create] . 
docker build -t [image-name-to-create]:[tag-name] . 

docker build -t mydemo:alpha . 
docker build -t fdemo . 

# download an image
docker pull [image-name]


# run a container

docker run [image-name]

docker run hello-world
docker run -t ubuntu bash  
docker run -d ubuntu /bin/sh -c "while true; do echo hello docker; sleep 1; done"
docker run -d -p 80:80 nginx
docker run mydemo:alpha
docker run mydemo:alpha 'echo ignore cmd of ${PURPOSE}'
docker run -d --name=srv fdemo
docker run --name=mycontainer hello-world
docker run -d --name=srv2 -p 3000:5000 fdemo
docker run -d --name=srv3 -p 3001:5000 fdemo app2.py
docker run -d --name-web1 --network=mynet nginx



# tells Docker to execute a command inside a running container. 
docker exec srv curl localhost:5000
docker exec srv2 curl localhost:5000

docker exec -it [container-name]/[container-id] bash
docker exec -it wordpress_container php -v

# list containers
docker container ls
docker ps -a

# list images
docker image ls
docker image ls [image-name]


# show container details
docker inspect [container-name]
docker inspect mycontainer

# stop a container
docker stop [container-name]

# start a container
docker start [container-id]

# delete a container
docker rm [container-id]
docker rm -f (docker ps -aq)

docker OBJECT prune

# delete all docker containers
docker rm $(docker ps -aq)


# delete images
docker image rm hello-world
docker image rm (docker image ls -aq)

# delete all docker images
docker rmi -f $(docker images -aq)

# displays the build history of the Docker image
docker history [image-name]
docker history fdemo

# list networks
docker network ls

#
docker network inspect [my-net-name]

# create mew network
docker network create [my-net-name]

# show container logs
docker logs -f [docker-name]

curl localhost
