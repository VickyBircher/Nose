import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, Pressable, TextInput, ImageBackground } from "react-native";
import LogIn from "../img/LogIn.png"
import axios from "axios";
import Ionicons from "react-native-vector-icons/Ionicons";

const img = "../img/LogIn.png";
const IP = "10.152.2.140"; 



const Ruta = props => {


 const [usuario, setUsuario] = useState({})
 const [username, setUsername] = useState('');
 const [contraseña, setContraseña] = useState('');


 useEffect(() => {
  console.log('en el useffect',login(usuario));
},[usuario])


const login = async (usuario)=>{
  const res = await axios.post
  (
    `http://${IP}:4000/usuarios/login`,
    usuario,
    {
      headers: {
          'Content-Type': 'application/json'
      }
    }     
  ).then(response => {
    console.log('esta es la respuesta: ', response)
  },error =>{
    console.log(error)
  });
}



  console.log('usuario afuera del login', usuario);

    return (
      <>
        <ImageBackground source={require('../img/LogIn.png') } resizeMode="cover" style={styles.image} >
        <View style={styles.container}>
        <View style={{paddingBottom: 25}}>
        <TextInput style={styles.input} placeholder="     User"
              onChangeText={(value) => setUsername(value)}
        />
        </View>  
        <View style={{paddingBottom: 25}}>
        <TextInput style={styles.input} placeholder="     Password"
              onChangeText={(value) => setContraseña(value)}
        />
        </View>
        <Pressable style={styles.button} title="Log in" borderRadius={30}
         onPress={() => setUsuario({
          username: username,
          constraseña: contraseña
        })}
        ><Text style={{color: '#733A26', fontWeight: 'bold'}}
        >Log In</Text></Pressable>
        <Text style={{color:'white' }} > Log in </Text>
        
            <View style={{flexDirection:"row", marginTop: 100}}>
            <Ionicons name="logo-facebook" color="#fff" size={70} style={{padding:7}}/>
            <Ionicons name="logo-google" color="#fff" size={70} style={{padding:7, paddingRight:15, marginTop:5 }}/>
            <Ionicons name="logo-apple" color="#fff" size={70} style={{padding:7, paddingRight:15, marginTop:5 }}/>
            </View>
        </View>
        </ImageBackground>
      </>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      paddingTop: 350,
      flex: 1,
      backgroundImage: "#000000",
      alignItems: "center",
      justifyContent: "center",
    },
    input:{
      backgroundColor: "#F4F3F1",
      marginRight:110,
      borderRadius:14,
     height:60,
     width: 300,
     marginLeft:120,
    },
    button:{

      alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#F6E2D3',
    height: '15%',
    width: '35%',
      
    },image: {
      height: '100%',
      width: '100%',
      flex: 1,
      justifyContent: "center"
    },
    
  });

export default Ruta;