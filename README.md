# babel-and-karma

This apps show how to setup babel and karma to run unit tests.

# Installation
If you want to serve app to browser you can use http-server

`npm install http-server -g`
`npm install` to load modules
`npm install -g karma` install karma command line

#Run
This not necessary it's just in case you would like to see that es6 modules are loaded and transpiled.
`http-server . -c-1 ` (dot is important and -c-1 stands for no cache)


Go to http://localhost:8080/public/index.html
Check the console and you wil see that es6 modules are loaded

# Run karma
karma start karma.conf.js
