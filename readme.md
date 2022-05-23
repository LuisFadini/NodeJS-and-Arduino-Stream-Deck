# Arduino with Nodejs

## Why you need this?
If you don't have a Arduino Leonardo, or similar, you can't use the keyboard and mouse library. So this project use USB serial communication to send data to the nodejs that emulates the keyboard and mouse.

## How to use it?
You need to install the nodejs and the Arduino IDE. Then you upload the sketch to the Arduino with the Arduino IDE. After in the NodeJS part you need to run `npm install` or `yarn install` to install the dependencies. Then you need to run the build script, after that you can run `node dist/index.js` to start the NodeJS project, now select the port and you are good to go.


