FROM node:12-alpine

RUN apk update
RUN apk upgrade
RUN apk add bash yarn

WORKDIR /usr/src/app

ADD app .

CMD ["node"]