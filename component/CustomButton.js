import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class CustomButton2 extends Component {
  // 생성자에서 Prop을 받아올 수 있다 
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    // const로 선언하고 사용할 수있다 
    //   const {
    //       onPress
    //   } = this.props

    return (
        <Button 
           title="Add Product"
           // const로 하지 않으면 this를 붙인다
           onPress={() => this.props.onPress()}
        />
    );
  }
}
export default CustomButton2

// 함수 컴포넌트로 만들면 아래와 같이 사용할 수 있다 
// const CustomButton = (props) => {
//     return (
//       <Button 
//         title="Add Product"
//         onPress={() => props.onPress()}
//       />
//     );
// }
// export default CustomButton;

// 펑션 컴포넌트 
const header1 = () => {
    return  (
      <View>
        <Text>Header</Text>
      </View>
    )
  }
// 펑션 컴포넌트 
const header2 = () => (
     <View>
       <Text>Header</Text>
     </View>
)
  