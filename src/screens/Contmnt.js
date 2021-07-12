import React,{useState} from 'react';
import { View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import Appbar from '../components/Appbar';
import { RadioButton } from 'react-native-paper';


const Contmnt  =({navigation})=>{
    
    
    const [checked, setChecked] = React.useState('Yes');
    
    return(
        <View style={styles.mainView}>
            <Appbar/>
            <View style={styles.mainView}>
                <Text style={styles.txt}> Is your area now in the cantainment zone? / നിങ്ങളുടെ പ്രദേശം ഇപ്പോൾ കണ്ടെയ്ൻമെന്റ് സോൺ ആണോ?</Text>
                <View style={styles.container}>
          <Text style={styles.TextStyle}>Yes</Text>
                <RadioButton 
        value="Yes"
        status={ checked === 'Yes' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Yes')}
        color={'green'}
      />
      </View>
      <View style={styles.container}>
          <Text style={styles.TextStyle}>No</Text>
      <RadioButton
        value="No"
        status={ checked === 'No' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('No')}
        color={'green'}
      />
      </View>
      
               
               </View>
               <View>
          <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Vacc')}>
            <Text
              style={styles.buttonTxt}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
        </View>
    );
}
export default Contmnt;
const styles=StyleSheet.create({
    mainView:{
        display:'flex',
        flex:1,
        backgroundColor:'white'
    },
    txt:{
        //textAlign:'center',
        bottom:'13%',
        fontSize:18,
        fontWeight:'bold',
        textAlign:'justify',width:'92%',left:'4%',right:'4%'
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
