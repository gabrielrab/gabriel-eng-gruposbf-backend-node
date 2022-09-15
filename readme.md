# Products with currency converter

<img alt="Logo" align="right" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/coin_1fa99.png" width="128" />

### Description

API for products with price conversion according to the selected currency

### How to run locally

> Before starting the application it is necessary that you have installed the [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/).

- On your computer, clone this repository
  `git clone https://github.com/gabrielrab/gabriel-eng-gruposbf-backend-node.git`
- Create a file `.env` at the root of the repository and fill in the variables as per the example file `.env.example`
- Run this build command
  `docker-compose up --build -d`

### Running migrations

- To running migrations, you need execute this command:
  `yarn migrate:run`
  > Note: You need run migrations after build application.

### How to run tests

- On your computer, inside this project folder, run this command:
  `yarn test` or if you use _NPM_, run `npm run test`
- If you can look coverage report, run this command:
  `yarn test:coverage` or `npm run test:coverage`

### Endpoints

You can view and access the collection of all endpoints for this API using [Insomnia](https://insomnia.rest/download). Just download [the collection file](https://github.com/gabrielrab/gabriel-eng-gruposbf-backend-node/tree/main/assets/doc/sbf-requests-collections.json) and import it into your Insomnia.

### Files Structure

```
├── Dockerfile
├── Makefile
├── docker-compose.production.yml
├── docker-compose.yml
├── jest.config.ts
├── package.json
├── readme
├── src
│   ├── app
│   │   └── usecase
│   │       ├── Currency
│   │       │   ├── CreateCurrencyUseCase.ts
│   │       │   ├── DeleteCurrencyUseCase.ts
│   │       │   ├── GetCurrencyUseCase.ts
│   │       │   ├── ListCurrencyUseCase.ts
│   │       │   └── UpdateCurrencyUseCase.ts
│   │       └── Product
│   │           ├── CreateProductUseCase.ts
│   │           ├── DeleteProductUseCase.ts
│   │           ├── GetProductUseCase.ts
│   │           ├── ListProductUseCase.ts
│   │           └── UpdateProductUseCase.ts
│   ├── core
│   │   ├── controller
│   │   │   └── Controller.ts
│   │   ├── exceptions
│   │   │   ├── ForbiddenException.ts
│   │   │   ├── NotFoundException.ts
│   │   │   ├── UnauthorizedException.ts
│   │   │   ├── ValidationException.ts
│   │   │   └── index.ts
│   │   └── usecase
│   │       ├── CreateEntityUseCase.ts
│   │       ├── DeleteEntityUseCase.ts
│   │       ├── GetEntityUseCase.ts
│   │       ├── ListEntityUseCase.ts
│   │       └── UpdateEntityUseCase.ts
│   ├── domain
│   │   ├── controller
│   │   │   └── IController.ts
│   │   ├── entity
│   │   │   ├── currency.ts
│   │   │   └── product.ts
│   │   ├── exceptions
│   │   │   └── ErrorException.ts
│   │   ├── factory
│   │   │   └── IRepository.ts
│   │   ├── repository
│   │   │   ├── ICurrencyRepository.ts
│   │   │   └── IProductRepository.ts
│   │   └── useCase
│   │       ├── ICreateEntityUseCase.ts
│   │       ├── IDeleteEntityUseCase.ts
│   │       ├── IGetEntityUseCase.ts
│   │       ├── IListEntityUseCase.ts
│   │       └── IUpdateEntityUseCase.ts
│   ├── index.ts
│   └── infra
│       ├── controller
│       │   ├── CurrencyController.ts
│       │   └── ProductController.ts
│       ├── database
│       │   ├── KnexConnectionAdapter.ts
│       │   ├── knex.ts
│       │   └── migrations
│       │       ├── 20220913114217_products.ts
│       │       └── 20220913221921_currencies.ts
│       ├── factory
│       │   └── Repository.ts
│       ├── http
│       │   ├── ExpressHttp.ts
│       │   ├── Http.ts
│       │   └── Router.ts
│       └── repository
│           ├── CurrencyRepository.ts
│           └── ProductRepository.ts
├── test
│   └── unit
│       └── entities
│           ├── Currency.test.ts
│           └── Product.test.ts
├── tsconfig.json
└── yarn.lock
```

Created by @gabrielrab | 2022
