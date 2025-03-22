# Defines the base image for the container.
FROM (FROM ubuntu:20.04)
🔹 Example: This starts the build using ubuntu:20.04 as the base OS.


# Executes a command during the build process.
RUN (RUN apt-get update && apt-get install -y nginx)
🔹 Example: Installs Nginx inside the container while building the image.


# Copies files from the host machine to the container.
COPY (COPY ./app /var/www/html)
🔹 Example: Copies the app/ directory into /var/www/html inside the container.


# Sets the working directory inside the container.
WORKDIR (WORKDIR /app)
🔹 Example: Future commands (RUN, CMD, COPY) will now execute in /app.


# Sets an environment variable inside the container.
ENV (ENV APP_ENV=production)
🔹 Example: Defines APP_ENV as production, which can be accessed inside the container.


# Defines a fixed command that always runs when the container starts.
ENTRYPOINT ["nginx", "-g", "daemon off;"]
🔹 Example: Forces Nginx to always run when the container starts.


# Provides a default command that runs when the container starts 
CMD (CMD ["node", "server.js"])
🔹 Example: Runs node server.js when the container starts unless another command is provided.

