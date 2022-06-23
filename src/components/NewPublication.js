import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Button, Image, StatusBar, TextInput} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "../img/ejemplo.jpg";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";
import { RefreshControl, ScrollView } from "react-native-web";


const NewPublication= props => {
  
  const IP = "192.168.0.56"; 
  const [publication, setPublication] = useState({});
  console.log(publication);

  const subirPublicacion =async (publication)=>{
    const res = await axios.post(`http://${IP}:4000/publicaciones`,publication);
  }
  return (
    <>
        <View style={styles.cuadrado}>
            <Ionicons name="arrow-back" color="#fff" size={45} style={{padding:7}}/>
            <Ionicons name="notifications" color="#fff" size={35} style={{padding:7, paddingRight:15, marginTop:5 }}/>
          </View>
        <View style={styles.container}>
        <Image style={styles.picturee} source={{uri:"https://pbs.twimg.com/media/EtMyremWQAEcl08.jpg"}}/>
        <View style={styles.linea} >
        <Text style={{marginLeft: 10, color:"#fff"}}>Select a photo ↓</Text>    
        <View style={{flexDirection: "column-reverse"}}>
        <Image style={styles.picturee}source={{uri:"https://www.psdahtmlpasoapaso.com/blog/wp-content/uploads/2011/03/galeria.jpg"}}/>
        
        <View style={{flexDirection: "row"}}>
        <TextInput style={styles.input} placeholder="Name" 
        onChangeText={(value) => setPublication(...publication, name=value)}>  </TextInput>
        <TextInput style={styles.input} placeholder="URL"
         onChangeText={(value) => setPublication(...publication, url=value)}>  </TextInput>
        </View>
        <View style={{flexDirection: "row"}}>
        <TextInput style={styles.input} placeholder="fkUser"
       onChangeText={(value) => setPublication(...publication, fkUser=value)}>  </TextInput>
        {/* <TextInput style={styles.input} placeholder="Description">  </TextInput> */}
        </View>
          <Button title="Ivi" onPress={subirPublicacion(publication)}/> 
        </View>
        </View>

        </View>
      </>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#E49C7A",
      alignItems: "center",
    },
    picturee:{
      height:400,
      width:435
    },
    linea:{
      height:50,
      width:435,
      backgroundColor: "#9D2932"
    },
    cuadrado:{
      zIndex:2,
      justifyContent: "space-between",
      flexDirection:"row",
      marginTop: -60,
      width:435,
      height:60,
      backgroundColor: "#80341E",
      borderBottomWidth: 7,
      borderColor: "#9D2932"
    },
    input:{
     backgroundColor:"#fff",
     height:80,
     width: 200,
     borderRadius: 20,
    }
  });

export default NewPublication;