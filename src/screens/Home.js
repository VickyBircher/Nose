import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View, Button, Image,TextInput,ScrollView } from "react-native";
import axios from "axios";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import likesAndDislikes from "./likesAndDislikes";
import Ionicons from "react-native-vector-icons/Ionicons";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import Publication from "../components/Publication";
//https://pbs.twimg.com/media/EtMyremWQAEcl08.jpg
const IP = "192.168.0.56"; 
const Home= ({navigation}) => {

const [publicacion, setPublicacion] = useState([]);
const [usuario, setUsuario] = useState([]);
const [cantLikes, setCantLikes] = useState([]);
const [cantDislikes, setCantDislikes] = useState([]);

useEffect(() => {
    obtenerPublicacion();
    obetenerUsuario();
    obetenerLikes();
    obetenerDislikes();
  },[]);

  
  const obtenerPublicacion = () => {
    axios.get(`http://${IP}:4000/publicaciones/7`)
    .then(res => {
      setPublicacion(res.data);
    })
    .catch(err => console.log(err));
  }
  //10.148.226.192
  //192.168.0.56
  const obetenerUsuario = () => {
    axios.get(`http://${IP}:4000/usuarios/3`)
    .then(res => {
      setUsuario(res.data);
    })
    .catch(err => console.log(err));
  }
  
  const obetenerLikes = () => {
    axios.get(`http://${IP}:4000/publicaciones/Likes/2`)
    .then(res => {
      setCantLikes(res.data);
    })
    .catch(err => console.log(err));
  }
  
  const obetenerDislikes = () => {
    axios.get(`http://${IP}:4000/publicaciones/Dislikes/7`)
    .then(res => {
      setCantDislikes(res.data);
    })
    .catch(err => console.log(err));
  }
  
  console.log("resultado de la petición ",publicacion);
  console.log(publicacion);
  console.log(publicacion[1]);
  console.log('foto de perfil: ', usuario.profilePicture)
  console.log('usuario ', usuario)
  
  return (
      <>

            <View style={styles.cuadrado}>
            <Ionicons name="ellipsis-vertical" color="#fff" size={35} style={{padding:7}}/>
            <View style={{flexDirection:"row"}}>
            <Ionicons name="funnel" color="#fff" size={35} style={{padding:7, paddingRight:"5%", marginTop:5 }}/>
            <Ionicons name="notifications" color="#fff" size={35} style={{padding:7, paddingRight:"10%", marginTop:5 }}/>
            </View>
           </View>


        <View style={styles.container}>
          <ScrollView>
          <Button title="prueba" onPress={()=>{navigation.navigate('ImgDetail')}}/>
          
          <Publication/>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Publication/>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Publication/>
    
            </ScrollView>

          </View>
        </>
    );

  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#E49C7A",
      justifyContent: "center",
    },
    picture:{
      width: 435,
      height: 500
    },

    input : {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },

    username:{
      fontWeight: "bold",
      color: "#fff",
      justifyContent: "flex-start",
      fontSize: 20,
      margin: 7,
      marginTop:10,
    },
    likes:{
      marginTop:5,
      flexDirection:"row",
      marginLeft: 10,
      
    },
    profilePic:{
      borderRadius:100,
      borderColor: "#9D2932",
        height: 70,
        width: 70,
    },
    cuadrado:{
      justifyContent: "space-between",
      flexDirection:"row",
      marginTop: "5%",
      width:435,
      zIndex:2,
      height:60,
      backgroundColor: "#80341E",
      borderBottomWidth: 7,
      borderColor: "#9D2932",

    },
    fecha:{
      color:"#fff",
      fontSize: 10,
      marginLeft: 17,
      fontWeight: "bold"
    },
    follow:{
      fontSize: 18,
      fontWeight: "bold",
      color: "#fff",
      backgroundColor: "#C4C4C4",
      borderRadius: 5,
      marginTop: 20,
      justifyContent: "space-evenly",
      marginLeft: 140
      }
  });

export default Home;