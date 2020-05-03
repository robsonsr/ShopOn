import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const Container = styled.ScrollView`
  flex: 1;
  background: #f0f0f0;
`;

export const ScrollView = styled.ScrollView`
  width: ${width}px;
  background: white;
`;

export const Image = styled.Image`
  width: ${width / 2}px;
  height: 200px;
  resize-mode: contain;
`;

export const DetailsProduct = styled.View`
  padding: 10px;
  background: white;
`;

export const NameProduct = styled.Text``;

export const PriceProduct = styled.Text`
  text-align: right;
`;

export const Description = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: white;
  margin-top: 10px;
  padding: 10px;
`;

export const InfoTecnics = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: white;
  margin-top: 5px;
  padding: 10px;
`;

export const Name = styled.Text`
  font-size: 13px;
  color: #666666;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  padding: 10px 0;
  color: #404040;
`;

export const ContainerVideoDescription = styled.View`
  padding: 10px;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: #404040;
  padding: 10px 0;
  font-weight: bold;
`;

export const UtilizedProducts = styled.View``;

export const Card = styled.View`
  background: white;
  padding: 10px;
`;

export const ImageCard = styled.Image`
  width: 50px;
  height: 50px;
  flex: 1;
`;

export const ColumnCard = styled.View`
  flex: 3;
  height: 70px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Divider = styled.View`
  border-bottom-width: 1px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const TitleCard = styled.Text``;

export const DescriptionCard = styled.Text``;

export const AddColumn = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const PriceCard = styled.Text``;

export const Suggestions = styled.View``;

export const CardVertical = styled.View``;

export const ImageCardVertical = styled.Image``;

export const TitleCardVertical = styled.Text``;

export const PriceCardVertical = styled.Text``;
