1. Create a .gitignore file (`touch .gitignore`) (if not already there). Add following to file:
```
node_modules
cypress/screenshots
cypress/videos
```

2. Install start server as a dependency
`npm install --save-dev start-server-and-test`
3. Add missing scripts to package.json
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

4. Make sure your repository is pushed to github
5. Go to [CircleCI](https://circleci.com/) & log in
6. Select 'Add project' & select the repository with the project from your github
666. In terminal run `npm run ci`