import React, {Component} from 'react'
import { Provider } from 'react-redux'
import TodoItems from './TodoItems'
import createReduxStore from './store/createStore'

const reduxStore = createReduxStore()

export default class App extends Component {
  render () {
    return (
      <Provider store={reduxStore}>
        <TodoItems />
      </Provider>
    )
  }
}
