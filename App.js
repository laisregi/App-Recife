import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './componentes/TelaInicial'
import TelaRestaurante from './componentes/TelaRestaurante'
import TelaHospedagens from './componentes/TelaHospedagem'

const Telas = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Telas.Navigator>
        <Telas.Screen component={TelaInicial} name='Tela Inicial'/>
        <Telas.Screen component={TelaRestaurante} name='Restaurantes'/>
        <Telas.Screen component={TelaHospedagens} name='Hospedagem'/>
      </Telas.Navigator>
    </NavigationContainer>
  );
}

