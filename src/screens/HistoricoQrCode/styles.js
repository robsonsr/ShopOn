import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Filters = styled.View``;

export const RowFilters = styled.TouchableOpacity.attrs({ activeOpacity: 0.6 })`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 15px;
`;

export const FilterText = styled.Text`
  color: #404040;
  font-size: 16px;
`;

export const CardFilters = styled.View`
  background: #ffffff;
  padding: 10px 15px;
  margin-bottom: 10px;
`;

export const Subtitle = styled.Text`
  color: #404040;
  font-size: 12px;
  font-weight: bold;
`;

export const Line = styled.View`
  border: 1px solid #e60014;
  margin: 40px 10px 20px 10px;
`;

export const DayBulletButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  position: absolute;
  bottom: 23px;
  left: ${(props) => (width / 100) * props.position}px;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background: ${(props) => (props.selected ? '#e60014' : 'white')};
  border: 2px solid #e60014;
`;

export const DayBulletButtonText = styled.Text`
  position: absolute;
  width: 20px;
  top: -25px;
  left: -3px;
  color: #e60014;
  font-weight: bold;
`;

export const ContainerOrdem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;
  align-items: center;
  padding: 5px 0;
`;

export const OrdemText = styled.Text`
  color: ${(props) => (props.selected ? '#e60014' : '#666666')};
  margin-left: 10px;
`;

export const Title = styled.Text`
  color: #404040;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
`;

export const ListContainer = styled.View`
  margin: 0 10px;
`;

export const Card = styled.View`
  flex-direction: row;
  background: white;
  padding: 5px;
  margin-bottom: 10px;
`;

export const CardImage = styled.Image`
  width: 74px;
  height: 64px;
`;

export const Column = styled.View`
  flex: 3;
  padding-left: 5px;
  justify-content: center;
`;

export const CardTitle = styled.Text.attrs({ numberOfLines: 2 })`
  color: #404040;
  font-weight: bold;
  font-size: 12px;
  margin-bottom: 2px;
  text-align: center;
`;

export const CardDetails = styled.Text`
  font-size: 12px;
  color: #404040;
  margin-top: 2px;
  text-align: center;
`;

export const CardMoreDetailsContainer = styled.View`
  flex: 1.5;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
`;

export const CardMoreDetailsButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: 100%;
  height: 30px;
  border: 1px solid #e60014;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
`;

export const CardMoreDetailsButtonText = styled.Text`
  color: #e60014;
  padding-bottom: 3px;
`;
