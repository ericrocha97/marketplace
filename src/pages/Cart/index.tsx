import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View } from 'react-native';
import {
  ActionButton,
  ActionContainer,
  Container,
  Product,
  ProductContainer,
  ProductImage,
  ProductList,
  ProductPrice,
  ProductPriceContainer,
  ProductQuantity,
  ProductSinglePrice,
  ProductTitle,
  ProductTitleContainer,
  SubTotalValue,
  TotalContainer,
  TotalProductsContainer,
  TotalProductsText
} from './styles'
import { Feather } from '@expo/vector-icons'
import * as CartActions from '../../store/modules/cart/actions';
import { RootState } from '../../store/modules/rootReducer';

import {ProductsCartProps} from '../../types/ProductsInterface';
import formatValue from '../../utils/formatValue';
import EmptyCart from '../../components/EmptyCart';


export default function Cart() {
  const dispatch = useDispatch();
  const products: ProductsCartProps[] = useSelector((state: RootState) => state.cart);
  

  const cartSize = useMemo(() => {
    return products.length || 0;
  },[products])

  const cartTotal = useMemo(() => {
    const cartAmount = products.reduce((acc, product) => {
      const totalPrice = acc + product.price * product.amount
      return totalPrice
    },0)
    return formatValue(cartAmount);
  },[products])

  function incrementAmount({id, amount}: ProductsCartProps) {
    dispatch(CartActions.updateAmountRequest( id, amount+1));
  }

  function decrementAmount({id, amount}: ProductsCartProps) {
    dispatch(CartActions.updateAmountRequest(id , amount-1));
  }

  function removeFromCart({id}: ProductsCartProps) {
    dispatch(CartActions.removeFromCart(id));
  }

  function handleIncrementAmount(product : ProductsCartProps) {
    incrementAmount(product);
  }

  function handleDecrementAmount(product : ProductsCartProps) {
    if(product.amount > 1) {
      decrementAmount(product)
    }else{
      removeFromCart(product)
    }
  }

  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={item => String(item.id)}
          ListEmptyComponent={<EmptyCart/>}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View/>}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem={({item}) =>(
            <Product>
              <ProductImage source={{uri: item.image_url}} />
              <ProductTitleContainer>
                <ProductTitle>
                  {item.title}
                </ProductTitle>

                <ProductPriceContainer>
                  <ProductSinglePrice>
                    {formatValue(item.price)}
                  </ProductSinglePrice>

                  <TotalContainer>
                    <ProductQuantity>
                      {`${item.amount}x`}
                    </ProductQuantity>
                    <ProductPrice>
                      {formatValue(item.price * item.amount)}
                    </ProductPrice>

                  </TotalContainer>
                </ProductPriceContainer>
              </ProductTitleContainer>
              <ActionContainer>
                <ActionButton onPress={() => handleIncrementAmount(item)}>
                  <Feather name="plus" color="#e83f5b" size={16} />
                </ActionButton>
                <ActionButton onPress={() => handleDecrementAmount(item)}>
                  <Feather name="minus" color="#e83f5b" size={16} />
                </ActionButton>
              </ActionContainer>
            </Product>
          )}
        />
      </ProductContainer>
      <TotalProductsContainer>
        <Feather name="shopping-cart" color="#fff" size={24} />
        <TotalProductsText>
          {cartSize} {cartSize === 1 ? 'item' : 'itens'}
        </TotalProductsText>
        <SubTotalValue>{cartTotal}</SubTotalValue>
      </TotalProductsContainer>
    </Container>
  )
}