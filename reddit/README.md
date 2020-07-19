# Deviget code challenge

<p align="center">
  <img src="https://sm.ign.com/ign_es/screenshot/default/reddit-logo-full-1_75xh.png" width="400">
</p>

### Reddit Deviget Challenge React + Typescript + Redux + Css modules + based on CRA [Create React App](https://github.com/facebook/create-react-app).

## Index
- [App description](#app-description)
- [App requirements](#app-requirements)
- [Start](#start)
- [MAin Stack](#main-stack)
- [Important Notes](#important-notes)
- [Live demo](#live-demo)
- [Authors](#authors)

## App description

Simple Reddit client that shows the top 50 entries from Reddit - www.reddit.com/top

The app should be able to show data from each entry such as:

```
- Title (at its full length, so take this into account when sizing your cells)
- Author
- entry date, following a format like “x hours ago” 
- A thumbnail for those who have a picture.
- Number of comments
- Unread status
```
## App requirements

- Pagination support
- Saving pictures in the picture gallery
- App state-preservation/restoration
- Indicator of unread/read post (updated status, after post it’s selected)
- Dismiss Post Button (remove the cell from list. Animations required)
- Dismiss All Button (remove all posts. Animations required)
- Support split layout (left side: all posts / right side: detail post)
- Responsive design

## Start 

Clone repository (`git clone https://github.com/javierfz1980/Front-end.git`)
 
```bash
 cd Front-end/reddit
 yarn / npm install
 npm run start:local //This will open up a browser window on http://localhost:5000

 (optional)
 npm run start:dev (provided for local watch development)
 
 ```
## Main Stack

* [ReactJS](https://reactjs.org/) - Core frontend framework.
* [Create React App](https://github.com/facebook/create-react-app) - React cli.
* [Typescript](https://www.typescriptlang.org/) - Javascript superset for typing.
* [React-bootstrap](https://react-bootstrap.github.io/) - React components for faster and easier web development (wanted to test a new one).
* [Redux](https://github.com/reduxjs/redux) - State management library.
* [Redux](https://github.com/reduxjs/redux) - State management library.
* [Redux Observabbles](https://redux-observable.js.org/) - State actions side effects library based on RxJs.
* [Axios](https://github.com/axios/axios) - Promise based HTTP client.
* [React i18n](https://react.i18next.com/) - React library for i18n.
* [Jest](https://jestjs.io/) - JavaScript Testing Framework.

Also Prettier, husky, moment, etc...

## Important notes

- i18n was introduce just as a basic example, only in the Navigation items, translation should be added to the entire app.
- Unit Testing was introduce just as a basic example, only on the state reducer, more unit testing can (and should) be aded
- Typescript (not mandatory) was introduced because typing (IMHO) should be mandatory for any modern frontend app. Same result could be achieved without typescript.
- React bootstrap was introduced as a new component framework flavor (I never used it before, wanted to try something different).
- Only basic css layout was apply in order to provide the minimum responsive requirements. Deeper design & UX work should be done.

## Live demo

- Live app [link](https://deviget-reddit.herokuapp.com/).
- Source code [here](https://github.com/javierfz1980/Front-end.git). 

## Author

* **Javier Fernandez [github profile](https://github.com/javierfz1980)**
