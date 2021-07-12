import React,{useState} from 'react';
import { View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import Appbar from '../components/Appbar';
import { RadioButton } from 'react-native-paper';


const Dose =({navigation})=>{
    
    
    const [checked, setChecked] = React.useState('Yes');
    
    return(
        <View style={styles.mainView}>
            <Appbar/>
            <View style={styles.mainView}>
                <Text style={styles.txt}>  Your vaccination status?/നിങ്ങളുടെ വാക്സിനേഷൻ നില</Text>
                <View style={styles.container}>
          <Text style={styles.TextStyle}>1st Dose</Text>
                <RadioButton 
        value="1st Dose"
        status={ checked === '1st Dose' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('1st Dose')}
        onPress={() => navigation.navigate('FDose')}
        color={'green'}
      />
      </View>
      <View style={styles.container}>
          <Text style={styles.TextStyle}> 1st and 2nd Dose</Text>
      <RadioButton
        value="2nd Dose"
        status={ checked === '2nd Dose' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('2nd Dose')}
        onPress={() => navigation.navigate('SDose')}
        color={'green'}
      />
      </View>
      
               
               </View>
               <View>
          <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Detail')}>
            <Text
              style={styles.buttonTxt}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
        </View>
    );
}
export default Dose;
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
