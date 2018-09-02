# Ionic Webpack Starter
Sample [Ionic 4](https://beta.ionicframework.com/docs/) application using [Webpack 4](https://webpack.js.org) for builds.
This project is based on another [Angular Webpack Starter](https://github.com/Iulian-Stan/Angular)

## Quick start

```bash
# clone this project and use it as it is, or rename it to whatever you like
git clone https://github.com/Iulian-Stan/Ionic.git

# change directory to the repo
cd Ionic

# install the dependencies
npm install

# start the server
npm start
```

Open one of the following links in your browser:
* [http://127.0.0.1:8080](http://127.0.0.1:8080)
* [http://localhost:8080](http://localhost:8080)

**This project uses the default port (8080), in case the port is used by another application check the terminal asfter running ```npm start``` for the assigned port value**

## File Structure

```
Angular/
 ├──config/                        * configuration files (karma, protractor, webpack)
 |   ├──karma*.js                  * karma config for unit tests
 |   ├──protractor.conf.js         * protractor config for end-to-end tests
 │   ├──webpack.common.js          * common tasks for webpack build process shared for dev and prod
 │   ├──webpack.dev.js             * webpack development config
 │   ├──webpack.prod.js            * webpack production config
 │   └──webpack.test.js            * webpack testing config
 ├──e2e/                           * end-to-end tests
 |   ├──app.e2e-spec.ts            * e2e test specification
 │   └──tsconfig.e2e.json          * e2e specific typescript configuartion
 ├──src/                           * our source files that will be compiled to javascript
 │   ├──app/                       * Angular web application folder
 │   │
 |   ├──index.html                 * index page
 |   ├──main.ts                    * entry file of the application
 |   ├──polyfills.ts               * polyfills file (allows running an Angular application in most (browsers)[https://angular.io/guide/browser-support])
 │   └──vendor.ts                  * vendor file (imports the application's third-party modules)
 ├──package.json                   * npm dependencies
 ├──tsconfig.json                  * project wise typescript configuration
 └──tslint.json                    * typescript lint config

```

## Usage

### Install Dependencies

This project does not require any global packages beside those specified in ```package.json```.
Just make sure you have latest Node (>= 8) & NPM (>= 5) versions installed.

```bash
node --version
npm --version
```

### Build files

```bash
# development
npm run build:dev
```

### Run development server

```bash
# development
npm start
```

### Run tests

```bash
# karma unit tests
npm run test
# protractor e2e tests
npm run e2e
```
**Note:** You need a running application for e2e tests:
* Run ```npm run serve``` in a separate terminal before running ```npm run e2e```
* Make sure the application is using the default port (8080), otherwise adjust it in ```protractor.conf.js```

### Run typescript linter

```bash
npm run tslint
```

### Add Cordova
To be able to build a mobile app with [Cordova](https://cordova.apache.org/) you'll need to install it as a global package.

```bash
# development
npm install -g cordova
```

Then create a new Cordova project in a `cordova` sub-folder.

```bash
# will create a new cordova project
cordova create cordova
```

Next, build the project specifically for Cordova.

```bash
# will put the builded project into cordova/www folder
npm run build:cordova
```

Do not forget about native modules. This project is using ```splash-screen``` and ```status-bar```, thus we need to add corresponding cordova plugins

```bash
# switch to cordova project folder
cd cordova
# add splashscreen plugin
cordova plugin add cordova-plugin-splashscreen
# add statusbar plugin
cordova plugin add cordova-plugin-statusbar
```

All the following commands have to be run from inside cordova project folder.

Add your target platform.

```bash
# add android platform
cordova platform add android
# or iOS platform
cordova platform add ios
```

**Note:** 
* for ```android``` platform you'll need [Android Studio](https://developer.android.com/studio/) and Java SDK
* for ```ios``` platform you'll need [Xcode](https://developer.apple.com/xcode/) (available only on Mac)

Build the mobile project. (Alternatively you can open the mobile project in the corresponding IDE)

```bash
# build android
cordova build android
# build ios
cordova build ios
```

Finally, you can check the result in the emulator.

```bash
# emulate android
cordova emulate android
# emulate ios
cordova emulate ios
```

Last but not least - debugging the app:
* Android Studio or Xcode can be used to inspect platform specific logs
* Google Chrome can help debuging the web application, just open ```chrome://inspect/#devices``` and connect to you emulator/device