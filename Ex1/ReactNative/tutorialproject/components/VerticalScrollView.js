import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';

export default class VerticalScrollView extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width;
        return (
            <View>
            <View style={{
                marginBottom: 30
            }}>
            </View>
            <ScrollView
            maximumZoomScale={3}
            minimumZoomScale={0.2}
            keyboardDimissMode ='on-drag'
            contentContainerStyle ={{
                padding: 20
            }}
            >
                <Image source ={require('../image/button2.png')}
            style={{
                width: screenWidth,
                height: screenWidth * 721 / 1024,
                marginTop: 30
            }}
            >
                </Image>
                <Text style={{
                fontSize: 20,
                color: 'white',
                padding: 15,
                textAlign: 'center',
                backgroundColor: 'green'
            }}> 
                This is a Text
                </Text>
                <TextInput style={{
                padding: 10,
                margin: 10,
                borderWidth: 1
            }}
            placeholder='Enter text'>
                </TextInput>
                    <Image source ={require('../image/button2.png')}
            style={{
                width: screenWidth,
                height: screenWidth * 721 / 1024,
                marginTop: 30
            }}
            >
                </Image>
                    <Image source ={require('../image/button2.png')}
            style={{
                width: screenWidth,
                height: screenWidth * 721 / 1024,
                marginTop: 30
            }}
            >
                </Image>
                    <Image source ={require('../image/button2.png')}
            style={{
                width: screenWidth,
                height: screenWidth * 721 / 1024,
                marginTop: 30
            }}
            >
                </Image>
                    <Image source ={require('../image/button2.png')}
            style={{
                width: screenWidth,
                height: screenWidth * 721 / 1024,
                marginTop: 30
            }}
            >
                </Image>
                    <Image source ={require('../image/button2.png')}
            style={{
                width: screenWidth,
                height: screenWidth * 721 / 1024,
                marginTop: 30
            }}
            >
                </Image>
                    <Image source ={require('../image/button2.png')}
            style={{
                width: screenWidth,
                height: screenWidth * 721 / 1024,
                marginTop: 30
            }}
            >
                </Image>
            </ScrollView>
            <View style={{
                marginTop: 30,
                marginBottom: 30
            }}>
            </View>
            </View>
        );
    }
}