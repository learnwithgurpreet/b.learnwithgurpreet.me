FROM nginx:stable-alpine
COPY _site /usr/share/nginx/html

# This file will be used to build the docker image
