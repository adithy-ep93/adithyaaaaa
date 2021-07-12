import React, {useState} from 'react';
import {View,StyleSheet,Image,Text,ScrollView,TextInput,TouchableOpacity,Button,BackgroundImage} from 'react-native'
import {SliderBox} from 'react-native-image-slider-box';
import {Picker} from '@react-native-picker/picker';
//import axios from 'react-native-axios';
import Appbar from '../components/Appbar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//import { ScrollView } from 'react-native-gesture-handler';
const Login =({navigation})=>{

    image = [
        require('../assets/download.jpg'),
        require('../assets/downloads.jpg'),
        
      ];

      const [selectedLanguage,setSelectedLanguage]=useState('English');
      const [languages]=useState(['English',
    'Malayalam'].sort());
       const [username, setusername] = useState('');
  const [phonenumber, setphonenumber] = useState()
  // const [conotp, setconotp] = useState()
  // const [requestId, setrequestId] = useState('')

  // console.log(phonenumber)
  // console.log(conotp)
  // console.log(requestId)
  // const api='bf236878-c910-11eb-8089-0200cd936042'
  // const otpbt = ({navigation}) => {
  //   alert(phonenumber)
  //   console.log('number')
  //   axios.get(`https://2factor.in/API/V1/${api}/SMS/${phonenumber}/AUTOGEN`
      
  //   )
  //     .then((response) => response.data).then(result => {
  //       alert("otp send successfully")
  //       console.log(result.Details)
  //       setrequestId(result.Details)
  //       console.log(requestId)
  //     }

  //     )
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }

  // console.log(conotp)
  // const conformotp = () => {
  //   console.log('ggggggggggggggggggggggggg' + requestId)
  //   axios.get(`https://2factor.in/API/V1/${api}/SMS/VERIFY/${requestId}/${conotp}`
  //   )
  //     .then((response) => response.data).then(result => {
  //       alert("verification successfully ")
  //       console.log(result)

  //     }

  //     )
  //     .catch((error) => {
  //       console.log(error)
  //     })

  // }

    return(
        <View style={styles.mainView}>
         {/* <ScrollView style={{height:'100%',flex:1}}>  */}
          <Appbar/>
            
          <View style={styles.mainView}>
            
             <View style={{bottom:'70%'}}>
             <SliderBox
              images={image}
              autoplay={true}
              circleLoop
              style={styles.slider}
              dotStyle={styles.dot}/>  
             </View>

             {/*Slider end*/}

             <View style={styles.secondView}>
            <View style={styles.container}>
            <MaterialIcons
            style={styles.iconItm}
            name="language"
            size={20}
            color='black'
             />
             <Picker style={{bottom:'65%',right:'49%',}}
             
            selectedValue={selectedLanguage}
            onValueChange={(itemValue)=>{
            setSelectedLanguage(itemValue)}}> 
                { 
                    languages.map((l)=>(
                        <Picker.Item label={l} value={l}/>
                    ))
                }
           
            </Picker>
           
            </View>
            <Image
          source={require('../assets/blc.png')}
          style={styles.img2} />
             </View>

             {/*Second View end*/}

          <View style={{alignItems:'center',bottom:'20%'}}> 
          <FontAwesome
            style={styles.iconItem1}
            name="user"
            size={20}
            color='green'
             />
          
          <Text style={styles.text1}>Name</Text>
         <View style={styles.containertxt1}>
         <TextInput
           style={styles.textInput}
           placeholder="Name"
           placeholderTextColor="grey"
           underlineColorAndroid="transparent"
           onChangeText={name => setusername(name)}></TextInput>
           </View>
           <MaterialCommunityIcons
            style={styles.iconItem1}
            name="cellphone"
            size={20}
            color='green'
             />
          <Text style={styles.text}>Phone number</Text>
          <View style={styles.containertxt}>
          <TextInput
            style={styles.textInput}
            placeholder=" Mobile No"
            keyboardType="numeric" 
            maxLength={10}
            placeholderTextColor="grey"
            underlineColorAndroid="transparent"
            onChangeText={e => { setphonenumber(e) }}></TextInput>
            </View>
            
            
          </View>
         
         <View style={{bottom:'10%'}}> 
          <TouchableOpacity style={styles.button}
           onPress={() => navigation.navigate('Address')}>
            <Text
              style={styles.buttonTxt}>
              Next
            </Text> 
          </TouchableOpacity>
        </View>
        
        </View>
         {/* </ScrollView>   */}
        </View>
    );
}
export default Login;
const styles=StyleSheet.create({
    mainView:{
        display:'flex',
        flex:1,
        backgroundColor:'white',

    },
    
   slider:{
        start: '4%',
        right: '4%',
        width: '92%',
       
       // borderRadius: 15,
        height: 210,
       
      },
    dot:{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 0,
        //top: 35,
        padding: 0,
        margin: 0,
      },
    secondView:{
        bottom:'10%',
        flexDirection:'row'
    },
    container:{
        bottom:'30%',
        width:'20%',
        height:'50%',
        borderRadius:7,
        borderWidth:2,
        left:'39%',
        backgroundColor:'grey',
        opacity:0.6,
        
      },
        iconItm:{
          top:'20%'
        },
    img2:{
        tintColor: 'black',
        height: '179%',
        width: '82%',
        //left:'5%',
        opacity:0.2,
        
        bottom:'39%'
      },
      iconItem1:{
        right:'37%'
      },
    text: {
        fontSize: 15,
        bottom:'12%',
        //fontWeight: 'bold',
        color:'black',
      right:'20%'
      },
      containertxt: {
         bottom: 16,
         width: '79%',
         height: 48,
         elevation: 0,
         borderRadius: 7,
         borderWidth: 1,
         borderColor: 'black',
         borderWidth:2,
         alignItems:'center'
       },
      textInput: {
        top: 2,
        width: '98%',
        height: 40,
        elevation: 0,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: 'black',
        
        //alignItems:'center'
      },
      text1: {
        fontSize: 15,
        bottom:'10%',
        //fontWeight: 'bold',
        color:'black',
      right:'27%'
      },
      containertxt1: {
        bottom: 10,
        width: '79%',
        height: 48,
        elevation: 0,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: 'black',
        borderWidth:2,
        alignItems:'center'
      },
      button:{
        bottom: '65%',
        //left: '4%',
        width: '62%',
        height: 40,
        alignSelf:'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor:'green',
        borderWidth:3
      },
      buttonTxt:{
        color: 'white',
        fontWeight: 'bold',
        top:5,
        fontSize: 16,
        alignItems: 'center',
        textAlign: 'center',
      },
     
    

})