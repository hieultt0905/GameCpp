import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Stylesheet extends Component{
	
	render(){
		return(
				<View style = {styles.container}>
				<Text style = {styles.firstText}>First line</Text>
				<Text style = {[styles.secondText, styles.container]}>Second line</Text>
				</View>
				
			);
		
	}
}
const styles = StyleSheet.create({
			container: {
				marginTop:200,
				marginLeft:20,
				backgroundColor: '#28B463',
				borderWidth:2,
				borderColor:'#1F618D'
			},
			firstText: {
				margin: 5, 
				color: 'white'
			},
			secondText: {
				margin: 5, 
				color: 'yellow',
				fontWeight: 'bold',
				fontSize:20
			}
		});