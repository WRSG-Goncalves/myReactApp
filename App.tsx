import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

interface Pessoa {
  nome: string;
}

class App extends Component<{}, Pessoa> {
  constructor(props: {}) {
    super(props);
    this.state = {
      nome: ''
    }
    this.retornaNome = this.retornaNome.bind(this)
  }

  retornaNome(nomeDigitado: string) {
    this.setState({ nome: (nomeDigitado.length > 0 ? nomeDigitado : "") })
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          underlineColorAndroid="transparent"
          onChangeText={this.retornaNome}
        />
        <Text style={styles.texto}>Bem vindo {this.state.nome}</Text>
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


