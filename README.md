## RWB Boiler plate (WIP)

This is a A React/Webpack 4/Babel 7 application boiler plate supporting hot reloading.

## Feature
* React 16.6
* Express 4
* Babel 7
* Webpack 4
* Webpack-dev-server with hot-reload enabled
* HtmlWebpackPlugin
* React-hot-dom-loader
* React-Router
* SASS support
* Mongoose with automatic REST route generation
* Dockerized MongoDB using docker-compose

## Mongoose models and routing
Models can be added to the exported array in the index.js of the models folder. Each entry needs to be formatted in this way:
`{
    route: 'routeName',
    model: require('./yourmongoosemodelimporthere');
    get: async (req, res) => { /* optional get handler */ }
    getByID: async (req, res) => { /* optional get by id handler */ }
    post: async (req, res) => { /* optional post handler */ }
    put: async (req, res) => { /* optional put handler */ }
    delete: async (req, res) => { /* optional delete handler */ }
}`