# Stage 1: Build frontend
FROM node:18 AS build-frontend
WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install
COPY frontend ./
RUN npm run build

# Stage 2: Backend with frontend build included
FROM node:18
WORKDIR /app
COPY backend/package.json backend/package-lock.json ./backend/
WORKDIR /app/backend
RUN npm install
COPY backend ./
COPY --from=build-frontend /app/frontend/build ./public

EXPOSE 5000
CMD ["node", "server.js"]
