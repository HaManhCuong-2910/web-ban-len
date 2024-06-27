# use node 18 alpine image
FROM node:18-alpine

# create work directory in app folder
WORKDIR /app

# copy over package.json files
COPY package.json ./

# install all depencies
RUN npm install

COPY . .

# build the project
RUN npm run build

# run the build project with node
CMD ["node", ".output/server/index.mjs"]