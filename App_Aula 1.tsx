import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class App extends Component {
  render() {
    return (
      <View style={styles.area}>      
        <Text style={styles.textoPrincipal}>Texto 1</Text>
        <Text>Texto 2</Text>
        <Text style={[styles.alinhaTexto,styles.textoPrincipal]}>Texto 3</Text>        
        <Text style={styles.textoPrincipal}>Texto 4</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  area: {
    marginTop: 40
  },
  textoPrincipal: {
    fontSize: 25,
    color: '#FF0000'
  },
  alinhaTexto: {
    textAlign: 'center'
  }

})
export default App;
