import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

interface PageHeaderProps {
  title: string;
  stage: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ stage, title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
      </View>

      <Text style={styles.stage}>Etapa {stage}/X:</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default PageHeader;