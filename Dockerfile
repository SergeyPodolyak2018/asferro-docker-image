FROM node:boron

MAINTAINER sergey.podolyak2018@gmail.com 

# 1.
WORKDIR /tmp
ADD package.json /tmp/package.json
RUN npm config set registry http://registry.npmjs.org/
RUN npm install
RUN mkdir -p /usr/src/app
RUN cp -a /tmp/node_modules /usr/src/app

WORKDIR /usr/src/app
# 2.

ADD . /usr/src/app

EXPOSE 8080

CMD [ "npm", "start" ]