FROM node:10

WORKDIR /home/node
USER node
EXPOSE 3000

COPY --chown=node:node package.json package-lock.json /home/node/
RUN npm install

COPY --chown=node:node . /home/node/
RUN npm run build

CMD node /home/node/dist/server.js
