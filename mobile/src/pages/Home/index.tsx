import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import logoImage from '../../assets/farmaciaLogoT3.png';
import universityImage from '../../assets/urisan.png';

import styles from './styles';

function Home() {
  const { navigate } = useNavigation();

  function handleNavigateToPossuiReceitaPage() {
    navigate('PossuiReceita');
  }

  return (
    <>
      <View style={styles.header}>
        <Image source={logoImage} resizeMode="contain" style={styles.logo} />
        <Text style={styles.title}>Antibio URISAN</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <RectButton onPress={handleNavigateToPossuiReceitaPage} style={styles.horizontalButton}>
          <Text style={styles.horizontalButtonText}>Novo Atendimento</Text>
        </RectButton>

        <RectButton onPress={() => {}} style={styles.horizontalButton}>
          <Text style={styles.horizontalButtonText}>Buscar Antibiótico</Text>
        </RectButton>

        <RectButton onPress={() => {}} style={styles.horizontalButton}>
          <Text style={styles.horizontalButtonText}>Histórico de Atendimentos</Text>
        </RectButton>
      </View>

      <View style={styles.footerContainer}>
        <View style={styles.university}>
          <Image source={universityImage} style={styles.universityImage} resizeMode='contain' />
          <Text style={styles.universityText}>URI-Santo Ângelo</Text>
        </View>

        <Text style={styles.footerText}>Departamento de Engenharias e Ciência da Computação, Departamento de Ciências da Saúde</Text>
        <Text style={styles.contributors}>Talison Avila, Gabriella Ribeiro da Silva</Text>
        <Text style={styles.contributors}>Dr. Izabel de Almeida Alves</Text>
      </View>
    </>
  );
}
  
export default Home;