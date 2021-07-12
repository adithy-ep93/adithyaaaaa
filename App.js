import React from 'react'
//import Home from './src/screens/Home'
import Splash from './src/screens/Splash';
import Login from './src/navigation/LoginNavigation';
import 'react-native-gesture-handler';
//import Login from './src/screens/Login';
//import State from './src/screens/State';
//import Quartn from './src/screens/Quartn';
//import Vacc from './src/screens/Vacc';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import Appbar from './src/components/Appbar';

//const Stack = createStackNavigator();
const App=()=>{
  
  return(
     <NavigationContainer>
       <Login/>
    
     </NavigationContainer>
    
    
  );
}
export default App;