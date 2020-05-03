import React, { useState, useEffect } from 'react';
import {
  AddColumn,
  BuyButton,
  BuyButtonText,
  Card,
  ColumnCard,
  Container,
  DescriptionCard,
  Divider,
  ImageCard,
  PriceCard,
  Row,
  SelectQuantity,
  SelectQuantityText,
  TitleCard,
  ContainerDetails,
  Column,
  CardTitleContainer,
  CardTitle,
  CardDetails,
  PaymentMethodText,
  Line,
} from './styles';
import getRealm from '../../services/realm';

const HistoricoComprasDetalhe = ({ route }) => {
  const { details } = route.params;
  const [products, setProducts] = useState([{}]);

  useEffect(() => {
    const loadProducts = async () => {
      const realm = await getRealm();

      const data = realm.objects('Products').filtered('category="cama"');
      setProducts(data);
    };
    loadProducts();
  }, []);

  return (
    <Container>
      <ContainerDetails>
        <Column>
          <CardTitleContainer>
            <CardTitle>Número da compra</CardTitle>
            <CardTitle style={{ color: '#E60014' }}>
              {` #${details.number}`}
            </CardTitle>
          </CardTitleContainer>
          <CardDetails>{`Compra realizada ${details.date}`}</CardDetails>
          <PaymentMethodText>
            Loja 01 - Av. Nossa Senhora da Penha, 114 - Vitória, ES - 29120-030
          </PaymentMethodText>
          <Line />
          <Row>
            <CardDetails>10 produtos</CardDetails>
            <CardDetails>R$ 230.06</CardDetails>
          </Row>
          <Row>
            <CardDetails>descontos</CardDetails>
            <CardDetails>R$ 22.06</CardDetails>
          </Row>
          <Row>
            <CardDetails>total</CardDetails>
            <CardDetails>R$ 208.00</CardDetails>
          </Row>
        </Column>
      </ContainerDetails>
      {products.map((prod) => (
        <Card key={prod.id}>
          <Row>
            <ImageCard source={{ uri: prod.image_url }} />
            <ColumnCard>
              <TitleCard>{prod.name}</TitleCard>
              <DescriptionCard>{prod.description}</DescriptionCard>
            </ColumnCard>
            <AddColumn>
              <PriceCard>{`R$ ${prod.price?.toFixed(2)}`}</PriceCard>
            </AddColumn>
          </Row>
          <Divider />
          <Row>
            <SelectQuantity>
              <SelectQuantityText>1 un.</SelectQuantityText>
            </SelectQuantity>
            <BuyButton>
              <BuyButtonText>comprar</BuyButtonText>
            </BuyButton>
          </Row>
        </Card>
      ))}
    </Container>
  );
};

export default HistoricoComprasDetalhe;
