# angular-es6-example
* angular 1.x
* es6
* webpack
* bootstrap
* oclazyload
* angular-ui-router

## Install
```bash
# Make sure you have karma-cli installed.
npm install -g karma-cli
# Make sure you have protractor installed.
npm install -g protractor
# Install 
npm install
```
## Development
```bash
npm run dev
```
Now, navigate to [http://localhost:8080](http://localhost:8080)
## Test(Karma Jasmine Protractor)
#### unit test 
`npm run test`
#### e2e test 
```bash
# Start the application in one command prompt
npm run dev
# Start webdriver in another command prompt
npm webdriver-manager start
# Run e2e test in a third command prompt
npm run e2e
```

## Deploy
`npm run build`
