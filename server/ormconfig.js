module.exports = [
  {
    name: "development",
    "type": "mysql",
    "host": process.env.DB_HOST_URL,
    //"port": 5432,
    "username":   process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_SCHEMA,
    "synchronize": true,
    "logging": false,
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    cli: {
      entitiesDir: "src/entity",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber"
    }
     
 },
 {
  name: "production",
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true, // switch this to false once you have the initial tables created and use migrations instead
  logging: false,
  entities: ["dist/entity/**/*.js"],
  migrations: ["dist/migration/**/*.js"],
  subscribers: ["dist/subscriber/**/*.js"],
  cli: {
    entitiesDir: "dist/entity",
    migrationsDir: "dist/migration",
    subscribersDir: "dist/subscriber"
  }
}
 
];
