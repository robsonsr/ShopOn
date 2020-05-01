import React, { useState, useEffect } from 'react';
import ReaderQRCode from '../../components/ReaderQRCode';
import { Container, ScrollView, Image, NameProduct, PriceProduct, DetailsProduct } from './styles';
import getRealm from '../../services/realm';

const ProductDetails = (props) => {
  const [code, setCode] = useState('0001');
  const [product, setProduct] = useState({});


  const addDatabaseProducts = async () => {
    const realm = await getRealm();

    realm.write(() => {
      realm.create('Products', {
        id: 1,
        name: 'Chocolate Ao Leite Garoto 90 G',
        description: '',
        code: '0001',
        category: 'comida',
        image_url: 'https://images-americanas.b2w.io/produtos/01/00/img1/104998/2/104998230_1GG.jpg',
        price: 6.91,
        technical_information: '',
        starts: 4,
        votes: 42,
      })
    })
  }

  const recoverProductDetails = async () => {
    const realm = await getRealm();
    const data = realm.objects('Products');
    setProduct(data[0].values)
  }

  useEffect(() => {
    recoverProductDetails()
  }, [])

  return code.length > 0 ? (
    <Container>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Image source={{ uri: product.image_url }} />
        <Image source={{ uri: product.image_url }} />
      </ScrollView>
      <DetailsProduct>
        <NameProduct>{product.name}</NameProduct>
        <NameProduct>{product.description}</NameProduct>
        <PriceProduct>{product?.price.toFixed(2)}</PriceProduct>
      </DetailsProduct>
    </Container>
  ) : (
      <ReaderQRCode onCodeDetected={(code) => setCode(code)} />
    )
}

export default ProductDetails;
