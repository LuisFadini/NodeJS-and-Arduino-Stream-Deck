import { readdirSync } from "fs";
import { SerialPort } from "serialport";
import { Emitter } from "./util/EventEmitter";
import { selectPort } from "./util/selectPort";

selectPort()
  .then((port) => {
    const serial = new SerialPort({ baudRate: 9600, path: port });

    readdirSync(`${__dirname}/events`).forEach((file) => {
      require(`${__dirname}/events/${file}`);
    });

    let dataString = "";
    serial.on("data", (data) => {
      dataString += data.toString();
      if (data.toString().endsWith("\n")) {
        dataString = dataString.replace(/\n/g, "");

        Emitter.emit("receivedData", dataString);
        dataString = "";
      }
    });
  })
  .catch((err) => {
    throw err;
  });
