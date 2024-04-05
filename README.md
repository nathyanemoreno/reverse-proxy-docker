# Reverse Proxy Server Boilerplate

![Nginx](https://img.shields.io/badge/nginx-black?logo=nginx&style=for-the-badge) ![Docker](https://img.shields.io/badge/docker-black?logo=docker&style=for-the-badge) ![Certbot](https://img.shields.io/badge/certbot-black?logo=certbot&style=for-the-badge) ![NextJS](https://img.shields.io/badge/nextjs-black?logo=nextdotjs&style=for-the-badge) ![ReactJS](https://img.shields.io/badge/react-black?logo=react&style=for-the-badge) ![MongoDB](https://img.shields.io/badge/mongodb-black?logo=mongodb&style=for-the-badge) ![NodeJS](https://img.shields.io/badge/nodejs-black?logo=nodedotjs&style=for-the-badge) ![Typescript](https://img.shields.io/badge/Typescript-black?logo=typescript&style=for-the-badge)



This repository presents a boilerplate for web applications with reverse proxy.  It follows the scheme bellow:

![SetupWorkflow](./setup.drawio.svg)

## Infrastructure 

### Nginx & Certbot

The Nginx container is configured to support two environments: development and production. It uses reverse proxy to serve the application.

### Docker 


## MERN Application

This is a monorepo powered by [Turborepo](https://turbo.build/). There are two applications: a frontend and backend. The first is a NextJS application which uses ReactJS and NodeJS. The second is the api which runs with NodeJS using ExpressJS. 



[Development Guide](./docs/Development.md)
[Setup Guide](./docs/Development.md)

