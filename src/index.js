import {WebSocket} from "ws"
import { KiteConnect} from "kiteconnect"


var kc = new KiteConnect({
  api_key: "ln8z5p6yuhu9h506",
});

const accessToken = await kc.generateSession("weUoH0OHtXnbcs6WCJztJYcnDryzXR8m", "n7x7z0hjntihmfgxfgdg2lnl3ubou58w")

console.log("check", accessToken)


let socket = new WebSocket(`wss://ws.kite.trade?api_key=ln8z5p6yuhu9h506&access_token=${accessToken.access_token}`);

socket.onopen = function(e) {
  console.log("[open] Connection established");
  console.log("Sending to server");
  const message1 = { a: "subscribe", v: [408065] };
  socket.send(JSON.stringify(message1));
  const message = { a: "mode", v: ["full", [408065]] };
  socket.send(JSON.stringify(message));
};

socket.onmessage = function(event) {
    console.log("test connection", JSON.stringify(event))
  console.log(`[message] Data received from server: ${JSON.stringify(event.data)}`);
};

socket.onclose = function(event) {
  if (event.wasClean) {
    console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
    console.log('[close] Connection died');
  }
};

socket.onerror = function(error) {
  console.log(`[error]`);
};