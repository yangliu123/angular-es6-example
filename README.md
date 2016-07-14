# angular-es6-example
* angular 1.x
* es6
* webpack
* bootstrap
* oclazyload
* angular-ui-router

## Install
```bash
# Install 
npm install
```
## Development
```bash
npm run dev
```
Now, navigate to [http://localhost:8080](http://localhost:8080) in your browser and develop.
## Test(Karma Jasmine Protractor)
#### unit test 
`npm run test`
#### e2e test 
```bash
# Start the application in one command prompt
npm run dev
# Start webdriver in another command prompt(Make sure you have java environment.)
webdriver-manager start
# Run e2e test in a third command prompt
npm run e2e
```

## Deploy
`npm run build`


#Ubuntu 14安装 nodeJs

# https://github.com/nodesource/distributions

sudo apt-get install build-essential software-properties-common \
  python-software-properties python g++ make

curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -

sudo apt-get install nodejs

npm config get prefix

mkdir ~/.npm-global

npm config set prefix '~/.npm-global'

echo 'export PATH=~/.npm-global/bin:$PATH' | tee -a ~/.bash_profile

source ~/.bash_profile

npm config ls -l

npm install -g nodemon node-static babel babel-cli

npm ls -g --depth=0

npm info <package_name>

npm install -g <package_name>

npm update -g <package_name>
