import React from 'react';
import {Text, View, Image, Button } from 'react-native';
import styles from './style';

import img from '..//..//assets/imagens/imgrecife.jpg'


export default function App(props) {
  return (
    <View style={styles.container}>
   <View style={styles.box}>
      
      <Text style={styles.titulo}>Recife</Text>
      <Text style={styles.texto}>Saiba o que visitar em Recife.</Text>

      <Image source={img} style={styles.imagem}/>

<View style={styles.img}>
      <Button title='RESTAURANTES' onPress={()=> {props.navigation.navigate('Restaurantes')}} color={'#372d00'}/>
      </View>
      <View style={styles.img}>
      <Button title='PASSEIOS' onPress={()=> {props.navigation.navigate('Passeios')}} color={'#372d00'}/>
      </View>
      <View style={styles.img}>
      <Button title='HOSPEDAGEM' onPress={()=> {props.navigation.navigate('Hospedagem')}}  color={'#372d00'}/>
      </View>
      </View>

    </View>
  );
}

