import React,{useState} from 'react';
import { View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import Appbar from '../components/Appbar';
import {Picker} from '@react-native-picker/picker';

const District=({navigation})=>{
  const [selectedState,setSelectedState]=useState('Kozhikode');
  const [districs]=useState(['Thiruvananthapuram', 'Kollam', 'Alappuzha', 'Pathanamthitta', 'Kottayam', 'Idukki', 'Ernakulam', 'Thrissur', 'Palakkad', 'Malappuram', 'Kozhikode', 'Wayanadu', 'Kannur','Kasaragod'].sort());
    //const [username, setusername] = useState('');
    return(
        <View style={styles.mainView}>
            <Appbar/>
            <View style={styles.mainView}>
                <Text style={styles.txt}>District/ജില്ല</Text>
                <View style={styles.container}> 
             <Picker
             
            selectedValue={selectedState}
            onValueChange={(itemValue)=>{
            setSelectedState(itemValue)}}>
                {
                    districs.map((l)=>(
                        <Picker.Item label={l} value={l}/>
                    ))
                }
           
            </Picker>
            </View>
               </View>
               <View>
          <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Address')}>
            <Text
              style={styles.buttonTxt}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
        </View>
    );
}
export default District;
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
    container:{
      bottom:'5%',
      width:'45%',
      borderRadius:12,
      borderWidth:1,
      justifyContent:'center',
     // alignItems:'center'
      left:'28%'
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
