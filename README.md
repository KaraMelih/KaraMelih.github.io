
## TL;DR

You can fork this repo to modify and make changes of your own. Please give me proper credit by linking back to [Soumyajit4419](https://github.com/soumyajit4419/Portfolio). Thanks!

## Getting Started

Clone down this repository. You will need `node.js` and `git` installed globally on your machine.

## 🛠 Installation and Setup Instructions

1. Installation: `npm install`

2. In the project directory, you can run: `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.

## Usage Instructions

 1. use a compatible node version. For that use nvm (node version manager) and install 
 2. ```nvm install 17``` 
 3. check the node version using ```node --version``` make sure it does not complain 
 4. ```npm install``` to install all the dependencies listed in package.json
 5. make sure package.json has the following scripts
    ```    
    "scripts": {
       "start": "react-scripts start",
       "build": "react-scripts build",
       "test": "react-scripts test",
       "eject": "react-scripts eject",
       "deploy": "gh-pages -b gh-pages -d build",
       "predeploy": "npm run build"
    } ```
 6. Here `gh-pages -b gh-pages -d build` is used to deploy the build folder to gh-pages branch, it creates itself, and if it already exists it fails. 
In order to circumvent that, you can delete the `node_modules/.cache/gh-pages` folder. So it can create and deploy again. 

I use the main branch to keep the sources. `npm run deploy` runs the scripts and creates a build folder, the contents of this build folder is then deployed to gh-pages branch where the website is published. 
So each time you make changes to the main branch, you need to run `npm run deploy` to deploy the changes to gh-pages branch.
