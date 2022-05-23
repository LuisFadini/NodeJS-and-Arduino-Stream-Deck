import { keyTap } from "robotjs";
import { Emitter } from "../util/EventEmitter";

Emitter.on("receivedData", (data: string) => {
  if (data.startsWith("Button ")) {
    const btnData = data.replace("Button ", "");
    const button = btnData.split(" ")[0].replace(/\:/g, "");
    const on = Number(btnData.split(" ")[1].replace(/\;/g, "")) === 1;

    if (button === "1") {
      keyTap("f13");
    }
  }
});
