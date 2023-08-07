
import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";

interface Pessoa {
  nome: string;
  input: string;
}

class App extends Component<{}, Pessoa> {

  constructor(props: {}) {
    super(props);
    this.state = {
      nome: '',
      input: '',

    }

    this.login = this.login.bind(this)
  }

  login() {
    if ( this.state.input === "" ){
      alert('Digite seu nome')

    }
    this.setState({ nome: this.state.input.length > 0 ? `Bem vindo: ${this.state.input}` : 'Digite seu nome' })
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          underlineColorAndroid="transparent"
          onChangeText={(texto) => { this.setState({ input: texto }) }}

        />
        <Button title="Login" onPress={this.login} />

        <Text style={styles.texto}>{this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
  }

})

export default App;


