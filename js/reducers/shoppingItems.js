const DEFAULT_STATE = {}

export default (state = DEFAULT_STATE, {type, payload} = {}) => {
  switch (type) {
    case 'SHOPPING_ITEM_ADDED':
    case 'SHOPPING_ITEM_DELETED':
      return {...state, lastModified: Date.now()}
    default:
      return state
  }
}
