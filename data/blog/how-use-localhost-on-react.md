---
layout: post
title: "How use Localhost with React!"
date: 2025-01-22 00:00:00 +530
categories: updates
excerpt: A complete guide on running a React project on localhost
---

![React Localhost](/images/posts/how-use-localhost.png)

## Introduction

When developing a React application, running it on `localhost` is an essential step for testing and debugging before deploying it to production. In this tutorial, I will guide you through setting up and running a React app on your local machine.

## Prerequisites

Before we begin, make sure you have the following installed:

- **Node.js and npm**: Download and install from [Node.js official website](https://nodejs.org/)
- **A Code Editor**: I recommend [VS Code](https://code.visualstudio.com/)

## Step 1: Create a New React App

If you haven’t already set up a React project, you can quickly create one using Create React App:

```bash
npx create-react-app my-app
```

This command will generate a new React project inside a folder named `my-app`.

Alternatively, if you have `yarn` installed, you can use:

```bash
yarn create react-app my-app
```

Once the installation is complete, navigate to the project folder:

```bash
cd my-app
```

## Step 2: Start the Development Server

To run your React project locally, use the following command:

```bash
npm start
```

Or, if you’re using Yarn:

```bash
yarn start
```

This will start a development server and automatically open your default web browser at:

```
http://localhost:3000
```

By default, Create React App runs on port **3000**, but if this port is already in use, it will suggest another available port.

## Step 3: Customizing the Localhost Port

If you need to run your React app on a different port, you can specify it using an environment variable. Run the following command:

```bash
PORT=4000 npm start
```

This will start the development server on `http://localhost:4000`.

For Windows (PowerShell):

```powershell
$env:PORT=4000; npm start
```

## Step 4: Troubleshooting Common Issues

### 1. **Port Already in Use**

If you see an error stating that port 3000 is already in use, you can either kill the process using it or run your app on another port as explained above.

To find and kill a process on port 3000 (Linux/macOS):

```bash
lsof -i :3000
kill -9 <PID>
```

For Windows (Command Prompt):

```cmd
tasklist | findstr "node"
taskkill /F /PID <PID>
```

### 2. **npm start not working**

If `npm start` doesn’t work, try the following:

- Ensure you are inside your React project directory (`cd my-app`).
- Run `npm install` to reinstall dependencies.
- Delete the `node_modules` folder and `package-lock.json`, then reinstall:

  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

## Conclusion

Running a React project on `localhost` is a fundamental skill for web developers. With this setup, you can develop and test your application before deploying it. If you run into issues, feel free to reach out or leave a comment below!

**Have suggestions or found a bug?** [Let me know](mailto:pedromarquesnoot@outlook.com)! I'm always happy to improve and help.
