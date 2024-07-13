# Microservice architecture

## API Gateway
- Handle all routes, accessible from the global network
- Anybody has access the /auth/login route
```json
POST http://localhost:4100/auth/login
Content-Type: application/json

{
    "username": "some_email",
    "password": "some_pwd"
}
```
- Nobody has access to the protected route without a valid JWT
```json
GET http://localhost:4100/resource_a
Authorization: "token_from_auth_ms"
```

## Authentication microservice
- has only one endpoint: /login which should be accessible only in the local network;
- returns JWT token which contains information about user permissions
### Mocked users
- user_a:
  - username: "neena_quinonezaqg@quotations.vm"
  - has access to the /resource_a only (ms1)
- user_b:
  - username: "ruthanna_tollefsonmst@instruction.fhk"
  - has access to the /resource_b only (ms2)
- user_c:
  - username: "lolita_kingsbury2gsk@macedonia.cr"
  - has access to the /resource_a and /resource_b resources

All users have password: "LpeJnOXBjPU7itTDDb9"

## Microservices

There are two microservices, which are available via urls:
- http://localhost:4100/resource_a
- http://localhost:4100/resource_b
Both of them just return message that this microservice works.

## How to run

```shell
docker compose -f ./compose.yaml -p msa up -d

```
