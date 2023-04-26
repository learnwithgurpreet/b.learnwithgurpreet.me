FROM nginx:stable-alpine

RUN npm run build

COPY _site /usr/share/nginx/html