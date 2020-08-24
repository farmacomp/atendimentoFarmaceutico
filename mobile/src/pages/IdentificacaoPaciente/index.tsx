import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

function IdentificacaoPaciente() {
  return (
    <View style={styles.container}>
      <PageHeader stage="2" title="O comprador é o paciente?" />
    </View>
  );
}
  
export default IdentificacaoPaciente;