FROM node:16

ENV PORT 3000

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Copying source files
COPY . /app


# Installing dependecies
COPY package*.json /app
RUN npm install


# Building app
RUN npm run build 
EXPOSE 3000

RUN echo "Node: " && node -v
RUN echo "NPM: " && npm -v

# Running the app
CMD ["npm", "run", "dev"]
