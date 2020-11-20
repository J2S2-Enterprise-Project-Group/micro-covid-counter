# First time setup

1. `npm install -g @aws-amplify/cli`
2. `amplify configure`
3. `amplify pull`
4. `amplify mock api`
5. `npm start`
6. To check resources: `amplify status` (please make sure you are not deleting any resources in AWS)

# If you update the data schema:
`amplify api gql-compile`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Available Scripts

In the project directory, you can run:

## `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
