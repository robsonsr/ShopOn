/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import getRealm from './src/services/realm';

import DestaquesStack from './src/stacks/DestaquesStack';
import ProductDetails from './src/stacks/ProductDetails';
import InformationQRCodeStack from './src/stacks/InformationQRCodeStack';
import CustomDrawerContent from './src/stacks/CustomDrawerContent';

const Drawer = createDrawerNavigator();

const App = () => {
  const addDatabaseProducts = async () => {
    const realm = await getRealm();

    realm.write(() => {
      realm.create(
        'Products',
        {
          id: 5,
          name: 'Chocolate hersheys 92g-ta m-amargo',
          description: '',
          code: '0001',
          category: 'comida',
          image_url:
            'https://images-americanas.b2w.io/produtos/01/00/img6/89149/2/89149255_1GG.jpg',
          price: 7.9,
          technical_information: '',
          starts: 4,
          votes: 42,
        },
        'modified',
      );
      realm.create(
        'Products',
        {
          id: 4,
          name: 'Tablete De Chocolate Cookies Creme 87g - Hersheys',
          description: '',
          code: '0001',
          category: 'comida',
          image_url:
            'https://images-americanas.b2w.io/produtos/01/00/oferta/50983/2/50983216_1GG.jpg',
          price: 5.1,
          technical_information: '',
          starts: 5,
          votes: 52,
        },
        'modified',
      );
      realm.create(
        'Products',
        {
          id: 3,
          name: 'Leite Condensado Soymilke Soja 330 Gramas',
          description: '',
          code: '0001',
          category: 'comida',
          image_url:
            'https://images-americanas.b2w.io/produtos/01/00/oferta/58680/7/58680794_1GG.jpg',
          price: 12.66,
          technical_information: '',
          starts: 5,
          votes: 52,
        },
        'modified',
      );
      realm.create(
        'Products',
        {
          id: 2,
          name: 'Bala de Gelatina Beijos Morango 100g - Fini',
          description: '',
          code: '0004',
          category: 'comida',
          image_url:
            'https://images-americanas.b2w.io/produtos/01/00/img7/01/00/item/6889/6/6889657_1GG.jpg',
          price: 3.99,
          technical_information: '',
          starts: 5,
          votes: 52,
        },
        'modified',
      );
      realm.create(
        'Products',
        {
          id: 1,
          name: 'Balas De Gelatina Tubes Morango 240g - Fini',
          description: '',
          code: '0005',
          category: 'comida',
          image_url:
            'https://images-americanas.b2w.io/produtos/01/00/img2/143873/9/143873984_1GG.jpg',
          price: 7.99,
          technical_information: '',
          starts: 3,
          votes: 52,
        },
        'modified',
      );

      realm.create(
        'Products',
        {
          id: 6,
          name:
            'Porta Travesseiro MR Microfibra 01 Peça Matelado Ultrassônico - Cinza',
          description:
            'Os Porta Travesseiros Avulsos da Coleção MR são ideais para complementar sua decoração. Com cores atuais, combinam facilmente com outros kits e acessórios, deixando o ambiente mais moderno e elegante. Confeccionado em tecido de Microfibra,  conserva as cores por mais tempo, mantendo-se com aspecto de novinho por um tempo maior.',
          code: '0001',
          category: 'cama',
          image_url:
            'https://images-americanas.b2w.io/produtos/01/00/img/29622/3/29622354_1GG.jpg',
          price: 120.9,
          technical_information:
            'Código	29622355,Código de barras	7898647351509,Peso	0.25,Marca	Paulo Cezar Enxovais,Fabricante	Paulo Cezar Enxovais,Specifications	Microfibra/Paulo Cezar Enxovais',
          starts: 3,
          votes: 52,
        },
        'modified',
      );
      realm.create(
        'Products',
        {
          id: 7,
          name: 'Cobertor Casal Microfibra Liso Cinza Claro 1,80x2,20m Camesa',
          description:
            'O Cobertor Casal Microfibra tem um toque macio que te irá te abraçar. Seu tecido é aconchegante e super flanelado',
          code: '0001',
          category: 'cama',
          image_url:
            'https://images-americanas.b2w.io/produtos/01/00/img/1617543/8/1617543831_1GG.jpg',
          price: 58.58,
          technical_information:
            'Código	1617543822,Cor	Cinza claro,Tamanho	Casal,Peso	1.2',
          starts: 4,
          votes: 52,
        },
        'modified',
      );
      realm.create(
        'Products',
        {
          id: 8,
          name:
            'Luminária De Mesa Led Supimpa Laranja 4w Luz Branca Bivolt Avant',
          description: '',
          code: '0001',
          category: 'cama',
          image_url:
            'https://images-americanas.b2w.io/produtos/01/00/img1/104003/1/104003175_1GG.jpg',
          price: 50.58,
          technical_information:
            'Código	104003172,Código de barras	7899825503055,Ambientes recomendados	Quarto e Escritório,Voltagem	Bivolt,Cor	Laranja,Potência	4W,Material	Plástico,Marca	AVANT,Peso	0.32',
          starts: 5,
          votes: 52,
        },
        'modified',
      );

      realm.create(
        'Products',
        {
          id: 11,
          name:
            'Console Playstation 4 1TB + Controle Wireless DualShock 4 Edição Limitada Days Of Play',
          description:
            'Mais leve e mais fino, o sistema PlayStation 4 tem disco rígido de 1 TB para tudo o que há de melhor em jogos, músicas e muito mais!',
          code: '0001',
          category: 'smarttv',
          image_url:
            'https://images-americanas.b2w.io/produtos/01/00/image/134415/7/134415797_1GG.jpg',
          price: 2099.99,
          technical_information:
            'Código	134415789, Código de barras	0711719528180, Wireless (Conexão s/ fio)	sim, Tensão/Voltagem	Bivolt, Garantia 	1 ano, Marca	Sony, Plataforma	PlayStation 4, HD	1TB, Conexões	1 HDMI',
          starts: 5,
          votes: 52,
        },
        'modified',
      );
      realm.create(
        'Products',
        {
          id: 12,
          name: 'Controle Sem Fio Dualshock 4 Preto - PS4',
          description: '',
          code: '0001',
          category: 'smarttv',
          image_url:
            'https://images-americanas.b2w.io/produtos/01/00/img9/133746/7/133746754_1GG.jpg',
          price: 218.68,
          technical_information:
            'Código	133746746, Código de barras	0711719520641, Conexões	1 PORTA MICRO USB, Voltagem 2	5V, Funcionalidade	NÃO SE APLICA, Dimensões aproximadas da embalagem (cm) - AxLxP	18.41 X 17.14 X 6.35, Peso Aproximado da Embalagem do produto (kg)	0.335, Plataforma	PlayStation 4, Conteúdo da Embalagem	1 Controle sem fio DUALSHOCK 4 1 Manual de instruções, Garantia do Fornecedor	3 Meses, Dimensões do produto - cm (AxLxP)	18.41 X 17.14 X 6.35, Material/Composição	POLIETILENO, Referência do Modelo	CUH-ZCT2U, SAC do Fabricante	0800-888-7669, Fabricante	SONY, Peso liq. do produto (Kg)	0.335,',
          starts: 5,
          votes: 52,
        },
        'modified',
      );
    });
  };
  console.log(11);
  addDatabaseProducts();
  return (
    <>
      <StatusBar backgroundColor="#A71414" />
      <NavigationContainer>
        <Drawer.Navigator
          // drawerContentOptions={{
          //   itemStyle: {
          //     marginVertical: 10
          //   }
          // }}
          initialRouteName="DestaquesStack"
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          openByDefault={false}
        >
          <Drawer.Screen name="DestaquesStack" component={DestaquesStack} />
          <Drawer.Screen
            name="ProductDetailsStack"
            component={ProductDetails}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
