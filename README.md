#  assignment-frontend

Dear Reader / Reviewer,

This project has been created for the technical assesment purpose for the bank. 

The project is using ```Vite``` + ```Vue 3``` because it comes with many benifits, for example - improved in terms of the performance, faster production build and starting of the server, optimized asset for production, etc.
The application is build using composition API. The components are well structured in a best suitable granular level. The reason behind using compostion API is because it supports better reuse of logics with the composable functions. Smaller build bundle due to code written in ```<script setup>``` which is more minification friendly and removes the use of ```this```.

```vue3-carousel``` is being used in order to have better display of horizontal list, with paginated navigation.

Using ```Vue Router``` for Single Page Application.

Using ```Pinia``` for state management.

Using ```Jest``` for Unit Testing.

Using ```TestCafe``` for e2e Testing.

Using ```ESLint``` for code quality.

Using ```Prettier``` for code formatting.

```Note* : Needless to mention but make sure to use appropriate proxies and registery, if running this project on an organizaton's network. Such as bank's laptop. In addition to that, if in case npm install fails , please try doing the cache cleanup of npm by using -  npm cache clean --force ```


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/)

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## NodeJS

```sh
node v16.18.0
```

## NPM

```sh
npm 9.2.0
```

## Project Setup*

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### To execute Unit test cases

```sh
 npm run test:unit
```

### To execute end-to-end test**

```sh
 npx testcafe chrome tests
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

```Note** : TestCafe could be executed directly in VSCode by adding test runner extension. Fixture page needs to be updated as per the local environment's host and port. For now it's setup as following - http://localhost:5173/ ```
