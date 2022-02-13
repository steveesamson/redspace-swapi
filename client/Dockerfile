FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
COPY ./ ./
RUN npm i
EXPOSE 3000
CMD ["npm", "run", "start"]