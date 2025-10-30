# Stage 1: Build Stage (Installs Dependencies)
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

# Stage 2: Production Stage (Minimal Runtime)
FROM node:20-alpine AS production 

ENV NODE_ENV production

WORKDIR /app

COPY package*.json ./
COPY --from=builder /app/node_modules ./node_modules 

COPY . .

EXPOSE 5000

# Run the production server
CMD [ "node", "server.js" ]