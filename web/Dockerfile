FROM node:20-alpine3.18 as base
LABEL maintainer="Sajitha Liyanage"
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN apk add --no-cache --virtual .gyp python3 make g++ \
    && apk update \
    && npm ci && npm cache clean --force \
    && apk del .gyp

FROM base as build
COPY . .
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL $REACT_APP_API_URL
RUN npm run build

FROM nginx:1-alpine as serve
COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
