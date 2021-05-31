import React, { useEffect, useState, useMemo } from 'react';
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

import {ProductsCartProps} from '../../interfaces/ProductsInterface';
import formatValue from '../../utils/formatValue';
import EmptyCart from '../../components/EmptyCart';


export default function Cart() {
  const [products, setProducts] = useState<ProductsCartProps[]>([]);

  const cartSize = useMemo(() => {
    return products.length || 0;
  },[products])

  const cartTotal = useMemo(() => {
    const cartAmount = products.reduce((acc, product) => {
      const totalPrice = acc + product.price * product.quantity
      return totalPrice
    },0)
    return formatValue(cartAmount);
  },[products])

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
                      {`${item.quantity}x`}
                    </ProductQuantity>
                    <ProductPrice>
                      {formatValue(item.price * item.quantity)}
                    </ProductPrice>

                  </TotalContainer>
                </ProductPriceContainer>
              </ProductTitleContainer>
              <ActionContainer>
                <ActionButton onPress={() =>{}}>
                  <Feather name="plus" color="#e83f5b" size={16} />
                </ActionButton>
                <ActionButton onPress={() =>{}}>
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