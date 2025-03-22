___________________________

# anonymous volume

dockerfile

VOLUME /etc/mysql

/var/lib/docker/volumes/f2b3e5c2c843f_mysql-data/_data


# *********************************************************


# Named Volumes


docker run -v
___________________________

docker run -d --name my-mysql \
  -v mysql-config:/etc/mysql \
  mysql


/var/lib/docker/volumes/mysql-config/_data


# *********************************************************


# Named Volumes


docker run -v
___________________________

docker run -d --name my-mysql \
  -v mysql-config:/etc/mysql \
  mysql


/var/lib/docker/volumes/mysql-config/_data


# **********************************************************

# remove volume
docker volume rm db_data	

# removes all unused volumes 
docker volume prune
