FROM node:latest

ENV HOST=0.0.0.0
ENV PORT=4400

WORKDIR /opt/ms2
COPY package.json ./
COPY ./index.js .
EXPOSE 4400
CMD ["node", "index.js"]
