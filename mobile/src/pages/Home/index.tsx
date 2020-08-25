import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HorizontalButton from '../../components/HorizontalButton';

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
        <HorizontalButton
          text="Novo Atendimento"
          onPressCall={handleNavigateToPossuiReceitaPage}
          bgColor="#47B5B6"
        />

        <HorizontalButton
          text="Buscar Antibiótico"
          onPressCall={() => {}}
          bgColor="#47B5B6"
        />

        <HorizontalButton
          text="Histórico de Atendimentos"
          onPressCall={() => {}}
          bgColor="#47B5B6"
        />
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