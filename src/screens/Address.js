import React,{useState} from 'react';
import { View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import Appbar from '../components/Appbar';



const Address=({navigation})=>{
    
  const [textInputName, setTextInputName] = useState('');
    const checkTextInput = () => {
      //Check for the Name TextInput
      if (!textInputName.trim()) {
        alert('Please Enter Address');
        return;
      }
      alert('Success');
  };
   
    return(
        <View style={styles.mainView}>
            <Appbar/>
            <View style={styles.mainView}>
                <Text style={styles.txt}>Address / മേൽവിലാസം</Text>
                <TextInput
                 style={styles.textInput}
                 placeholder="Address / മേൽവിലാസം"
                 placeholderTextColor="grey"
                 underlineColorAndroid="transparent"
                 onChangeText={
                  (value) => setTextInputName(value)
                }></TextInput>
                 
               </View>
               
               <View>
          <TouchableOpacity style={styles.button}
          onPress={checkTextInput}
          onPress={() => navigation.navigate('Age')}>
            <Text
              style={styles.buttonTxt}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
        </View>
    );
}
export default Address;
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
        fontWeight:'bold',
        alignSelf:'center',
        right:'1%'
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
