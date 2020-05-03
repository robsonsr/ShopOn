import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, ButtonQrCode, ButtonQrCodeText } from './styles';

const HistoricoMenu = ({ navigation }) => {
  return (
    <Container>
      <ButtonQrCode onPress={() => navigation.navigate('HistoricoQrCode')}>
        <Icon name="qrcode" size={50} color="gray" />
        <ButtonQrCodeText>Histórico de consultas por QR Code</ButtonQrCodeText>
      </ButtonQrCode>
      <ButtonQrCode onPress={() => navigation.navigate('HistoricoCompras')}>
        <Icon name="cart-plus" size={50} color="gray" />
        <ButtonQrCodeText>Histórico de compras na loja física</ButtonQrCodeText>
      </ButtonQrCode>
      <ButtonQrCode onPress={() => navigation.navigate('HistoricoRetiradas')}>
        <Icon name="shopping-bag" size={50} color="gray" />
        <ButtonQrCodeText>Histórico de retiradas</ButtonQrCodeText>
      </ButtonQrCode>
    </Container>
  );
};

export default HistoricoMenu;
