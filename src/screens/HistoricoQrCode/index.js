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
  CardImage,
  Column,
  CardTitle,
  CardDetails,
  CardMoreDetailsContainer,
  CardMoreDetailsButton,
  CardMoreDetailsButtonText,
} from './styles';

const HistoricoQrCode = ({ navigation }) => {
  const [showFilter, setShowFilter] = useState(true);
  const [periodDays, setPeriodDays] = useState(7);
  const [order, setOrder] = useState(true);

  const [historicalData, setHistoricalData] = useState([]);

  useEffect(() => {
    const loadHistoricalData = async () => {
      const realm = await getRealm();

      const data = realm.objects('Historical').sorted('date', order);
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

      <Title>consultas</Title>
      <ListContainer>
        {historicalData.map((histo) => (
          <Card key={histo.id}>
            <CardImage
              source={{
                uri: histo.url,
              }}
            />
            <Column>
              <CardTitle>{histo.title}</CardTitle>
              <CardDetails>{`Visitado às ${histo.date.toLocaleString()}`}</CardDetails>
            </Column>
            <CardMoreDetailsContainer>
              <CardMoreDetailsButton
                onPress={() =>
                  navigation.navigate('ProductDetails', {
                    category: histo.category,
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

export default HistoricoQrCode;
