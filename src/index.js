import {WebSocket} from "ws"
import { KiteConnect, KiteTicker} from "kiteconnect"

//https://kite.zerodha.com/?action=login&type=login&status=success&request_token=PeLj7VGhepx0RqHUBpeMeCBwVpkApRS9
const api_key = "ln8z5p6yuhu9h506";
const api_secret = "n7x7z0hjntihmfgxfgdg2lnl3ubou58w"
var kc = new KiteConnect({
  api_key,
});

const accessToken = await kc.generateSession("PeLj7VGhepx0RqHUBpeMeCBwVpkApRS9", api_secret)

console.log("check", accessToken)


var ticker = new KiteTicker({
  api_key,
  access_token: accessToken.access_token
});

ticker.connect();
ticker.on("ticks", onTicks);
ticker.on("connect", subscribe);

function onTicks(ticks) {
  console.log("Ticks", ticks);
}

function subscribe() {
  var items = [408065];
  ticker.subscribe(items);
  ticker.setMode(ticker.modeFull, items);
}


// let socket = new WebSocket(`wss://ws.kite.trade?api_key=ln8z5p6yuhu9h506&access_token=${accessToken.access_token}`);

// socket.onopen = function(e) {
//   console.log("[open] Connection established");
//   console.log("Sending to server");
//   const message1 = { a: "subscribe", v: [408065] };
//   socket.send(JSON.stringify(message1));
//   const message = { a: "mode", v: ["full", [408065]] };
//   socket.send(JSON.stringify(message));
// };

// socket.onmessage = function(event) {
//     console.log("test connection", JSON.stringify(event))
//   console.log(`[message] Data received from server: ${JSON.stringify(event.data)}`);
// };

// socket.onclose = function(event) {
//   if (event.wasClean) {
//     console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
//   } else {
//     // e.g. server process killed or network down
//     // event.code is usually 1006 in this case
//     console.log('[close] Connection died');
//   }
// };

// socket.onerror = function(error) {
//   console.log(`[error]`);
// };