# Backend-Test-Elemes
## Prerequisites

* You have installed the latest version of `NPM / YARN`
* You have installed the latest version of `MYSQL`
* You have installed the latest version of `Node JS`

## How To Run
* Create .env file (for example you can open .env_example file)
* Create database [value of DB_NAME at .env]
```sh
npm i
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
npm run dev
```
