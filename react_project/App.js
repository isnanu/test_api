import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import StackNavigator from 'react-navigation'; 

export default class App extends Component {
  render() {
    return (
        <View>
            <View>
                <View style={styles.top_before}></View>
                <View style={{flexDirection:'row'}}>
                    <View style={styles.top_menu}>
                    <Genbutton title='Home' />
                    </View>
                    <View style={styles.top_menu}>
                    <Genbutton title='Profile' />
                    </View>
                    <View style={styles.top_menu}>
                    <Genbutton title='About Me' />
                    </View>
                    <View style={styles.top_menu}>
                    <Genbutton title='About Me' />
                    </View>
                    <View style={styles.top_menu}>
                    <Genbutton title='About Me' />
                    </View>
                    <View style={styles.top_menu}>
                    <Genbutton title='About Me' />
                    </View>
                </View>
            </View>
        </View>
    );
  }
}

function onPressLearnMore(argument) {
  alert('You tapped the button!');
}

class Genbutton extends Component{
  render(){
    return (
      <Button
        onPress={onPressLearnMore}
        title={this.props.title}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

const styles = StyleSheet.create({
  top_before : {
    flex:0, 
    alignSelf: 'stretch',
    width: '100%', 
    height: 30, 
    backgroundColor: 'powderblue'
  },

  top_menu: {
    height:50,
    backgroundColor:'powderblue',
    alignSelf: 'stretch',
    justifyContent: 'center',
    width:'20%',
    paddingLeft : 10,
  }
});
