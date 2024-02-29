import {openApp} from "open"

// Function to generate the login URL
function login_url() {
    // Replace this with your actual login URL generation logic
    return "https://google.com";
}

// Redirect the user to the login URL
const loginUrl = login_url();

// Open the login URL in the default web browser
openApp(loginUrl)
    .then(() => console.log(`Opened ${loginUrl} in your default web browser.`))
    .catch(err => console.error('Error:', err));
    
// var ticker = new KiteTicker({
//     api_key: "ln8z5p6yuhu9h506",
//     access_token: "n7x7z0hjntihmfgxfgdg2lnl3ubou58w"
// })

// console.log("ticket", ticker)

// ticker.connect();
// ticker.on("ticks", onTicks);
// ticker.on("connect", subscribe);

// function onTicks(ticks) {
//   console.log("Ticks", ticks);
// }

// function subscribe() {
//   var items = [408065];
//   ticker.subscribe(items);
//   ticker.setMode(ticker.modeFull, items);
// }