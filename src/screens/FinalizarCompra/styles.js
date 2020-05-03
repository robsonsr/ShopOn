import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const ContainerDetails = styled.View`
  background: white;
  padding: 10px;
  min-height: 170px;
  margin: 3px 0;
`;

export const Line = styled.View`
  border-bottom-width: 0.5px;
  border-color: #bdbdbd;
  margin: 10px 0;
`;

export const CardTitle = styled.Text.attrs({ numberOflines: 1 })`
  color: #404040;
  font-weight: bold;
  font-size: 18px;
`;

export const CardTitleContainer = styled.View`
  flex-direction: row;
  padding: 10px;
  margin-top: 10px;
`;

export const CardDetails = styled.Text.attrs({ numberOfLines: 1 })`
  font-size: 12px;
  color: #404040;
  margin-top: 2px;
`;

export const PaymentMethodText = styled.Text.attrs({ numberOfLines: 1 })`
  font-size: 12px;
  color: #404040;
  margin-top: 5px;
`;

export const Divider = styled.View`
  border-bottom-width: 0.5px;
  border-color: #bdbdbd;
  padding: 5px 0;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerRetirada = styled.View``;

export const RowButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  background: white;
`;

export const Content = styled.View`
  padding: 10px;
  background: white;
  margin: 3px 0;
`;

export const ContentText = styled.Text`
  padding: 5px 0;
  font-size: 12px;
  color: #666666;
`;

export const TextFree = styled.Text`
  padding: 10px;
  font-size: 12px;
  color: #666666;
`;

export const ButtonFinish = styled.TouchableOpacity`
  width: 90%;
  height: 44px;
  margin: 20px 0;
  align-self: center;
  background: #e60014;
  justify-content: center;
  align-items: center;
`;

export const ButtonFinishText = styled.Text`
  padding: 10px;
  font-size: 16px;
  color: white;
`;
