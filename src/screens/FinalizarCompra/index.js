import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import Barcode from 'react-native-barcode-builder';
import getRealm from '../../services/realm';
import {
  CardDetails,
  CardTitle,
  CardTitleContainer,
  Container,
  ContainerDetails,
  Line,
  PaymentMethodText,
  Row,
  ContainerRetirada,
  RowButton,
  Content,
  ContentText,
  TextFree,
  Divider,
  ButtonFinish,
  ButtonFinishText,
} from './styles';

const FinalizarCompra = ({ route, navigation }) => {
  const details = {
    number: new Date().getTime(),
    date: `${new Date().getUTCDate()}/${new Date().getUTCMonth()}/${new Date().getUTCFullYear()}`
  };


  const listaCompraReducer = useSelector(({ ListaCompraReducer }) => ListaCompraReducer)
  console.log("route", route.params)
  const [showDetails, setShowDetails] = useState(true);
  const [horario, setHorario] = useState("")
  const [date, setDate] = useState("");
  const getHorario = () => {
    if (route.params) {
      console.log("ll", route.params.horarioSelecionado)
      let ms = new Date().getTime() + route.params.horarioSelecionado;
      const date = new Date(ms)
      setHorario(`${date.getHours()}:${date.getMinutes()}`)
      setDate(`${date.getUTCDate()}/${date.getUTCMonth()}/${date.getUTCFullYear()}`)
    }
  }
  useEffect(() => {
    getHorario();
    const loadProducts = async () => {
      const realm = await getRealm();
    };
    loadProducts();
  }, []);

  return (
    <Container>
      <CardTitleContainer>
        <CardTitle>resumo da compra</CardTitle>
        <CardTitle style={{ color: '#E60014' }}>
          {` #${details.number}`}
        </CardTitle>
      </CardTitleContainer>
      <ContainerDetails>
        <CardDetails>{`Compra realizada ${details.date}`}</CardDetails>
        <PaymentMethodText>
          Loja 01 - Av. Nossa Senhora da Penha, 114 - Vitória, ES - 29120-030
        </PaymentMethodText>
        <Line />
        <Row>
          <CardDetails>{listaCompraReducer.produtos.length} produtos</CardDetails>
          <CardDetails>R$ {listaCompraReducer.valorTotal?.toFixed(2)}</CardDetails>
        </Row>
        <Row>
          <CardDetails>desconto</CardDetails>
          <CardDetails>R$ 22.06</CardDetails>
        </Row>
        <Row style={{ marginTop: 5, fontSize: 16 }}>
          <CardDetails style={{ fontWeight: 'bold' }}>total</CardDetails>
          <CardDetails style={{ fontWeight: 'bold' }}>R$ {(listaCompraReducer.valorTotal - 22.06).toFixed(2)}</CardDetails>
        </Row>
      </ContainerDetails>
      <ContainerRetirada>
        <RowButton onPress={() => setShowDetails(!showDetails)}>
          <CardDetails>retirada</CardDetails>
          <Icon
            name="angle-down"
            size={20}
            color="#666666"
            style={{ paddingTop: 1.5 }}
          />
        </RowButton>
      </ContainerRetirada>
      {showDetails && (
        <Content>
          <ContentText style={{ color: '#E60014' }}>
            Americanas - Rua Santo agostinho, 113 Vila Velha - Espírito Santo,
            Brasil
          </ContentText>
          <ContentText>Brenda de Almeida Gabriel</ContentText>
          <ContentText>999.999.999-09</ContentText>
          {horario != '' &&
            <Row style={{ justifyContent: 'flex-start' }}>
              <ContentText>Agendado para às </ContentText>
              <ContentText style={{ fontWeight: 'bold' }}>{horario} </ContentText>
              <ContentText>do dia </ContentText>
              <ContentText style={{ fontWeight: 'bold' }}>{date}</ContentText>
            </Row>
          }
        </Content>
      )}
      <CardTitle style={{ padding: 10 }}>mostre no caixa</CardTitle>
      <Barcode value="Hello World" format="CODE128" />
      <TextFree>
        *certifique-se de ter pegado todos os itens do seu carrinho. importante:
        para validar a sua compra é necessário mostrar o código de barras ao
        caixa.
      </TextFree>
      <Divider />
      <TextFree>
        Todas as regras e promoções são válidas apenas para produtos vendidos da
        loja específica. O preço válido será o da finalização da compra. Havendo
        divergência, prevalecerá o menor preço ofertado. B2W - Companhia Digital
        / CNPJ: 00.776.574/006-60 / Inscrição Estadual: 492.513.778.117 /
        Endereço Rua Sacadura Cabral, 102 - Rio de Janeiro, RJ - 20081-902
      </TextFree>
      <ButtonFinish
        onPress={() => navigation.navigate("ModoLojaHomeScreen")}
      >
        <ButtonFinishText>finalizar compra</ButtonFinishText>
      </ButtonFinish>
    </Container>
  );
};

export default FinalizarCompra;
