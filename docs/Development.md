# Development Guide

## Develop Requirements 

### Packages
- [PNPM](https://pnpm.io/)
- [Turbo](https://turbo.build/)

Install dependencies from all packages:
```shell
pnpm install
```

To build the logger package, run:
```shell
pnpm build --filter=logger
```

Then start the dev servers:
```shell
pnpm run dev
```

### Environment Variables

To alter the development server variables, edit ```.env.development```

If you want to add sensitive variables, create a ```.env.development.local``` and add the your secrets there. After edit the monorepo package.json on the build script:
```json
"dev": "dotenv -e .env.development turbo run dev"
```
 to

```json
"dev": "dotenv -e .env.development -e .env.development.local turbo run dev"
```

The ```.env.development.local``` won't be committed, but the ```.env.development``` will as it holds the default settings to run th project.