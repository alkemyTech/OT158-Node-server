# Server Base - Proyecto ONG


## Envinroment setup

1) Create database
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Seeders:
``` bash
npx sequelize-cli db:seed:all
```

Users test:

Admin Users => 1, 2, 3, 4, 5, 6, 7, 8, 9, 10  
Regular Users => 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 
Password: 1234

## Start local server

``` bash
npm start
```
