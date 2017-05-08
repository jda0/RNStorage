import store from '../store'

export const createShoppingItem = (itemText) => {
  store.createShoppingItem(itemText)
  return {
    type: 'SHOPPING_ITEM_ADDED'
  }
}

export const deleteShoppingItem = (shoppingItem) => {
  store.deleteShoppingItem(shoppingItem)
  return {
    type: 'SHOPPING_ITEM_DELETED'
  }
}
