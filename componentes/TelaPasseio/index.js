import React from 'react';
import {Text, View, Image, Button } from 'react-native';
import styles from './style';

import brennand from '..//..//assets/imagens/brennand.jpg'
import catamaran from '..//..//assets/imagens/catamaran.jpg'
import marcozero from '..//..//assets/imagens/marcozero.jpg'

export default function App(props) {
  return (
    <View style={styles.container}>
   
      
      <Text style={styles.titulo}>Passeios em Recife</Text>
      <Text style={styles.texto}>Com tantas opções de diversão, desde ilhas paradisíacas até museus e casarões antigos, o Recife é simplesmente encantador! Se você é apaixonado por história e arquitetura, vai se maravilhar com os passeios que a cidade tem a oferecer.</Text>

      <View style={styles.card}>
      <Text style={styles.titulocard}>Instituto Ricardo Brennand</Text>
      <Image source={brennand} style={styles.img}/>

      </View>

      <View style={styles.card}>
      <Text style={styles.titulocard}>Catamarãn Tours</Text>
      <Image source={catamaran} style={styles.img}/>
      </View>

      <View style={styles.card}>
      <Text style={styles.titulocard}>Marco Zero</Text>
      <Image source={marcozero} style={styles.img}/>
      </View>
    </View>
  );
}