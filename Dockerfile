FROM node:8

ENV NODE_PORT 3003
ENV NODE_HOST 0.0.0.0
ENV STATIC_ASSETS ./build

# Create app directory
WORKDIR /usr/src/app/server

# Entrypoint allows adding in ENV variables to the run command.
COPY ./server/package*.json /usr/src/app/server/
COPY ./server/entrypoint.sh .
COPY ./server/index.js .

RUN chmod +x /usr/src/app/server/entrypoint.sh

# Very basic server for serving up static assets.
RUN npm install --no-color --production --quiet

# Bundle the static content
COPY ./build /usr/src/app/build

RUN groupadd -r express && useradd -r -g express express

USER express

EXPOSE 3003
CMD [ "/usr/src/app/server/entrypoint.sh" ]
