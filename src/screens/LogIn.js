import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import "../img"

const LogIn = props => {


    return (
      <>
        <View style={styles.container}>
        <ImageBackground source={""} resizeMode="cover" style={styles.image}></ImageBackground>
        </View>
      </>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#E49C7A",
      alignItems: "center",
      justifyContent: "center",
    },
    imagen:{
        width: 400,
        height: 400
    }
  });

export default LogIn;