import Realm from 'realm'
import { ListView } from 'realm/react-native'
const uuid = require('uuid')

class ShoppingItem {
  static get () { return realm.objects(ShoppingItem.schema.name) }
  static schema = {
    name: 'ShoppingItem',
    primaryKey: 'id',
    properties: {
      id: {type: 'string'},
      value: {type: 'string'},
      completed: {type: 'bool', default: false},
      createdTimestamp: {type: 'date'}
    }
  }
}

export const todoItemDS = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id})

export const getShoppingItems = () => {
  const todoItems = ShoppingItem.get().sorted('createdTimestamp', true)
  return todoItems
}

export const getShoppingItem = (id) => {
  const todoItem = realm.objectForPrimaryKey(ShoppingItem, id)
  return todoItem
}

export const updateShoppingItem = (todoItem, value, completed) => {
  realm.write(() => {
    try {
      todoItem.value = value
      todoItem.completed = completed
    } catch (e) {
      console.warn(e)
    }
  })
}

export const createShoppingItem = (value) => {
  realm.write(() => {
    realm.create(ShoppingItem.schema.name, {
      id: uuid.v1(),
      value,
      createdTimestamp: new Date()
    })
  })
}

export const deleteShoppingItem = (todoItem) => {
  realm.write(() => {
    realm.delete(todoItem)
  })
}

const realm = new Realm({schema: [ShoppingItem]})
