https://frontend.design-system.service.gov.uk/get-started/#get-started 
https://dev.to/elvelive/setting-up-sass-in-an-express-app-jk4

1. make new project directory
`mkdir <folder_name>

2. initialize package.json & add necessary packages
```
npm init -yes
npm i express sass 
npm i nodemon --save-dev
npm install govuk-frontend --save
```

3. edit the scripts to enable population of styling sheets

# in package.json edit "main" & "scripts":

"main": "index.js" ---> to "src/index.js"
```json
"scripts": {
    "start": "node .",
    "dev": "nodemon . & npm run scss", 
    "scss": "sass --watch src/scss/main.scss public/styles/main.css" 
},
```

4. Create .gitignore and add the node_modules there
`touch .gitignore` 

add within .gitignore. :
node_modules 

5. Add some folders
```
mkdir public
mkdir public/styles
mkdir src
mkdir src/pages
mkdir src/scss
```

The folder structure should look like this:

```
.
├── package.json
├── public
|   ├── assets
│   └── styles
└── src
    ├── index.js
    ├── pages
    │   └── index.html
    └── scss
        └── main.scss

```


6. Create and populate the index.js file
`touch src/index.js`

# in src/index.js add: 
```javascript
    const express = require('express')
    const app = express()
    const path = require('path')
    const PORT = 3000

    app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/index.html'))
    })

    app.use(express.static(path.join(__dirname, '../public')))

    app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
    })
```

7. Create and populate index.html
`touch src/pages/index.html`

# in index.html:

```html
<link rel="stylesheet" type="text/css" href="styles/main.css">

<title>Document</title>
</head>
<body>
<h1>Color red</h1>
</body>
</html>
```

8. Copy gov templates in pages directory

8. A. OPTIONAL Copy  /node_modules/govuk-frontend/govuk/assets/images &  (/node_modules/govuk-frontend/govuk/assets/fonts to public/assets

9. Create and populate main.scss
`touch src/scss/main.scss`
`touch public/styles/main.css`

# in main.scss add 
```css
@import "../../node_modules/govuk-frontend/govuk/all";
```

# run the server on localhost 3000 & populate main.css
`npm run dev`

10. Add javascript

# add script to the beginning of the html file body
<script>document.body.className = ((document.body.className) ? document.body.className + ' js-enabled' : 'js-enabled');</script>

# and to the end (make sure to add the right path!)
<script src="./govuk.js"></script>
<script>window.GOVUKFrontend.initAll()</script>

# copy contents of node_modules/govuk/all.js to public/govuk.js
# it has to be in public folder for html to access

The final folder structure should look like this:

```
.
├── package.json
├── public
|   ├── govuk.js
|   ├── assets
|   |   ├── images
|   |   └── fonts
│   └── styles
└── src
    ├── index.js
    ├── pages
    │   └── index.html
    └── scss
        └── main.scss

```