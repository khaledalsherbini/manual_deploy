FROM node:22-alpine

RUN apk upgrade --no-cache 

RUN npm install -g npm@12.2.3

WORKDIR /app

COPY package*.json ./ 

RUN npm ci  

COPY --chown=node:node src ./src/   

USER node

EXPOSE 4000

CMD ["npm", "start"]