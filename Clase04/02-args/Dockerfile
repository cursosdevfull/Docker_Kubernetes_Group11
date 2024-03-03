FROM centos:7

RUN yum install epel-release -y && \ 
    yum update -y && \
    yum install httpd -y

WORKDIR /var/www/html

ARG DIRECTORY

COPY ${DIRECTORY}/html .


CMD ["apachectl",  "-D",  "FOREGROUND"]
