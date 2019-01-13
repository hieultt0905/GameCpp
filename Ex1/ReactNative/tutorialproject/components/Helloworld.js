import React, {Component} from 'react';
import {Text} from 'react-native';

export default class Helloworld extends React.Component{
	render(){
		let greeting =`

		Hello world. My name is Nguyen Trung Hieu`;
		return(
			<Text>{greeting}</Text>
			);
	}
}