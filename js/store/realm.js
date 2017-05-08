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
      bought: {type: 'bool', default: false},
      createdTimestamp: {type: 'date'}
    }
  }
}

export const shoppingItemDS = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id})

export const getShoppingItems = () => {
  const shoppingItems = ShoppingItem.get().sorted('createdTimestamp', true)
  return shoppingItems
}

export const getShoppingItem = (id) => {
  const shoppingItem = realm.objectForPrimaryKey(ShoppingItem, id)
  return shoppingItem
}

export const updateShoppingItem = (shoppingItem, value, bought) => {
  realm.write(() => {
    try {
      shoppingItem.value = value
      shoppingItem.bought = bought
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

export const deleteShoppingItem = (shoppingItem) => {
  realm.write(() => {
    realm.delete(shoppingItem)
  })
}

const realm = new Realm({schema: [ShoppingItem]})
