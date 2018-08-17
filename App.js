import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton2 from './component/CustomButton';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      productCount: 0
    }
  }

  addProduct = () => {
    this.setState({'productCount': this.state.productCount + 1}
    // 아래와 같이 콜백함수를 ,로 구분해서 추가할 수 있다
    , () => {
      this.setState({'productCount': this.state.productCount + 1})
      }
    )
    // 이렇게 prevState를 가지고 있으면 이전 상태를 알 수있다 
    this.setState((prevState) => (
      {'productCount': prevState.productCount + 5}) 
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomButton2  onPress={this.addProduct} />
        <Text>{this.state.productCount}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

