import React,{useState} from 'react';
import { View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import Appbar from '../components/Appbar';


const Age=({navigation})=>{
    
    const [username, setusername] = useState('');
    return(
        <View style={styles.mainView}>
            <Appbar/>
            <View style={styles.mainView}>
                <Text style={styles.txt}>Age / വയസ്സ്</Text>
                <TextInput
                 style={styles.textInput}
                 placeholder="Age / വയസ്സ്"
                 placeholderTextColor="grey"
                 underlineColorAndroid="transparent"
            
                 onChangeText={name => setusername(name)}></TextInput>
               </View>
               <View>
          <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Sex')}>
            <Text
              style={styles.buttonTxt}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
        </View>
    );
}
export default Age;
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
    textInput: {
       alignItems:'center',bottom:'5%',
        width: '92%',
        left:'4%',
        right:'4%',
        height: 40,
        elevation: 0,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: 'black',
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

})
