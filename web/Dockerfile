FROM node:20-alpine3.18 as base
LABEL maintainer="Sajitha Liyanage"
WORKDIR /app
COPY package.json .
RUN npm install --silent

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL $REACT_APP_API_URL

CMD ["npm", "start"]
