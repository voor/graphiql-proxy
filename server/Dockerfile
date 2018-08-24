FROM node:8

ENV NODE_PORT 3000
ENV NODE_HOST 0.0.0.0
ENV STATIC_ASSETS ./build

# Create app directory
WORKDIR /usr/src/app

# Entrypoint allows adding in ENV variables to the run command.
COPY ./server/package*.json /usr/src/app/
COPY ./server/entrypoint.sh .
COPY ./server/index.js .

# Very basic server for serving up static assets.
RUN npm install --no-color --production --quiet

# Bundle the static content
COPY ./build ./build

EXPOSE 3000
CMD [ "/usr/src/app/entrypoint.sh" ]
