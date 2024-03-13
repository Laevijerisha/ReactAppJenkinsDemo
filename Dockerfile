FROM node:alpine

# COPY package.json /app/myjestapp

# RUN npm install

COPY . /app/myjestapp

WORKDIR /app/myjestapp

CMD [ "npm" , "start" ]
