# Stage 1: Build the Angular application
FROM node:18.15.0 AS node

# Set the working directory in the container
WORKDIR /app

COPY . .

# Install dependencies
RUN npm install

RUN npm run build --prod




# Stage 2: Serve the Angular application with nginx
FROM nginx:alpine

# Copy the built Angular app from the previous stage to the NGINX HTML directory
COPY --from=node /app/dist/ecom-front /usr/share/nginx/html

# Expose port 80 (NGINX default port)
EXPOSE 80


