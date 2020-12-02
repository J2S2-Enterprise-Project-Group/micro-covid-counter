# First time setup

1. `npm install -g @aws-amplify/cli`
2. `amplify configure`
3. Do this every time before starting dev: `amplify pull --appId d23u06s3sz51ej --envName dev`
You should fill in
```
For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use default
Amplify AppID found: d23u06s3sz51ej. Amplify App name is: micro-covid-counter
Backend environment dev found in Amplify Console app: micro-covid-counter
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: build
? Build Command:  npm run-script build
? Start Command: npm run-script start

? Do you plan on modifying this backend? Yes
✔ Successfully pulled backend environment dev from the cloud.


Successfully pulled backend environment dev from the cloud.
Run 'amplify pull' to sync upstream changes.
```
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
