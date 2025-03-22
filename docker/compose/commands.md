
# build images and run containers
docker compose up --build

# Runs in the background - docker compose file
docker compose up -d

# stop the containers
docker compose down

# stop and delete data from volumes
docker compose down -v
docker compose down --volumes	

# restart container
docker compose restart [image-name]
docker compose restart wordpress

# opens an interactive Bash shell inside a running container of a specific service.
docker compose exec [service-name] [sh/bash]

# Builds (or rebuilds) the images for the services defined in the docker-compose.yml file.
docker compose build

# Builds images without using any cache.
docker compose build --no-cache

# Shows real-time logs
docker compose logs -f

# Shows real-time logs only for a specific service.
docker compose logs -f [service-name]

# Used to scale up or down the number of running containers for a specific service.
docker compose scale [service-name]=[number]

