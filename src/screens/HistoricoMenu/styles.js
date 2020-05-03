import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const ButtonQrCode = styled(RectButton).attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;
  align-items: center;
  background: white;
  padding: 20px;
  margin: 10px 10px;
  height: 100px;
`;

export const ButtonQrCodeText = styled.Text.attrs({ numberOfLines: 1 })`
  color: #404040;
  padding-left: 30px;
`;
