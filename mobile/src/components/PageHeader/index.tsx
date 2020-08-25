import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

interface PageHeaderProps {
  title: string;
  stage: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ stage, title }) => {
  const stageComponent = stage.length > 1 ?
    <Text style={styles.warning}>ATENÇÃO:</Text> :
    <Text style={styles.stage}>Etapa {stage}/X:</Text>
  ;

  return (
    <View style={styles.container}>      
      {stageComponent}
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default PageHeader;