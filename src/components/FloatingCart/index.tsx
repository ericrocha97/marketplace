import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import {
  CartButton,
  CartButtonText,
  CartPricing,
  CartTotalPrice,
  Container
} from './styles'

export default function FloatingCart() {
  const navigate = useNavigation();
  return(
    <Container>
      <CartButton onPress={()=> navigate.navigate('Cart')}>
        <Feather name='shopping-cart' size={24} color="#f3f9ff" />
        <CartButtonText>
          2 itens
        </CartButtonText>

        <CartPricing>
          <CartTotalPrice>
            R$ 200,00
          </CartTotalPrice>
        </CartPricing>
        <Feather name='chevron-right' size={24} color="#f3f9ff" />
      </CartButton>
    </Container>
  )
}