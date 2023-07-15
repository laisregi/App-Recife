import React from 'react';
import {Text, View, Image, Button } from 'react-native';
import styles from './style';

import jangadeiro from '..//..//assets/imagens/hoteljangadeiro.jpg'
import goldenPark from '..//..//assets/imagens/hotelgolden.jpg'
import pousadaLord from '..//..//assets/imagens/pousadalorde.jpg'

export default function App(props) {
  return (
    <View style={styles.container}>
   
      
      <Text style={styles.titulo}>Pusadas e Hotéis</Text>
      <Text style={styles.texto}>Recife oferece uma seleção de hotéis e pousadas de qualidade excepcional, com preços que variam de R$200,00 a R$1200,00. Confira alguns abaixo:</Text>

      <View style={styles.card}>
      <Image source={jangadeiro} style={styles.img}/>
      <Text style={styles.titulocard}>Hotel Jangadeiro</Text>
      <Text>Valor Médio: R$ 408,00</Text>
      <Text>Localização: Boa Viagem</Text>

      </View>

      <View style={styles.card}>
      <Image source={goldenPark} style={styles.img}/>
      <Text style={styles.titulocard}>Hotel Golden Park Recife</Text>
      <Text>Valor Médio: R$ 360,00</Text>
      <Text>Localização: Boa Viagem</Text>

      </View>

      <View style={styles.card}>
      <Image source={pousadaLord} style={styles.img}/>
      <Text style={styles.titulocard}>Pousada Lorde Ingles</Text>
      <Text>Valor Médio: R$ 250,00</Text>
      <Text>Localização: Boa Vista</Text>

      </View>
    </View>
  );
}