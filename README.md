# customer-backend-poc

Reference backend for the GitHub bootstrap and CI/CD PoC.

## What it includes

- Minimal HTTP service with `GET /health`
- Unit and integration tests with Node test runner
- Coverage with `c8` and LCOV output for SonarCloud
- `Dockerfile` for container builds
- GitHub Actions workflows for CI and ECS deploy

## Run locally

```bash
npm ci
npm test
npm start
```

The application listens on `PORT`, defaulting to `3000`.
