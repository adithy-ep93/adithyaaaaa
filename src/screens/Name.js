import React,{useState} from 'react';
import { View,Text,StyleSheet,TextInput,TouchableOpacity,Button} from 'react-native';
import Appbar from '../components/Appbar';
import { Formik } from 'formik';
 import * as yup from 'yup';
const nameSchema=yup.object({
  name:yup.string().required()
})
const Name=({navigation})=>{
    
   // const [username, setusername] = useState('');
    return(
        <View style={styles.mainView}>
            <Appbar/>
            < View style={styles.mainView}>
                <Text style={styles.txt}>Name/പേര്</Text>
                
               <Formik
               validationSchema={nameSchema}
               initialValues={{ name: '' }}
               onSubmit={(values) =>{
               console.log(values);
               } } >
                {(props)=>(

               
            <View>
              <TextInput
                 style={styles.textInput}
                 placeholder="Name/പേര്"
                 placeholderTextColor="grey"
                 underlineColorAndroid="transparent"
                 onChangeText={props.handleChange('name')}
                 value={props.values.title}
                 onBlur={props.handleBlur('name')}></TextInput>
                <Text style={{color:'red',left:'5%'}}>The field is required</Text>
               
          <TouchableOpacity style={styles.button}
          onPress={props.handleSubmit}
           onPress={() => navigation.navigate('Age')} >
            <Text
              style={styles.buttonTxt}>
              Next
            </Text>
          </TouchableOpacity>
          </View>
          ) }
          </Formik>
        </View> 
        </View>
    );
}
export default Name;
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
        top: '95%',
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
