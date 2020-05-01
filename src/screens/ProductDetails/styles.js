import styled from 'styled-components/native';
import { Dimensions } from 'react-native'
const { width } = Dimensions.get('screen')

export const Container = styled.ScrollView`
  flex: 1;
  background: #f0f0f0;
`;

export const ScrollView = styled.ScrollView`
  width: ${width}px;
`;


export const Image = styled.Image`
  width: 200px;
  height: 200px;
  resize-mode: contain;
`;

export const DetailsProduct = styled.View`padding: 10px`;

export const NameProduct = styled.Text``;

export const PriceProduct = styled.Text`text-align: right`;
