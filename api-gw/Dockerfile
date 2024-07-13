FROM node:latest

ENV HOST=0.0.0.0
ENV PORT=4100

WORKDIR /opt/api-gw
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 4100
CMD ["npm", "run", "start"]
