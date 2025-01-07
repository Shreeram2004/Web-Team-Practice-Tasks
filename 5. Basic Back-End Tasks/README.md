# Basic Back-End Tasks
> ees-iitkgp/Web-Team-Practice-Tasks

The Back-End Tasks, as opposed to the Front-End Tasks, have designated folders for each of them. Each folder will have a README file like this with the task requirements. You will be using Node.js for executing them. While downloading Node.js, make sure that the version is at least 20 and not below that.\\

## Instructions:
1. Start with `npm init` for each task. Fill whatever details you deem necessary.
2. You will install two packages in each case: `express` as a dependency and `nodemon` as a devDependency.
3. Make the main file which contains your server as `server.js`, and in package.json, add the following to scripts
```json
	"dev": "nodemon server.js"
```
4. The `server.js` files will start in the following format:
```js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 7357;
```
and end in
```js
app.listen(PORT, () => console.log(`Server is online at http://localhost/${PORT}`));
```
5. It is suggested that all files are properly organized and stored, and not cluttered in the root directory. For instance, if your task uses HTML files and/or some assets, they should be kept in appropriate files, and in case of any backend JS files, they should also be stored appropriately.
