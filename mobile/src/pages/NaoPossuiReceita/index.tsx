import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import HorizontalButton from '../../components/HorizontalButton';

import styles from './styles';

function NaoPossuiReceita() {
  const { navigate } = useNavigation();

  function handleNavigateToHomePage() {
    navigate('Home');
  }

  return (
    <View style={styles.container}>
      <PageHeader stage="ATENÇÃO" title="Dispense e oriente o paciente!" />

      <Text style={styles.content}>Apresente os riscos de fazer uma automedicação e encaminhe o paciente ao médico mais adequado para que lhe prescreva corretamente a medicação.</Text>

      <HorizontalButton
        text="Voltar"
        onPressCall={handleNavigateToHomePage}
        bgColor="#47B5B6"
      />
    </View>
  );
}
  
export default NaoPossuiReceita;