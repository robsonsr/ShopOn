import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const ContainerDetails = styled.View`
  background: white;
  padding: 10px;
  min-height: 170px;
  margin-bottom: 20px;
`;

export const Line = styled.View`
  border-bottom-width: 0.5px;
  border-color: #bdbdbd;
  margin: 10px 0;
`;

export const Column = styled.View`
  flex: 3;
  padding: 5px;
  justify-content: center;
`;

export const CardTitle = styled.Text.attrs({ numberOflines: 1 })`
  color: #404040;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 2px;
`;

export const CardTitleContainer = styled.View`
  flex-direction: row;
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

export const Card = styled.View`
  background: #ffffff;
  padding: 10px;
  margin: 5px 0;
`;

export const ImageCard = styled.Image`
  flex: 1;
  width: 48px;
  height: 48px;
`;

export const ColumnCard = styled.View`
  flex: 3;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
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

export const TitleCard = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: #404040;
  font-weight: bold;
  font-size: 12px;
`;

export const DescriptionCard = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 12px;
`;

export const AddColumn = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const PriceCard = styled.Text`
  position: absolute;
  bottom: 8px;
  color: #404040;
`;

export const BuyButton = styled.TouchableOpacity`
  background: #e60014;
  padding: 8px;
  width: 120px;
  justify-content: center;
  align-items: center;
  margin: 15px 5px 0 0;
`;

export const BuyButtonText = styled.Text`
  color: white;
`;

export const SelectQuantity = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  background: #eaeaea;
  padding: 8px;
  width: 60px;
  border-radius: 8px;
  margin: 15px 5px 0 0;
`;

export const SelectQuantityText = styled.Text`
  color: #666666;
  padding: 0 5px;
`;
