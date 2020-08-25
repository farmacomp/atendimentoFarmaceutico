import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import HorizontalButton from '../../components/HorizontalButton';

import styles from './styles';

function PossuiReceita() {
  const { navigate } = useNavigation();

  function handleNavigateToAspectosLegaisPage() {
    navigate('AspectosLegais');
  }

  function handleNavigateToNaoPossuiReceitaPage() {
    navigate('NaoPossuiReceita');
  }

  return (
    <View style={styles.container}>
      <PageHeader stage="1" title="Avaliação da receita médica" />

      <Text style={styles.title}>O paciente possui receita médica?</Text>

      <HorizontalButton
        text="Sim"
        onPressCall={handleNavigateToAspectosLegaisPage}
        bgColor="#47B5B6"
      />

      <HorizontalButton
        text="Não"
        onPressCall={handleNavigateToNaoPossuiReceitaPage}
        bgColor="#922D50"
      />
    </View>
  );
}
  
export default PossuiReceita;