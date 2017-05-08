import React, {Component} from 'react'
import { Provider } from 'react-redux'
import ShoppingItems from './ShoppingItems'
import createReduxStore from './store/createReduxStore'

const reduxStore = createReduxStore()

export default class App extends Component {
  render () {
    return (
      <Provider store={reduxStore}>
        <ShoppingItems />
      </Provider>
    )
  }
}
