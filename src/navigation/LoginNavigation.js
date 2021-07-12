import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import State from '../screens/State';
import Login from '../screens/Login';
import Otp from '../screens/Otp';
import Splash from '../screens/Splash';
import District from '../screens/District';
import Address from '../screens/Address';
// import Name from '../screens/Name';
import Age from '../screens/Age';
import Sex from '../screens/Sex';
import Covidptnt from '../screens/Covidptnt';
import Quartn from '../screens/Quartn';
import Contmnt from '../screens/Contmnt';
import Vacc from '../screens/Vacc';
import Dose from '../screens/Dose';
import Detail from '../screens/Detail';
import FDose from '../screens/FDose';
import SDose from '../screens/SDose';
const Stack= createStackNavigator();

export default IntroNav = () => {
  return (
    <Stack.Navigator
      initialRouteName='Splash'
      screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} options={{}} />
      <Stack.Screen name="Login" component={Login} options={{}} />
      <Stack.Screen name="Otp" component={Otp} options={{}}/>
      <Stack.Screen name="State" component={State} options={{}}/>
      <Stack.Screen name="District" component={District} options={{}}/>
      {/* <Stack.Screen name="Name" component={Name} options={{}}/> */}
      <Stack.Screen name="Address" component={Address} options={{}}/>
      <Stack.Screen name="Age" component={Age} options={{}}/>
      <Stack.Screen name="Sex" component={Sex} options={{}}/>
      <Stack.Screen name="Covidptnt" component={Covidptnt} options={{}}/>
      <Stack.Screen name="Quartn" component={Quartn} options={{}}/>
      <Stack.Screen name="Contmnt" component={Contmnt} options={{}}/>
      <Stack.Screen name="Vacc" component={Vacc} options={{}}/>
      <Stack.Screen name="Dose" component={Dose} options={{}}/>
      <Stack.Screen name="Detail" component={Detail} options={{}}/>
      <Stack.Screen name="FDose" component={FDose} options={{}}/>
      <Stack.Screen name="SDose" component={SDose} options={{}}/>
      
    </Stack.Navigator>
  );
};
