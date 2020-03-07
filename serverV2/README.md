# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command

2. create `.env` file in root-directory
3. add following 4 lines to `.env` and replace [username], [password], [database] with your setup definitions

`JWT_SECRET=ibetiwill`
`TYPEORM_USERNAME=user`
`TYPEORM_PASSWORD=password`
`TYPEORM_DATABASE=database`

You will need to have the database created on postgresql.

4. Run `npm start` command

## summary of proposed changes / integrations (fb):
- ormconfig.ts instead .json: to hide secrets in .env

## seed db
npm run seed'
