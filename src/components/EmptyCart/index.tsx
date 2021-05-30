
import React from 'react';
//import LottieView from 'lottie-react-native';
import { Feather } from '@expo/vector-icons'


//import emptyCartAnimation from '../../../EmptyCartAnimation.json';

import { Container, EmptyCartContainer, EmptyCartText } from './styles';

export default function EmptyCart() {
  return (
    <Container>
      <Feather name='slash' size={38} color="#f3f9ff" />
      <EmptyCartText>Seu carrinho está vazio</EmptyCartText>
    </Container>
  );
}