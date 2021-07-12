import React,{useState} from 'react';
import { View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import Appbar from '../components/Appbar';


const State=({navigation})=>{
  
    return(
        <View style={styles.mainView}>
            <Appbar/>
            <View style={styles.mainView}>
                <Text style={styles.txt}>State/സംസ്ഥാനം</Text>
                <View style={styles.container}> 
                 <Text style={{fontSize:16,fontWeight:'900'}}>Kerala</Text>
            </View>
               </View>
               <View>
          <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('District')}>
            <Text
              style={styles.buttonTxt}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
        </View>
    );
}
export default State;
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
      width:'55%',
      height:'15%',
      borderRadius:12,
      borderWidth:1,
      justifyContent:'center',
      alignItems:'center',
      left:'25%'
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
