# Poke API

REST API utilizing the public [PokéAPI](https://pokeapi.co/)

## Setup
1. Clone this repo
2. Install the dependencies via `npm i`

## Running the API
### Production
Compiled Typescript API into the `dist` folder.
1. Run `npm start`, this will start a nodejs server at: [http://localhost:3000](http://localhost:3000) by default.
    - You can alternatively pass a different port with the start script like: `PORT=3333 npm start` and it will start with the PORT environment variable passed in.  In this example it would be `3333` and starting the server at: [http://localhost:3333](http://localhost:3333)
2. If you goto [http://localhost:3000/](http://localhost:3000/) in your web browser you should see a response of `{"success":"true"}`


### Development with watcher
1. Run `npm run dev`, and this will start nodemon for TypeScript.
2. It will start a nodejs server at: [http://localhost:3000](http://localhost:3000) by default.
3. Any updates to the code will trigger a recompilation.


### Development without watcher (or compile for production)
1. Run `npm run build`, this will output the compiled TypeScript files into the `dist` folder.


## Notes
- Most recent version of `axios` has [breaking errors](https://github.com/axios/axios/issues/5346) in latest version.  Had to debug and hardcode to version 1.2.1.