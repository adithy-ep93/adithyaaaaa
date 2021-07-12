import React,{useState} from 'react';
import { View,Text,StyleSheet,TextInput,TouchableOpacity,Button} from 'react-native';
import Appbar from '../components/Appbar';
import axios from 'react-native-axios';

const Otp=({navigation})=>{
  const [phonenumber, setphonenumber] = useState()
  const [conotp, setconotp] = useState()
  const [requestId, setrequestId] = useState('')

  console.log(phonenumber)
  console.log(conotp)
  console.log(requestId)
  const api='bf236878-c910-11eb-8089-0200cd936042'
  const otpbt = () => {
    alert(phonenumber)
    console.log('number')
    axios.get(`https://2factor.in/API/V1/${api}/SMS/${phonenumber}/AUTOGEN`
      
    )
      .then((response) => response.data).then(result => {
        alert("otp send successfully")
        console.log(result.Details)
        setrequestId(result.Details)
        console.log(requestId)
      }

      )
      .catch((error) => {
        console.log(error)
      })
  }

  console.log(conotp)
  const conformotp = () => {
    console.log('ggggggggggggggggggggggggg' + requestId)
    axios.get(`https://2factor.in/API/V1/${api}/SMS/VERIFY/${requestId}/${conotp}`
    )
      .then((response) => response.data).then(result => {
        alert("verification successfully ")
        console.log(result)

      }

      )
      .catch((error) => {
        console.log(error)
      })

  }

    return(
        <View style={styles.mainView}>
            <Appbar/>
            <View style={styles.mainView}>
                <Text style={styles.txt}>Enter OTP</Text>
                <View style={{ justifyContent:'center',alignItems:'center'}}>
        <View style={{flexDirection:'row'}}>
          {/* <Text style={styles.text1}>Enter OTP</Text> */}
          <TextInput style={styles.textInput1}
            onChangeText={setconotp}
            underlineColorAndroid="transparent"
            keyboardType="numeric"
            maxLength={6}
          />
         
          </View>
          <View style={{ top: 40 }}>
            {/* <Button style={styles.button} title="conform" onPress={conformotp}onPress={() => navigation.navigate('State')} /> */}
            <TouchableOpacity style={styles.button}
             onPress={() => { otpbt() }}
         onPress={() => { conformotp}}
         onPress={() => navigation.navigate('State')}>
            <Text
              style={styles.buttonTxt}>
              CONFORM
            </Text>
          </TouchableOpacity>
        </View>
      </View>
               </View>
               {/* <View>
          <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('')}>
            <Text
              style={styles.buttonTxt}>
              Next
            </Text>
          </TouchableOpacity>
        </View> */}
        </View>
    );
}
export default Otp;
const styles=StyleSheet.create({
    mainView:{
        display:'flex',
        flex:1,
        backgroundColor:'white'
    },
    txt:{
        textAlign:'center',
        bottom:'25%',
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
        bottom: '24%',
        //left: '4%',
        width: 100,
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
      text1: {
        fontSize: 15,
         textAlign:'center',
        fontWeight: 'bold',
        color:'black',
        
      },
      textInput1: {
       bottom: 30,
        width: '50%',
        height: 40,
        elevation: 0,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: 'black',
        alignSelf:'center',
        alignItems:'center'
      },

})
