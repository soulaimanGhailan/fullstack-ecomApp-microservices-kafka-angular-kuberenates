# Stage 1: Build the Angular application
FROM node:18.15.0 AS build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Build the Angular application with production configuration
RUN npm run build --prod

# Stage 2: Serve the Angular application with nginx
FROM nginx:alpine

# Copy the built Angular app from the previous stage to the NGINX HTML directory
COPY --from=build /usr/src/app/dist/ecom-front /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
