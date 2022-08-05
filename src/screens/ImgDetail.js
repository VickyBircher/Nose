import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

const ImgDetail = props => {


    return (
      <>
        <View style={styles.container}>
        <Image/>
        <Image style={styles.imagen} source={{uri:"https://images-platform.99static.com/kg3EsQUF7iHBDg-ee64Nnj_tFMY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/131/131919/attachment_131919552"}}/>
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

export default ImgDetail;