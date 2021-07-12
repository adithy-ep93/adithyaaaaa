import React, {useRef, useEffect,useState} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';



// state = {
//   fadeValue: new Animated.Value(0)
// };

// const fadeIn = () => {
//   // Will change fadeAnim value to 1 in 5 seconds
//   Animated.timing(fadeAnim, {
//     toValue: 0,
//     delay:3000,
//     duration: 5000
//   }).start();
// };
 
const Splash = ({navigation})  => {
  const fadeValue =  useRef(new Animated.Value(0)).current
  const moveAnim = useRef(new Animated.Value(0)).current
  const fadeAnim = useRef(new Animated.Value(0)).current
  const [animating, setAnimating] = useState(true);

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 0,
        duration: 700,
      }
    ).start();
  }, [fadeAnim])
  {/*edit*/}
  const [showText, setShowText] = useState(true);
  useEffect(() => {
    // Change the state every second or the time given by User.
    const interval = setInterval(() => {
      setShowText((showText) => !showText);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  {/*edt*/}
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
    navigation.replace('Login');
    },6000);
    Animated.sequence([
      Animated.timing(moveAnim, {
        
        duration: 1000,
        toValue: Dimensions.get('window').width,
        
        delay: 2000,
        useNativeDriver: false,
      }),
      //  Animated.timing(fadeValue, {
      //    duration: 600,
      //    toValue: 0,
      //    delay: 1000,
      //    useNativeDriver: false,
      //  }),
      Animated.timing(moveAnim, {
        duration: 600,
        toValue: 0,
        delay: 1000,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.timing(fadeAnim, {
      duration: 1000,
      toValue: 1,
      delay: 600,
      useNativeDriver: false,
    }).start();
  }, [moveAnim, fadeAnim]);

 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
      
     
       
         {/* < Animated.Image
          source={require('../assets/logo.png')}
          style={[styles.img2,{opacity:fadeAnim}]} />    */}
       
        <Animated.View style={[styles.logoContainer, {marginTop: moveAnim}]}>
       
         <Animated.Image 
         source={require('../assets/splash.png')}
         style={[styles.image, {opacity: fadeAnim}]}>
          </Animated.Image>
          {/* <Text style={[styles.txt,{left:moveAnim}]}>Powered by</Text> */}
          {/* <Animated.Text style={[styles.logoText, {opacity: fadeAnim}]}>
            ANUGRAHA {'\n'} let's Caution
            
          </Animated.Text> */}


          {/*edt*/}
 <Text
          style={[
            styles.txt,
            {display: showText ? 'none' : 'flex'}
          ]}>
          Powerd by..

          
        </Text>
{/*edt*/}



        </Animated.View>
        <Animated.View style={[styles.logo, {top: moveAnim}]}>
        < Animated.Image
          source={require('../assets/logo.png')}
          style={[styles.img2,{opacity:fadeAnim}]} />

        </Animated.View>


        {/* <Animated.View
          style={{
            
            height: 250,
            width: 200,
            margin: 5,
            borderRadius: 12,
            backgroundColor: "#347a2a",
            justifyContent: "center"
          }}
        >
          <Text style={styles.txt}>Fade s{fadeIn}</Text>
        </Animated.View> */}
        </View>
    </SafeAreaView>
  );
};

export default Splash;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#28282B',
  },
  // logoText: {
  //   fontSize: 35,
  //   marginTop: 10,
  //   color: 'white',
  //   fontWeight: '700',
    
    
  // },
  txt:{
    top:'150%',
  color:'white',
  fontFamily:'Yellowtail-Regular',
  textAlign:'center',
  //alignSelf:'center',
  //bottom:'1%'
},
  contentContainer: {
    top: '5%',
    alignItems:'center',
    flex:1
  },
  image: {
    width: 190,
    height: 90,
    //tintColor:'white',
    bottom:'60 %'
  },
  logoContainer: {
    flexDirection: 'column',
    top:'5%'
  },
  img2:{
    height:'30%',
    width:'80%',
    top:'50%',
    
  },
});