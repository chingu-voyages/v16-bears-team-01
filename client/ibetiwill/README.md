# I-bet-I-will

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and Typesccript <br />

<details><summary>some React principles</summary>

### DOM as function of State
- A React component basically returns the DOM / html given the State as input.
- ie: ReactComponent = appState => jsx / html

### Unidirectional data flow
- All State is stored in the Top-Component. 
- Stateful Components are either Classes or Functions with hooks.
- State is passed to (presentational) child Components via Props.
- Presentational Components are Functions.
- (it integrates nicely with Redux if needed later - ie state gets more complex)

### Best Practice
- Small / Single Purpose Components
- keep State simpel, derive/calculate as much as possible
- create copies of iterables or Objects, never manipulate State inplace.
eg:
state = [1,2,3];
newState = [...state, 4, 5];

</details>

<details><summary>heavily used es6 / ts-features</summary>
- decomposition<br />
- arrow-synthax<br />
- array.map()<br />
- object.assign() and ...spread<br />
</details>


## Installation
in root-dir [v16-bears-team-01/client/ibetiwill]:
```
npm install
```

## Run it 
to run locally:
```
npm start
```
<details><summary>more Create React App commands ...</summary>
<p>
These are the original CRA-instructions.
In the project directory, you can run (Available Scripts):

```
npm start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

```
npm test
```
Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```
npm run build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```
npm run eject`
```

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

</p>
</details>

## Testing 
We should try to keep up with testing:). 
I already have some good experience with:
[Jest](https://jestjs.io/) for the 'normal' code - eg Utils.ts ...
[Enzyme](https://airbnb.io/enzyme/) for the React-Components - eg testing most relevant features of App.tsx
