import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
        );
    }
}

const styles1 = StyleSheet.create({
    container: {
        flex: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


const styles2 = StyleSheet.create({
    container: {
        flex: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
