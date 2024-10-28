# PrimengTest

This project was generated with Angular version 18

The routes that works are

/countries
/contact

Every other route will redirect to /countries page

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `npm run test` to execute the unit tests via Jest

Decissions taken:

- On the countries page there is a huge amount of countries to big to keep it like this. So I added a paginator to make it easier to manage.
- On the countries page I didn't understand the add new country button so I just added the button and skip the funcionality.
