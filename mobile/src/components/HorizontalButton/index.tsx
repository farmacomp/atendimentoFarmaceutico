import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

interface ButtonProps {
  text: string;
  onPressCall(): any;
}

const HorizontalButton: React.FC<ButtonProps> = ({ text, onPressCall }) => {
  return (
    <RectButton onPress={onPressCall} style={styles.horizontalButton}>
      <Text style={styles.horizontalButtonText}>{text}</Text>
    </RectButton>
  );
}
  
export default HorizontalButton;