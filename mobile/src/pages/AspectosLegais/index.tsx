import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import HorizontalButton from '../../components/HorizontalButton';

import styles from './styles';

function AspectosLegais() {
  const { navigate } = useNavigation();

  function handleNavigateToIdentificacaoPacientePage() {
    navigate('IdentificacaoPaciente');
  }

  function handleNavigateToEntreContatoPage() {
    navigate('EntreContato');
  }

  return (
    <View style={styles.container}>
      <PageHeader stage="2" title="Avaliação da receita médica" />

      <Text style={styles.title}>A prescrição apresenta os aspectos legais necessários? (Conforme a RDC 20/2011)</Text>

      <View style={styles.listContainer}>
        <Text style={styles.listItem}>Nome do paciente;</Text>
        <Text style={styles.listItem}>Nome do medicamento;</Text>
        <Text style={styles.listItem}>Dose, concentração, forma farmacêutica e posologia;</Text>
        <Text style={styles.listItem}>Nome do profissional e inscrição no conselho;</Text>
        <Text style={styles.listItem}>Endereço e telefone do prescritor;</Text>
        <Text style={styles.listItem}>Assinatura e carimbo do prescritor;</Text>
        <Text style={styles.listItem}>Data.</Text>
      </View>

      <HorizontalButton
        text="Sim"
        onPressCall={handleNavigateToIdentificacaoPacientePage}
        bgColor="#47B5B6"
      />

      <HorizontalButton
        text="Não"
        onPressCall={handleNavigateToEntreContatoPage}
        bgColor="#922D50"
      />
    </View>
  );
}
  
export default AspectosLegais;