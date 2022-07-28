1. Install a module:

`npm i --save-dev start-server-and-test`

2. Add any missing scripts to package.json

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node .",
    "dev": "nodemon . & npm run scss",
    "scss": "sass --watch src/scss/main.scss public/styles/main.css",
    "cypress:open": "cypress open",
    "cypress:run": "cypress run",
    "server": "node src/server.js",
    "ci": "start-server-and-test server http://localhost:3000 cypress:run"
  },
```

3. Make sure the project is on github
