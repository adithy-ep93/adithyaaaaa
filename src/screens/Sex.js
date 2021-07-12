import React,{useState} from 'react';
import { View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import Appbar from '../components/Appbar';
import { RadioButton } from 'react-native-paper';


const Sex=({navigation})=>{
    
   // const [username, setusername] = useState('');
    const [checked, setChecked] = React.useState('Male');
    
    return(
        <View style={styles.mainView}>
            <Appbar/>
            <View style={styles.mainView}>
                <Text style={styles.txt}>Sex / ലിംഗം</Text>
                <View style={styles.container}>
          <Text style={styles.TextStyle}>Male</Text>
                <RadioButton 
        value="Male"
        status={ checked === 'Male' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Male')}
        color={'green'}
      />
      </View>
      <View style={styles.container}>
          <Text style={styles.TextStyle}>Female</Text>
      <RadioButton
        value="Female"
        status={ checked === 'Female' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Female')}
        color={'green'}
      />
      </View>
      <View style={styles.container}>
          <Text style={styles.TextStyle}>Others</Text>
      <RadioButton
        value="Others"
        status={ checked === 'Others' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Others')}
        color={'green'}
            
      />
         </View>     
               
               </View>
               <View>
          <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Covidptnt')}>
            <Text
              style={styles.buttonTxt}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
        </View>
    );
}
export default Sex;
const styles=StyleSheet.create({
    mainView:{
        display:'flex',
        flex:1,
        backgroundColor:'white'
    },
    txt:{
        textAlign:'center',
        bottom:'13%',
        fontSize:18,
        fontWeight:'bold'
    },
    container: {
      width: '100%',
      paddingTop: '0.8%',
      paddingBottom: '0.8%',
      paddingLeft: '5%',
      paddingRight:'5%',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      backgroundColor: 'white',
    },
    TextStyle: {
      color: 'black',
      fontSize: 17,
      paddingTop: '1%',
    },
    button:{
      bottom: '34%',
      //left: '4%',
      width: '62%',
      height: 40,
      alignSelf:'center',
      alignItems: 'center',
      borderRadius: 12,
      backgroundColor:'green',
    },
    buttonTxt:{
      color: 'white',
      fontWeight: 'bold',
      top:8,
      fontSize: 16,
      alignItems: 'center',
      textAlign: 'center',
    },
   
});
