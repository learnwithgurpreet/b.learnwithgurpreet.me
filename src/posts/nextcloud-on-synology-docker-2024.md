---
title: NextCloud on Synology Docker 2024
date: "2024-01-25"
eleventyExcludeFromCollections: true
excerpt: NextCloud is a widely used hosting solution that offers an integrated office suite, allowing users to utilize the platform in a manner similar to services such as Dropbox and Google Drive.
keywords: NextCloud, hosting solution, integrated office suite, cloud storage, Dropbox alternative, Google Drive alternative, Web Station, Docker, Container Manager, Synology, Docker container, file synchronization, document management, cloud collaboration, data hosting, Apache server, SQLite, Docker-compose, Redis, Synology NAS, Synology Package Center, NextCloud setup
tags:
  - "Tech"
---

NextCloud is a widely used hosting solution that offers an integrated office suite, allowing users to utilize the platform in a manner similar to services such as Dropbox and Google Drive.

The application can be hosted in two ways on Synology.

## Using Web station

![synology web station](/assets/images/synology_webstation.png)

You can directly install different web services as part of Synology packages from the Synology package center and host them as a website using [Web Station](https://www.synology.com/en-us/dsm/packages/WebStation?os_ver=7.2).

## Using Docker

On the other hand you can use docker approach to host nextcloud which is more controlled and clean. You can either use [Container Manager](https://www.synology.com/en-us/dsm/packages/ContainerManager?os_ver=7.2) or directly `ssh` into your Synology NAS and run docker container. This method is preferred because most vendors update their docker images.

Using Docker method also enables you to move your NextCloud setup in future to different system or machine without facing much challenges.

### Step 1

Create new folder namely `nextcloud` under the root level docker folder. Inside the `nextcloud` folder create two more folders called, `data` and `config`.

![synology filestation](/assets/images/synology_filestation.jpg)

### Step 2

Now that we have required folders in place, its time to run docker container.

I suggest opting for the `ssh` method to run the container instead of relying on the Container Manager since configuring it through the Container Manager didn't yield successful results for me.

```
$ docker run -d \
  --name nextcloud
  -p 8080:80
  -v /volume1/docker/nextcloud/config:/var/www/html/config \
  -v /volume1/docker/nextcloud/data:/var/www/html/data \
  nextcloud
```

Above command will spin-up the nextcloud container on port 8080, you can access the application on **http://<your_synology_ip>:8080/**

> Note: This version will be running on Apache as a server inside the container and using SQLite for the database.

If you are looking for more robust version or want to enable the caching, I would suggest to use docker-compose.json version with redis. Please follow [Official documentation](https://hub.docker.com/_/nextcloud).
