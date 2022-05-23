import EventEmitter from "events";
import TypedEmitter from "typed-emitter";
import { Events } from "./types";

export const Emitter = new EventEmitter as TypedEmitter<Events>;