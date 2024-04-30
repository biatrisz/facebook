import { View, Image, Text } from 'react-native';
import { styles } from '../css/style';
import Botao from '../components/botao';
import InputTexto from '../components/inputTexto';
import { useState } from 'react';

export default function App() {
  const [valida, setValida] = useState();
  const atualizaTexto = (newText) => {
    console.log(newText);
  }


  return (
    <View style={styles.container}>
      <Image
        style={{ width: 300, height: 80, marginBottom: 30 }}
        resizeMode="contain"
        source={require('../../assets/facebook.png')}
      />
      <InputTexto label="Digite seu nome" dica="Digite seu nome" />
      <InputTexto valor={atualizaTexto} label="Digite seu CPF" dica="Digite seu CPF" />

      <Botao btn="entrar" cor='#000' src='home' />
      <View style={styles.cont}>
        <View style={styles.line} />
        <Text style={styles.text} >ou</Text>
        <View style={styles.line}></View>
      </View>
      <Botao btn="excluir" cor='#f00' src='excluido' />

    </View>
  );
}

