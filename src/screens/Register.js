import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, Pressable, TextInput, ImageBackground, ScrollView } from "react-native";
import LogIn from "../img/LogIn.png"
import axios from "axios";
import Ionicons from "react-native-vector-icons/Ionicons";

const img = "../img/LogIn.png";
const IP = "192.168.0.56"; 



const Register = ({navigator}) => {


 const [usuario, setUsuario] = useState({})
 const [token, setToken] = useState([]);
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
    // setToken(response.data);
    if(response.data.token){
      console.log('este es el token: ', response.data.token);
    } else{
      console.log(response.data);
    }
  },error =>{
    console.log(error)
  });
}



  console.log('usuario afuera del login: ', usuario);

    return (
      <>
        <ImageBackground source={require('../img/LogIn.png') } resizeMode="cover" style={styles.image} >
        <ScrollView>
        <View style={styles.container}>
        <TextInput style={styles.input} placeholder="     User"
              onChangeText={(value) => setUsername(value)}
        />
        <TextInput style={styles.input} placeholder="     Password" secureTextEntry={true}
              onChangeText={(value) => setContraseña(value)}/>

        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <TextInput style={styles.input2}/>
            <TextInput style={styles.input2}/>
        </View>
        <View>
        <TextInput style={styles.input} placeholder="     Password" secureTextEntry={true}/>
        <TextInput style={styles.input} placeholder="     Password" secureTextEntry={true}/>
        <TextInput style={styles.input} placeholder="     Password" secureTextEntry={true}/>
        <TextInput style={styles.input} placeholder="     Password" secureTextEntry={true}/>
        <TextInput style={styles.input} placeholder="     Password" secureTextEntry={true}/>
        <TextInput style={styles.input} placeholder="     Password" secureTextEntry={true}/>
        </View>
        <Pressable style={styles.button} title="Log in" borderRadius={30}
        
        ><Text style={{color: '#733A26', fontWeight: 'bold'}}>Log In</Text></Pressable>
        </View>
        </ScrollView>

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
     marginLeft: 120,
     marginTop: "5%"
    },
    input2:{
        backgroundColor: "#F4F3F1",
        borderRadius:14,
       height:60,
       width: "37%",
       marginTop:"5%"
    }, 
    button:{

      alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#F6E2D3',
    height: 60,
    width: 150,
    marginTop: 20
      
    },image: {
      height: '100%',
      width: '100%',
      flex: 1,
      justifyContent: "center"
    },
    
  });

export default Register;