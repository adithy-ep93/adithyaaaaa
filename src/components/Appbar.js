import React from 'react';
import { View,Text,StyleSheet,Dimensions,Image} from 'react-native';



const Appbar=()=>{
    return(
        <View style={styles.mainView}>
        < View style={styles.header}>
        <Image
             source={require('../assets/blc.png')}
             style={styles.img}></Image>

            <Image
             source={require('../assets/anugraha.png')}
             style={styles.img1}></Image>
              
        </View>
        {/*headerView*/}

        
        </View>
    );
}
export default Appbar;
const styles=StyleSheet.create({
    mainView:{
        display:'flex',
        flex:1,
        backgroundColor:'white'
    },
    header:{
     height:'30%',
     width:'100%',
     
     //backgroundColor:'red',
     justifyContent:'space-between',
     flexDirection:'row'
     
    },
    img:{
        tintColor:'black',
       marginTop:'2%',
        justifyContent:'flex-start',
       alignItems:'flex-start',
        width:'35%',
        height:'65%',
        opacity:0.4
      
    },
    img1:{
        //tintColor:'black',
         marginTop:'2%',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        width:'35%',
        height:'65%',
        right:'10%',
        
    },
    
})