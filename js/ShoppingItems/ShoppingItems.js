import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'
import { ListView } from 'realm/react-native'

export default class App extends Component {
  state = { textInput: '' }
  _onSubmit (e) {
    const { createShoppingItem } = this.props
    if (e && e.nativeEvent.text.trim().length > 0) {
      createShoppingItem(e.nativeEvent.text.trim())
    }
    this.setState({ textInput: '' })
  }
  render () {
    const { dataSource, deleteShoppingItem } = this.props
    const { textInput } = this.state
    return (
      <View style={ styles.container }>
        <TextInput
          autoFocus
          blurOnSubmit={ false }
          style={ styles.textInput }
          onSubmitEditing={ (e) => this._onSubmit(e) }
          value={ textInput }
          onChange={ (event) => this.setState({ textInput: event.nativeEvent.text }) } />
        <ListView
          dataSource={ dataSource }
          renderRow={ (shoppingItem) => <Text onPress={() => deleteShoppingItem(shoppingItem)}>{ shoppingItem.value }</Text> }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 50,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginHorizontal: 12,
    paddingHorizontal: 12
  }
})
