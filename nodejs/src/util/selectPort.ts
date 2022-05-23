import { SerialPort } from "serialport";
import * as inquirer from "inquirer";
import { Answer } from "./types";

export async function selectPort() {
  const allPorts = await SerialPort.list();
  const ports: string[] = [];
  allPorts.forEach((port) => {
    ports.push(port.path);
  });

  const answer: Answer = await inquirer.prompt([
    {
      type: "list",
      name: "port",
      message: "Select the port that the Arduino is connected to",
      choices: ports,
    },
  ]);

  return answer.port;
}
