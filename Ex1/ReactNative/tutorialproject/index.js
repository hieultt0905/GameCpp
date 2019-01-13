/** @format */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Helloworld from './components/Helloworld';
import Robot from './components/Robot';
import MultipleGreeting from './components/MultipleGreeting';
import TextBlink from './components/TextBlink';
import Stylesheet from './components/Stylesheet';
import TextInput1 from './components/TextInput1';
import TouchableApp1 from './components/TouchableApp1';
import VerticalScrollView from './components/VerticalScrollView';

AppRegistry.registerComponent(appName, () => VerticalScrollView);
