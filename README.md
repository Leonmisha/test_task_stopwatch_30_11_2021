# Simple stopwatch using React + RxJS

_This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)._


## How to run the project

Deployed version of the app located on [https://leonmisha.github.io/test_task_stopwatch_30_11_2021](https://leonmisha.github.io/test_task_stopwatch_30_11_2021)

### Run project locally
1. Download source
2. Use these commands in the project directory:
   - `npm i` or `yarn` to install all dependencies (node_modules)
   - `npm run start` or `yarn start` to run the app
3. Open [http://localhost:3000](http://localhost:3000) in the browser.
<!--### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

-->

---

## Technical task
```
On React:

Реализовать секундомер, который подсчитывает время в формате «HH: MM: SS»

Секундомер должен иметь следующие кнопки:

* «Start / Stop» - запуск / остановка отсчета времени, останавливает и обнуляет значение секундомера.

* «Wait» - работает на двойной клик (время между нажатиями не более 300 мс!) секундомер должен прекратить отсчет времени; если после него нажать старт, то возобновляется отсчет.

* «Reset» - сброс секундомера на 0.  Обнуляет секундомер и снова начинает отсчет.

Требования:

 - используйте Observables в коде

 - RxJS подход - обязательно

 - функциональный подход

 - нам важнее всего увидеть Ваше умение писать код

- 300 млс – это не DoubleClick
```

---

## Deployment
Also you can build the app:
### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
The app is ready to be deployed!