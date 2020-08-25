import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import PossuiReceita from './pages/PossuiReceita';
import NaoPossuiReceita from './pages/NaoPossuiReceita';
import AspectosLegais from './pages/AspectosLegais';
import EntreContato from './pages/EntreContato';
import IdentificacaoPaciente from './pages/IdentificacaoPaciente';

const { Navigator, Screen } = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false}}>
        <Screen name="Home" component={Home} />
        <Screen name="PossuiReceita" component={PossuiReceita} />
        <Screen name="NaoPossuiReceita" component={NaoPossuiReceita} />
        <Screen name="AspectosLegais" component={AspectosLegais} />
        <Screen name="EntreContato" component={EntreContato} />
        <Screen name="IdentificacaoPaciente" component={IdentificacaoPaciente} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;