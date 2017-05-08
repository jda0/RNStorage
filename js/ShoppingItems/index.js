import { connect } from 'react-redux'
import store from '../store'
import * as actions from './actions'
import ShoppingItems from './ShoppingItems'
import { getShoppingItems } from '../reducers'

// Realm.Results is auto-updating, therefore no need to re-fetch the data
const shoppingItemsResults = store.getShoppingItems()

const mapStateToProps = (state, props) => ({
  ...getShoppingItems(state),
  dataSource: store.shoppingItemDS.cloneWithRows(shoppingItemsResults)
})

const mapDispatchToProps = {
  ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingItems)
