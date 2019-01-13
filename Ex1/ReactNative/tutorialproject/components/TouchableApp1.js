import React, { Component } from 'react';
import { Text, View, Alert, Image, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

export default class TouchableApp1 extends Component {
    _onPressButton = () => {
        alert("You pressed the button !");
    }
    render() {
        return (
            <View style = {{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
    		<TouchableHighlight onPress = {this._onPressButton}
            underlayColor = 'white'
            onShowUnderlay={() => {
                alert("onShowUnderlay button !");
            }}>
            <View backgroundColor = 'green'>
    		<Text style = {{
                padding: 20,
                color: 'white',
                fontSize: 10
            }}>
    		TouchableHighlight
    		</Text>
    		<Image style={{
                width: 100,
                height: 40,
                alignItems: 'center'
            }}
            source={require('../image/button2.png')}>
    		</Image>
    		</View>
    		</TouchableHighlight>
    		<TouchableNativeFeedback>
    			<View style={{
                margin: 20,
                width: 200,
                height: 50,
                backgroundColor: 'blue'
            }}>
    				<Text style ={{
                margin: 10,
                fontSize: 10,
                color: 'white'
            }}>
    				TouchableNativeFeedback
    				</Text>
    			</View>
    		</TouchableNativeFeedback>
    		</View>
        );
    }
}