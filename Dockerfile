# syntax=docker/dockerfile:1
FROM postgres

# Environment variables for PostgreSQL
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD secret
ENV POSTGRES_DB mydatabase

COPY ./database_tables.sql /docker-entrypoint-initdb.d/