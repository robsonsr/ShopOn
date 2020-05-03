import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import getRealm from '../../services/realm';

import {
  Container,
  Filters,
  RowFilters,
  FilterText,
  CardFilters,
  Subtitle,
  Line,
  DayBulletButton,
  DayBulletButtonText,
  ContainerOrdem,
  OrdemText,
  Title,
  ListContainer,
  Card,
  Column,
  CardTitle,
  CardDetails,
  CardMoreDetailsContainer,
  CardMoreDetailsButton,
  CardMoreDetailsButtonText,
  CardTitleContainer,
  PaymentMethodText,
  PriceTotalText,
} from './styles';

const HistoricoRetiradas = ({ navigation }) => {
  const [showFilter, setShowFilter] = useState(true);
  const [periodDays, setPeriodDays] = useState(7);
  const [order, setOrder] = useState(true);

  const [historicalData, setHistoricalData] = useState([]);

  useEffect(() => {
    const loadHistoricalData = async () => {
      // const realm = await getRealm();

      // const data = realm.objects('Historical').sorted('date', order);
      const data = [
        {
          id: 1,
          number: '122641315',
          date: `${new Date().getDate()}/${
            new Date().getMonth() + 1
            }/${new Date().getFullYear()}`,
          payment_type: 'Cartão de Crédito',
          price_total: 1299.9,
        },
        {
          id: 2,
          number: '345435663',
          date: `${new Date().getDate() + 1}/${
            new Date().getMonth() + 1
            }/${new Date().getFullYear()}`,
          payment_type: 'Dinheiro',
          price_total: 256.3,
        },
        {
          id: 3,
          number: '435663464',
          date: `${new Date().getDate() + 2}/${
            new Date().getMonth() + 1
            }/${new Date().getFullYear()}`,
          payment_type: 'Cartão de Debito',
          price_total: 112.9,
        },
        {
          id: 4,
          number: '22334245',
          date: `${new Date().getDate() + 3}/${
            new Date().getMonth() + 1
            }/${new Date().getFullYear()}`,
          payment_type: 'Dinheiro',
          price_total: 325.65,
        },
        {
          id: 5,
          number: '498567879',
          date: `${new Date().getDate() + 4}/${
            new Date().getMonth() + 1
            }/${new Date().getFullYear()}`,
          payment_type: 'Cartão de Debito',
          price_total: 2499.9,
        },
      ];

      setHistoricalData(data);
    };

    loadHistoricalData();
  }, [order]);

  return (
    <Container>
      <Filters>
        <RowFilters>
          <FilterText>filtros</FilterText>
          <Icon
            name={showFilter ? 'angle-up' : 'angle-down'}
            size={20}
            color="#404040"
          />
        </RowFilters>
        <CardFilters>
          <Subtitle>por periodo (dias)</Subtitle>
          <Line />
          <DayBulletButton
            selected={periodDays === 7}
            position={5}
            onPress={() => setPeriodDays(7)}>
            <DayBulletButtonText style={{ left: 2 }}>7</DayBulletButtonText>
          </DayBulletButton>
          <DayBulletButton
            selected={periodDays === 15}
            position={26}
            onPress={() => setPeriodDays(15)}>
            <DayBulletButtonText>15</DayBulletButtonText>
          </DayBulletButton>
          <DayBulletButton
            selected={periodDays === 30}
            position={47}
            onPress={() => setPeriodDays(30)}>
            <DayBulletButtonText>30</DayBulletButtonText>
          </DayBulletButton>
          <DayBulletButton
            selected={periodDays === 60}
            position={68}
            onPress={() => setPeriodDays(60)}>
            <DayBulletButtonText>60</DayBulletButtonText>
          </DayBulletButton>
          <DayBulletButton
            selected={periodDays === 90}
            position={90}
            onPress={() => setPeriodDays(90)}>
            <DayBulletButtonText>90</DayBulletButtonText>
          </DayBulletButton>
        </CardFilters>
        <CardFilters>
          <Subtitle>por ordem</Subtitle>
          <ContainerOrdem onPress={() => setOrder(true)}>
            <Icon
              style={{ paddingTop: 2 }}
              name="check"
              size={15}
              color={order ? '#E60014' : 'white'}
            />
            <OrdemText>mais novos</OrdemText>
          </ContainerOrdem>
          <ContainerOrdem onPress={() => setOrder(false)}>
            <Icon
              style={{ paddingTop: 2 }}
              name="check"
              size={15}
              color={!order ? '#E60014' : 'white'}
            />
            <OrdemText>mais antigos</OrdemText>
          </ContainerOrdem>
        </CardFilters>
      </Filters>

      <Title>compras</Title>
      <ListContainer>
        {historicalData.map((histo) => (
          <Card key={histo.id}>
            <Column>
              <CardTitleContainer>
                <CardTitle>Número da compra</CardTitle>
                <CardTitle style={{ color: '#E60014' }}>
                  {` #${histo.number}`}
                </CardTitle>
              </CardTitleContainer>
              <CardDetails>{`Compra realizada ${histo.date}`}</CardDetails>
              <PaymentMethodText>
                {`forma de pagamento: ${histo.payment_type}`}
              </PaymentMethodText>
            </Column>
            <CardMoreDetailsContainer>
              <PriceTotalText>
                {`R$ ${histo.price_total.toFixed(2)}`}
              </PriceTotalText>
              <CardMoreDetailsButton
                onPress={() =>
                  navigation.navigate('HistoricoComprasDetalhe', {
                    details: { date: histo.date, number: histo.number },
                  })
                }
              >
                <CardMoreDetailsButtonText>ver mais</CardMoreDetailsButtonText>
              </CardMoreDetailsButton>
            </CardMoreDetailsContainer>
          </Card>
        ))}
      </ListContainer>
    </Container>
  );
};

export default HistoricoRetiradas;
