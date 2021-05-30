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

export default function App() {
  const [products, setProducts] = useState<ProductsCatalogProps[]>([]);
  
  useEffect(()=>{
    setProducts([{
      id: "1",
      title: "Assinatura Trimestral",
      image_url: "https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png",
      price: 150
    },
    {
      id: "2",
      title: "Assinatura Anual",
      image_url: "https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/annual_subscription_qyolci.png",
      price: 540
    },
    {
      id: "3",
      title: "Assinatura Anual",
      image_url: "https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/annual_subscription_qyolci.png",
      price: 540
    }])
  },[])

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