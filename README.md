# Setting up REDspace Swapi

In the project directory,

## Server

Inside the /server directory, do the following:

- `yarn install`
- `yarn start`

The above should start the server on port `3001`.
Should you need to start on another port, start it like so:

`PORT=<PORT> yarn start`

Please not the new port, the client needs it, in the case you changed it.

## Client

Inside the /client directory, do the following:

- `yarn install`
  Before you start, if you changed the server port, you should update the `client/src/conf.js` appropriately.

- `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
