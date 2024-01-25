const EventEmitter = require("events");
const event = new EventEmitter();

event.on("sayMyName", () => {
  console.log("FazleRub");
});
event.emit("sayMyName");
