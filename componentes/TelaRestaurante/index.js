import React from 'react';
import {Text, View, Image, Button } from 'react-native';
import styles from './style';

import barPorteira from '..//..//assets/imagens/barporteira.jpg'
import castelus from '..//..//assets/imagens/castelus.jpg'
import seuluna from '..//..//assets/imagens/seuluna.jpg'

export default function App(props) {
  return (
    <View style={styles.container}>
   
      
      <Text style={styles.titulo}>Bares e Restaurantes</Text>
      <Text style={styles.texto}>Recife se revela aos visitantes através de sua deliciosa culinária típica. Com uma infinidade de opções gastronômicas, o cardápio local se torna um verdadeiro festival de sabores. Confira alguns bares e restaurantes famosos:</Text>

      <View style={styles.card}>
      <Image source={barPorteira} style={styles.img}/>
      <Text style={styles.titulocard}>Porteira Bar</Text>
      <Text>Localização: Boa Viagem</Text>

      </View>

      <View style={styles.card}>
      <Image source={castelus} style={styles.img}/>
      <Text style={styles.titulocard}>Castelus</Text>
      <Text>Localização: Instituto Ricardo Brennand</Text>

      </View>

      <View style={styles.card}>
      <Image source={seuluna} style={styles.img}/>
      <Text style={styles.titulocard}>Seu Luna</Text>
      <Text>Localização: Ipsep</Text>

      </View>
    </View>
  );
}