FROM node:latest

ENV HOST=0.0.0.0
ENV PORT=4200

WORKDIR /opt/auth-ms
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 4200
CMD ["npm", "run", "start"]
