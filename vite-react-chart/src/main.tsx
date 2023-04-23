import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'

import reducer from './redux/reducers'
import { legacy_createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from '@redux-devtools/extension'
// import { watchAddAction, watchDecrementAction, watchIncrementAction } from './redux/saga/counter.action'
import rootSaga from './redux/saga'

const sagaMiddleware = createSagaMiddleware()
// const store = legacy_createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
const store = legacy_createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)
// sagaMiddleware.run(watchIncrementAction)
// sagaMiddleware.run(watchDecrementAction)
// sagaMiddleware.run(watchAddAction)


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
