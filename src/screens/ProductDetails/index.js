import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import ReaderQRCode from '../../components/ReaderQRCode';
import getRealm from '../../services/realm';
import {
  AddColumn,
  Card,
  CardVertical,
  ColumnCard,
  Container,
  Description,
  DescriptionCard,
  DetailsProduct,
  Image,
  ImageCard,
  ImageCardVertical,
  InfoTecnics,
  Name,
  NameProduct,
  PriceCard,
  PriceCardVertical,
  PriceProduct,
  ScrollView,
  SubTitle,
  Suggestions,
  Title,
  TitleCard,
  TitleCardVertical,
  UtilizedProducts,
  ContainerVideoDescription,
  Divider,
  Row
} from './styles';
import { WebView } from 'react-native-webview';

const ProductDetails = () => {
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
        image_url:
          'https://images-americanas.b2w.io/produtos/01/00/img1/104998/2/104998230_1GG.jpg',
        price: 6.91,
        technical_information: '',
        starts: 4,
        votes: 42,
      });
    });
  };

  const recoverProductDetails = async () => {
    const realm = await getRealm();
    const data = realm.objects('Products');
    setProduct(data[0].values);
  };

  useEffect(() => {
    recoverProductDetails();
  }, []);

  return code.length > 0 ? (
    <Container>
      <ContainerVideoDescription>
        <Title>uma dica pra voce</Title>
        <WebView
          style={{ alignSelf: 'stretch', height: 205 }}
          javaScriptEnabled={true}
          source={{ uri: 'https://www.youtube.com/embed/QnzFZc9f4R4' }}
        />

        <SubTitle>receita</SubTitle>
      </ContainerVideoDescription>

      <SubTitle>produtos usados</SubTitle>
      <UtilizedProducts>
        <Card>
          <Row>
            <ImageCard source={{ uri: product.image_url }} />
            <ColumnCard>
              <TitleCard>{product.name}</TitleCard>
              <DescriptionCard>{product.description}</DescriptionCard>
            </ColumnCard>
            <AddColumn>
              <PriceCard>{product.price?.toFixed(2)}</PriceCard>
            </AddColumn>
          </Row>
          <Divider />
        </Card>
      </UtilizedProducts>
      <Suggestions>
        <CardVertical>
          <ImageCardVertical source={{ uri: product.image_url }} />
          <TitleCardVertical>{product.name}</TitleCardVertical>
          <PriceCardVertical>{product.price?.toFixed(2)}</PriceCardVertical>
        </CardVertical>
      </Suggestions>
    </Container>
  ) : (
      <ReaderQRCode onCodeDetected={(qrcode) => setCode(qrcode)} />
    );
};

export default ProductDetails;
