npm init -y
npm install react react-dom
npm install redux react-redux
npm install axios
npm install webpack webpack-cli webpack-dev-server
npm install babel-loader @babel/core @babel/preset-env @babel/preset-react
npm install jest
npm install react-bootstrap bootstrap
npm install --save redux-thunk
npm install style-loader css-loader --save
npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/preset-env @babel/preset-react jest babel-jest react-test-renderer
npm i redux-mock-store

File and folder structure
Create the following files and folders within your project:
src/index.js – React application entry point.
src/App.js: The main component of the application.
src/store.js: Redux configuration.
src/actions.js: definition of Redux actions.
src/reducers.js: definition of Redux reducers.
src/api.js – Axios configuration to communicate with the backend.
src/components/FileList.js: component to display the list of files.
src/components/FileRow.js – Component to render a file row in the list.
src/styles.css: CSS styles file.

En caso de no tenerlo instalarlo con:
	nvm install v14.0.0

Para seleccionarlo la version concreta invocar:
	nvm use v14.0.0