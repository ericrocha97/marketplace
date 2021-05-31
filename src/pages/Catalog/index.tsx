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
import { useDispatch } from 'react-redux';

import * as CartActions from '../../store/modules/cart/actions';

import {ProductsCatalogProps} from '../../types/ProductsInterface';
import formatValue from '../../utils/formatValue';

import FloatingCart from '../../components/FloatingCart';
import api from '../../services/api';

export default function Catalog() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<ProductsCatalogProps[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('/products')

      setProducts(data)
    }
    loadProducts()
  },[])

  function handleAddToCart(id: string) {
    dispatch(CartActions.addToCartRequest(id))
  }

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
              <ProductButton onPress={() => handleAddToCart(item.id)}>
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