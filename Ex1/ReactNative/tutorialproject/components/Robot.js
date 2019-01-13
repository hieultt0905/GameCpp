import React, {Component} from 'react';
import {Image} from 'react-native';

export default class Robot extends Component{
	render(){
		 const i={uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pinus_sylvestris1.jpg/1024px-Pinus_sylvestris1.jpg"};
		
		return(
			<Image source ={ i }
					style = { {width:200, height:200} }
			></Image>
			);
	}
}

