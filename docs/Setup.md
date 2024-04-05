# Setup

## Deploy Requirements 

### Packages

- [Docker](https://docs.docker.com/engine/install/ubuntu/)
- [Docker Compose](https://docs.docker.com/engine/install/ubuntu/)

### Production Setup

Before deployment, it is necessary to acquire the domain certificate, which can be done with the following steps:

- Add the required variables to ```.env```  file

```yaml
docker compose --profile certification up -d
```