import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import {
  CartButton,
  CartButtonText,
  CartPricing,
  CartTotalPrice,
  Container
} from './styles'

import { ProductsCartProps } from '../../types/ProductsInterface';
import formatValue from '../../utils/formatValue';
import { RootState } from '../../store/modules/rootReducer';


export default function FloatingCart() {
  const navigate = useNavigation();

  const products: ProductsCartProps[] = useSelector((state: RootState) => state.cart);
  
  const cartSize = useMemo(() => {
    return products.length || 0;
  }, [products]);

  const cartTotal = useMemo(() => {
    const cartAmount = products.reduce((acc, product) => {
      const totalPrice = acc + product.price * product.amount
      return totalPrice
    },0)
    return formatValue(cartAmount);
  },[products])

  return(
    <Container>
      <CartButton onPress={()=> navigate.navigate('Cart')}>
        <Feather name='shopping-cart' size={24} color="#f3f9ff" />
        <CartButtonText>
          {cartSize} {cartSize === 1 ? 'item' : 'itens'}
        </CartButtonText>

        <CartPricing>
          <CartTotalPrice>
            {cartTotal}
          </CartTotalPrice>
        </CartPricing>
        <Feather name='chevron-right' size={24} color="#f3f9ff" />
      </CartButton>
    </Container>
  )
}