# Stage 1: Build the application
FROM oven/bun:alpine as builder

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./package.json
RUN bun install --production

# Copy the rest of the application code
COPY . .

# Generate Prisma Client
RUN bun prisma generate

# Build the application
RUN bun build --compile --minify-whitespace --minify-syntax --target bun --outfile build/server ./src/index.ts

# Ensure the server file has execute permissions
RUN chmod +x build/server

# Stage 2: Create the runtime image
FROM alpine:latest

# Install necessary dependencies
RUN apk add --no-cache libstdc++ libgcc openssl

# Set the working directory
WORKDIR /app

# Copy only the built executable file and Prisma Client from the builder stage
COPY --from=builder /app/build/server /app/server
COPY --from=builder /app/node_modules/.prisma /app/node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma /app/node_modules/@prisma

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["/app/server"]
