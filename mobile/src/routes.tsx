import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import PossuiReceita from './pages/PossuiReceita';
import IdentificacaoPaciente from './pages/IdentificacaoPaciente';

const { Navigator, Screen } = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false}}>
        <Screen name="Home" component={Home} />
        <Screen name="PossuiReceita" component={PossuiReceita} />
        <Screen name="IdentificacaoPaciente" component={IdentificacaoPaciente} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;