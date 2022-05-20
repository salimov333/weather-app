# Weather app
- `JavaScript` 
- `Node.js`
## Using the weather API to create a weather app that gets and prints the weather based on a city name.
---
### Resources:
#### [weather api](https://www.weatherapi.com/)
#### [axios documentation](https://www.npmjs.com/package/axios)
#### [chmode](https://www.computerhope.com/unix/uchmod.htm)
#### [shebang unix](https://wiki.ubuntuusers.de/Shebang_f%C3%BCr_Shellskripte/)
---
### Install:
```bash
npm i
```
### Run:
```bash
npm run start + "city name" `inside the app`
weather + "city name" `inside or outside the app`
```
---
### Starter cmd:
```bash
npm init -y
echo "node_modules/" > .gitignore
npm i dotenv
npm i axios
mkdir src
touch config.js src/index.js
```

### Constructor:
#### package.json
```javascript
"script":{
"start": "node src/index.js",
"deploy": "chmod +x src/index.js && npm link",
"undeploy": "npm unlink -g"
},
"bin": {
    "weather": "src/index.js"
  }
```
#### deploy
```bash
npm run deploy
```
#### undeploy
```bash
npm run undeploy
```
