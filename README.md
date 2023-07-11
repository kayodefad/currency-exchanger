# CurrencyConverter

## Directions on how to run the app

Run `yarn` to install the dependencies

Run `ng serve --port 3000` or `yarn start` or `npm start` for a dev server. Navigate to `http://localhost:3000/`. The application will automatically reload if you change any of the source files.

Stories FF-1, FF-2 and FF-3 were implemented.

The Fizer API only works on port 3000 on localhost.

The API was very limited. I had to calculate the other exchange rates using the only result I could get using the free version. The API was only limited to get results for EUR

I also stored the result of the API call in local storage so that I don't the 100 calls that I am limited to

The API_KEY is also hard-coded in the code. In an ideal application, it will be served with an environment variable
