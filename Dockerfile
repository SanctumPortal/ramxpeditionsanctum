# Use the official NGINX image from Docker Hub
FROM nginx:latest

# Copy all static assets to the NGINX default web root directory
COPY dist /usr/share/nginx/html

# Expose port 80 for HTTP traffic
EXPOSE 80

# The default command to start NGINX will be run
CMD ["nginx", "-g", "daemon off;"]
