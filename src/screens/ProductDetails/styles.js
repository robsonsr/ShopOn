import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const Container = styled.ScrollView`
  flex: 1;
  background: #eaeaea;
`;

export const ScrollView = styled.ScrollView`
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

export const ToggleContainer = styled.View``;

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
  background: white;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: #404040;
  font-weight: bold;
`;

export const UtilizedProducts = styled.View``;

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

export const Suggestions = styled.View`
  margin-top: 10px;
  background: white;
  padding: 10px 0;
`;

export const CardVertical = styled.View`
  width: 100px;
  margin: 15px 10px;
`;

export const ImageCardVertical = styled.Image`
  width: 100px;
  height: 100px;
`;

export const TitleCardVertical = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #666666;
  font-size: 9px;
`;

export const PriceCardVertical = styled.Text`
  color: #666666;
  font-size: 9px;
`;

export const SubtitleRecipe = styled.View`
  flex-direction: row;
`;

export const TitleRecipe = styled.Text`
  font-size: 12px;
  color: #666666;
`;

export const SubtitleRecipeText = styled.Text`
  font-size: 12px;
  color: #666666;
  padding: 10px 0;
`;

export const LineRecipeText = styled.Text`
  font-size: 13px;
  color: #666666;
  line-height: 18px;
  text-align: justify;
  padding: 3px 0;
`;

export const ContentRecipe = styled.View`
  background: white;
  padding: 10px;
`;

export const RowToggle = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
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
  width: 75px;
  border-radius: 8px;
  margin: 15px 5px 0 0;
`;

export const SelectQuantityText = styled.Text`
  color: #666666;
  padding: 0 5px;
`;
