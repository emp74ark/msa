FROM node:latest

ENV HOST=0.0.0.0
ENV PORT=4300

WORKDIR /opt/ms1
COPY package.json ./
COPY ./index.js .
EXPOSE 4300
CMD ["node", "index.js"]
