# start_to_finish_mvp


Client side: 
- nextjs with prisma
- nextjs: does automatic routing to a database
- prisma does automatic type casting for you

Database: 
- postgresql: SQL relational database

Docker with postgresql:
- Builds an image with of the postgresql database
- ensures that everyone has the same tables


# PostgreSQL Docker Image

This repository contains a Dockerfile for a PostgreSQL image with our application's database schema.

## Setup

Follow the steps below to set up the Dockerized PostgreSQL database:

1. **Install Docker:** See the [official Docker documentation](https://docs.docker.com/get-docker/) for instructions.

2. **Clone this repository:**

    ```bash
    git clone https://github.com/yourusername/yourrepository.git
    ```

3. **Navigate to the directory containing the Dockerfile:**

    ```bash
    cd yourrepository
    ```

4. **Build the Docker image:**

    ```bash
    docker build -t postgres-image .
    ```

5. **Start a container from the image:**

    ```bash
    docker run --name postgres-container -p 5432:5432 -d postgres-image
    ```

5.1 **If container already in use**
    ```bash
    docker stop postgres-container
    docker rm postgres-container
    ```

    Try again

6. **Connect to database**
    ```bash
    psql -h localhost -p 5433 -U postgres -d mydatabase    
    ```
    password: secret
    
You should now have a running PostgreSQL instance with our application's database schema. You can connect to the database at `localhost:5432` with the username `postgres`, the password `secret`, and the database name `mydatabase`.