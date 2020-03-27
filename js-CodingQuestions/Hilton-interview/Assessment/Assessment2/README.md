# Assessment

## Assessment 1

Open index.html to view the page, it has responsive features supporting both desktop and mobile devices

## Assessment 2

Install it and run:

```bash
npm install
npm run dev


```

Run test:

```bash

npm run test

```

## Notes

The Redux `Provider` is implemented in `pages/_app.js`. Since the `MyApp` component is wrapped in `withReduxStore` the redux store will be automatically initialized and provided to `MyApp`, which in turn passes it off to `react-redux`'s `Provider` component.

The Redux Store is saved in local storage, to clear what you have been submitted or get initial Store, simply type `localStorage.clear()` to get the initial state.
