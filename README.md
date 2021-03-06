# Example for vmware/clarity issue https://github.com/vmware/clarity/issues/5985

Try it out with `yarn test`

This repo was created with `npx create-react-app cds-select-test --template typescript`
Additional setup is the minimum necessary to test a `CdsSelect`.

[ExampleCdsSelect.tsx](https://github.com/dturcotte/cds-select-test/blob/main/src/ExampleCdsSelect.tsx) is the simple component that renders a `CdsSelect`.

[ExampleCdsSelect.test.tsx](https://github.com/dturcotte/cds-select-test/blob/main/src/ExampleCdsSelect.test.tsx) shows the issue when rendering a `CdsSelect` in a test.

Note that the example test isn't interacting with or even querying the `CdsSelect` in any way, it's enough to simply be rendered in an *async* test.

Resulting test output:

```
 FAIL  src/ExampleCdsSelect.test.tsx
  CdsSelect
    ✕ can be used in a component that is tested (113 ms)

  ● CdsSelect › can be used in a component that is tested

    TypeError: 'set' on proxy: trap returned falsish for property 'disabled'

      at forEach (node_modules/src/internal/utils/lit.ts:29:24)
          at Array.forEach (<anonymous>)
      at syncProps (node_modules/src/internal/utils/lit.ts:29:10)
      at HTMLElement.updated (node_modules/src/forms/control/control.element.ts:205:9)
      at HTMLElement._$didUpdate [as _$AE] (node_modules/@lit/reactive-element/src/reactive-element.ts:1156:10)
      at HTMLElement.performUpdate (node_modules/@lit/reactive-element/src/reactive-element.ts:1139:12)
      at HTMLElement.scheduleUpdate (node_modules/@lit/reactive-element/src/reactive-element.ts:1058:17)
      at HTMLElement._$EC (node_modules/@lit/reactive-element/src/reactive-element.ts:1030:25)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        4.276 s, estimated 5 s
Ran all test suites related to changed files.
```



-----
# Below is the boilerplate Create React App readme
-----


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
