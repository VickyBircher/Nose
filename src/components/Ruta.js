import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Ruta = props => {


    return (
      <>
        <View style={styles.container}>
          <Text>Ejemplo</Text>
          
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
  });

export default Ruta;