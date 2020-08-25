import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import HorizontalButton from '../../components/HorizontalButton';

import styles from './styles';

function EntreContato() {
  const { navigate } = useNavigation();

  function handleNavigateToHomePage() {
    navigate('Home');
  }

  return (
    <View style={styles.container}>
      <PageHeader stage="ATENÇÃO" title="Entre em contato!" />

      <Text style={styles.content}>Entre em contato com o prescritor da receita.</Text>

      <HorizontalButton
        text="Voltar"
        onPressCall={handleNavigateToHomePage}
        bgColor="#47B5B6"
      />
    </View>
  );
}
  
export default EntreContato;