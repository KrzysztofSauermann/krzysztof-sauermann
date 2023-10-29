FROM node
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli
COPY . .
EXPOSE 4100 47777
CMD ng serve --host 0.0.0.0 --port 4100 --disable-host-check --poll 1000