FROM node:21.6.2-alpine as base

COPY . /client

WORKDIR /client

EXPOSE 4001

RUN npm i
RUN npm i serve -g
RUN npm run build

CMD serve -s build -p 4001
