# Teach A Man To Fish - Enterprise Adventure App

Deployed on [Netlify](https://enterprise-adventure.netlify.app/)  
[![Netlify Status](https://api.netlify.com/api/v1/badges/0fe3860c-8945-41bf-933b-b3e52cac4cda/deploy-status)](https://app.netlify.com/sites/enterprise-adventure/deploys)

Travis CI  
[![Build Status](https://travis-ci.com/fac19/teach-fish-frontend.svg?branch=master)](https://travis-ci.com/fac19/teach-fish-frontend)

Codecov  
[![codecov](https://codecov.io/gh/fac19/teach-fish-frontend/branch/master/graph/badge.svg)](https://codecov.io/gh/fac19/teach-fish-frontend)

---

## Project Description

### Weeks 14-16 Tech For Better Project

- A web application built for education charity [Teach A Man To Fish](https://www.teachamantofish.org.uk/) aimed at creating a personal learning journey for secondary school students who want to develop entrepreneurial skills as individuals.
- The app allows users to sign up for an account and complete "missions" that each teach a different "superpower" that is essential to success in school, work and in life.
- Each mission includes written information and an introduction video that explains the superpower and the learning outcomes to the users. This information is fetched from our AirTable API and displayed on our front-end application so our Product Owner can update the text themselves.
- The users can complete missions by uploading an image of specified work and writing reflections on their learning experience.
- After the user completes the mission they can return to that mission page and view their submission.
- Our MVP only includes Mission One, in further development once a user completes a mission, the next mission will become "unlocked" and available to read about and work on.

### User Stories

- The completed and incomplete user stories for our MVP (Minimum Viable Product) can be found [here](https://github.com/fac19/teach-fish-frontend/blob/master/docs/user-stories.md).

### User Flow

- The completed and incomplete main user flow of our application can be found [here](https://github.com/fac19/teach-fish-frontend/blob/master/docs/user-flow.md).

### Style guide

- Our style guide can be found [here](./docs/style-guide.md)

## Usability testing

- Script and results can be found [here](./docs/usability-testing.md)

---

## The Team

### [Hannah](https://github.com/hannahgooding) - _Scrum Master_

### [Giovanna](https://github.com/glrta) - _UX/UI lead_

### [Hettie](https://github.com/HettieM) - _DevOps lead_

### [Tom](https://github.com/tacotoemeck) - _QA lead_

Our team Process Guide can be found [here](https://github.com/fac19/teach-fish-frontend/blob/master/docs/process-guide.md).

---

## No local installation

We are using Netlify CLI Dev to load our environment variables so it is not possible for code reviewers to run the server locally without access to our Netlify account.

## How to run tests

1. `git clone` this repo
2. Run `npm install` in your terminal to install app dependencies
3. Run `npm run test:all` in your terminal to run tests

---

## Project Tech Stack

### Technologies Used

- React.js
- Node.js
- AirTable API
- Travis CI
- Jest
- Codecov

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Tools Used

- Project board, sprint planning and issues managed on Jira
- Project ideas developed collaboratively with our Product Owner in Miro
- Prototyped in [Figma](https://www.figma.com/file/2kvHdWKEbafpgLFgjR3w5d/teach-fish?node-id=0%3A1)

### Dependencies Installed

[React Router Dom](https://www.npmjs.com/package/react-router-dom)  
[React Test Renderer](https://www.npmjs.com/package/react-test-renderer)  
[Styled Components](https://styled-components.com)  
[Material UI](https://material-ui.com/)  
[Jest Styled Components](https://www.npmjs.com/package/jest-styled-components)  
[Airtable.js](https://www.npmjs.com/package/airtable)  
[Netlify Identity Widget](https://www.npmjs.com/package/netlify-identity-widget)  
[Netlify CLI](https://www.npmjs.com/package/netlify-cli)  
[React Confetti](https://www.npmjs.com/package/react-confetti)

### Dev Dependencies Installed

[Husky](https://www.npmjs.com/package/husky)  
[Prettier](https://www.npmjs.com/package/prettier)  
[Pretty Quick](https://www.npmjs.com/package/pretty-quick)

---

## Sprint 1:

In this sprint we have completed:

- [x] Set up React Router
- [x] Sign up and login with Netlify Identity Widget
- [x] Redirect to a form after signing in that requests more information from the user (posts to AirTable API)
- [x] Build React components for headings, links, form elements, buttons, navbar, back icon

## Sprint 2:

In this sprint we have completed:

- [x] Create My Missions dashboard
- [x] Display Mission One stages (Get Set > Ready > Go) fetching information from our AirTable API
- [x] Set up Cloudinary Widget to upload an image to Task One
- [x] Create form elements to post Mission One entry to AirTable
- [x] Write logic that displays submitted evidence on Mission One page once user has completed the mission
- [x] Set protected routes that users cannot access without logging in
