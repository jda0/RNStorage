import {combineReducers} from 'redux'
import shoppingItems from './shoppingItems'

export default combineReducers({
  shoppingItems
})

export const getShoppingItems = ({shoppingItems}) => shoppingItems
