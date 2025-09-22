# Calculator_Application

Here are step-by-step instructions for each Docker task:

1. Check Docker version, list images and containers

bash
docker --version
docker images
docker ps -a
2. Write a Dockerfile for Tomcat 9.0 and copy your WAR

Dockerfile
# Dockerfile
FROM tomcat:9.0
COPY EduAssessPro.war /usr/local/tomcat/webapps/
3. Command to run your WAR in Tomcat container

Tomcat runs automatically; just start the container. If you need to run in the foreground:

bash
docker run -it --name eduassesspro-container eduassesspro-image
Or detached mode (background):

bash
docker run -d --name eduassesspro-container eduassesspro-image
4. Build the image and run the container

bash
docker build -t eduassesspro-image .
docker run -d --name eduassesspro-container eduassesspro-image
5. Inspect container logs for troubleshooting

bash
docker logs eduassesspro-container
6. Limit container memory to 512MB RAM

bash
docker run -d --name eduassesspro-container --memory="512m" eduassesspro-image
7. Push your image to Docker Hub

First, log in and tag your image:

bash
docker login
docker tag eduassesspro-image <your-dockerhub-username>/eduassesspro-image
docker push <your-dockerhub-username>/eduassesspro-image
8. Show running processes inside the container

bash
docker exec eduassesspro-container ps aux
9. You built an image but forgot to tag it. How do you tag it now?

Find the image ID with docker images, then:

bash
docker tag <image-id> <your-dockerhub-username>/eduassesspro-image
10. Pull the python image and run it in interactive mode

bash
docker pull python
docker run -it python
11. Start a container in the background (nginx server example)

bash
docker run -d --name nginx-server nginx
Let me know if you need more details or help with any specific step!

