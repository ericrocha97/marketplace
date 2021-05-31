import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import {
  Container,
  PriceContainer,
  Product,
  ProductButton,
  ProductButtonText,
  ProductContainer,
  ProductImage,
  ProductList,
  ProductPrice,
  ProductTitle
} from './styles'
import { Feather } from '@expo/vector-icons'

import {ProductsCatalogProps} from '../../interfaces/ProductsInterface';
import formatValue from '../../utils/formatValue';

import FloatingCart from '../../components/FloatingCart';

export default function Catalog() {
  const [products, setProducts] = useState<ProductsCatalogProps[]>([]);

  return(
    <Container>
      <PriceContainer>
        <ProductList
        data={products}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View/>}
        ListFooterComponentStyle={{
          height: 80,
        }}
        renderItem={({item}) =>(
          <Product>
            <ProductImage source={{uri: item.image_url}} />
            <ProductTitle>{item.title}</ProductTitle>
            <PriceContainer>
              <ProductPrice>
                {formatValue(item.price)}
              </ProductPrice>
              <ProductButton onPress={() => {}}>
                <ProductButtonText>
                  Adicionar
                </ProductButtonText>
                <Feather size={30} name="plus-circle" color="#d1d7e9" />
              </ProductButton>
            </PriceContainer>
          </Product>
        )}
        >

        </ProductList>
      </PriceContainer>
      <FloatingCart />
    </Container>
  )
}