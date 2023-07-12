npm init -y  
npm install react react-dom  
npm install redux react-redux  
npm install axios  
npm install webpack webpack-cli webpack-dev-server  
npm install babel-loader `babel/core `babel/preset-env
`babel/preset-react
npm install jest
npm install react-bootstrap bootstrap
npm install --save redux-thunk
npm install style-loader css-loader --save
npm install --save-dev webpack webpack-cli babel-loader `babel/core
`babel/preset-env `babel/preset-react jest babel-jest
react-test-renderer  
npm i redux-mock-store

En caso de no tenerlo instalarlo con:  
nvm install v14.0.0

Para seleccionarlo la version concreta invocar:  
nvm use v14.0.0

We can use the .dotenv file to set the context variables
Here is an example of a folder structure for a React + React Bootstrap
project using the Clean Code and Hexagonal architecture:

In this folder structure:

\- src/ is the main directory of your source code.  
- components/ contains reusable presentation components, such as the
Table component.  
- containers/ contains components that wrap presentational components
and connect them to global state and Redux actions, for example, the App
component.  
- hooks/ contains custom hooks that encapsulate reusable logic, for
example useFetchData to handle API calls.  
- services/ contains external services, such as an api.js file for
making API requests.  
- state/ contains application state management using Redux.  
- actions/ contains the action files, for example, tableActions.js for
table-related actions.  
- reducers/ contains the reducer files, eg tableReducer.js for the table
reducer.  
- store.js configures Redux storage and combines reducers.  
- utils/ contains helper functions and utilities, like helpers.js.

In the tests/ folder, you will find the unit test files corresponding to
the components and reducers.

Remember that this is just a folder structure suggestion and you can
adapt it according to your needs and preferences. It’s also important to
note that this build doesn’t include configuration of Webpack or other
build tools, since you didn’t mention any specific preferences in your
question.

I hope this structure will serve as a starting point for your React
project using the Clean Code and Hexagonal architecture.