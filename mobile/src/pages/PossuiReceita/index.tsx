import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import HorizontalButton from '../../components/HorizontalButton';

import styles from './styles';

function PossuiReceita() {
  const { navigate } = useNavigation();

  function handleNavigateToIdentificacaoPacientePage() {
    navigate('IdentificacaoPaciente');
  }

  return (
    <View style={styles.container}>
      <PageHeader stage="1" title="Avaliação da receita médica" />

      <Text style={styles.title}>O paciente possui receita médica?</Text>

      <HorizontalButton
        text="Sim"
        onPressCall={handleNavigateToIdentificacaoPacientePage}
      />
    </View>
  );
}
  
export default PossuiReceita;