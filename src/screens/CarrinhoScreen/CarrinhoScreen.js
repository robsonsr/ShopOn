
import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    Dimensions,
    FlatList,
} from 'react-native';

import styles from './styles'

import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ReaderBarCode from '../../components/ReaderBarCode'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import RedButtonComponent from '../../components/RedButtonComponent'

const barCodeIcon = <MaterialCommunityIcons
    name="barcode-scan"
    size={25}
    color={"#fff"}
/>
const qrCode = <FontAwesomeIcons
    name="qrcode"
    size={50}
    color={"#F51E1E"}
/>

const shoppingcart = <AntDesign
    name="shoppingcart"
    size={50}
    color={"#F51E1E"}
/>

const historic = <Ionicons
    name="md-paper"
    size={50}
    color={"#F51E1E"}
/>



const CarrinhoScreen = ({ navigation }) => {
    const [showScanner, setShowScanner] = useState(false)

    const openCodeScanner = () => {
        setShowScanner(true);
    }

    return (
        <>
            <ReaderBarCode showCamera={showScanner} closeCamera={() => { setShowScanner(false); }} />
            <View
                style={{
                    backgroundColor: "#F4F4F4"
                }}>
                <View style={{
                    padding: 10
                }}>
                    <ButtonAddProduct
                        onPress={openCodeScanner}
                    />
                </View>
                <View
                    style={{
                        padding: 10,
                        // elevation: 4,
                        // backgroundColor: "#F4F4F4"
                    }}>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "bold"
                        }}>
                        lista de compras
                </Text>
                </View>
                <View style={{
                    height: windowHeight - 210,
                    // paddingBottom: 60
                }}>
                    <FlatList
                        data={dadosFakes}
                        renderItem={({ item, index }) => (
                            <View
                                style={{
                                    flexDirection: "row",
                                    backgroundColor: "#fff",
                                    marginBottom: (index === dadosFakes.length - 1) ? 90 : 10,
                                    padding: 10,
                                    alignItems: "center",
                                }}>
                                <View
                                    style={{
                                        height: 50,
                                        width: 50
                                    }}>
                                    <Image
                                        style={{
                                            height: 50,
                                            width: 50
                                        }}
                                        source={{
                                            uri: item.imagem
                                        }}
                                    />
                                </View>
                                <View
                                    style={{
                                        paddingHorizontal: 10,
                                        flex: 1
                                    }}>
                                    <Text>{item.titulo}</Text>
                                    <Text style={{
                                        textAlign: "justify"
                                    }}>{item.subtitulo}</Text>
                                </View>

                            </View>
                        )}
                    />
                    <View
                        style={{
                            // height: 70,
                            // padding: 20,
                            paddingHorizontal: 20,
                            paddingBottom: 20,
                            width: "100%",
                            position: "absolute",
                            bottom: 0,
                            // backgroundColor: "#fff",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <RedButtonComponent onPress={() => { }} label={"finalizar compra"} />
                    </View>
                </View>
            </View>
        </>
    );
}
export default CarrinhoScreen;

const ButtonAddProduct = ({ onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                // padding: 10,
                borderRadius: 4,
                elevation: 4,
                backgroundColor: "#fff",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center"
            }}>

            <View
                style={{
                    height: 50,
                    width: 50,
                    borderTopLeftRadius: 4,
                    borderBottomLeftRadius: 4,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "red"
                }}>
                {barCodeIcon}
            </View>
            <View
                style={{
                    padding: 10
                }}>
                <Text>adicionar produto</Text>
            </View>
        </TouchableOpacity>
    )
}


const dadosFakes = [
    {
        titulo: "Samsung Galaxy",
        subtitulo: "A10s 32GB Dual Chip Android 9.0 Tela 6.2” Octa-Core 4G Câmera 13MP+2MP - Azul",
        imagem: "https://images-americanas.b2w.io/produtos/01/00/img/1265954/6/1265954678_1GG.jpg"
    },
    {
        titulo: "Samsung Galaxy",
        subtitulo: "A10s 32GB Dual Chip Android 9.0 Tela 6.2” Octa-Core 4G Câmera 13MP+2MP - Azul",
        imagem: "https://images-americanas.b2w.io/produtos/01/00/img/1265954/6/1265954678_1GG.jpg"
    },
    {
        titulo: "Samsung Galaxy",
        subtitulo: "A10s 32GB Dual Chip Android 9.0 Tela 6.2” Octa-Core 4G Câmera 13MP+2MP - Azul",
        imagem: "https://images-americanas.b2w.io/produtos/01/00/img/1265954/6/1265954678_1GG.jpg"
    },
    {
        titulo: "Samsung Galaxy",
        subtitulo: "A10s 32GB Dual Chip Android 9.0 Tela 6.2” Octa-Core 4G Câmera 13MP+2MP - Azul",
        imagem: "https://images-americanas.b2w.io/produtos/01/00/img/1265954/6/1265954678_1GG.jpg"
    },
    {
        titulo: "Samsung Galaxy",
        subtitulo: "A10s 32GB Dual Chip Android 9.0 Tela 6.2” Octa-Core 4G Câmera 13MP+2MP - Azul",
        imagem: "https://images-americanas.b2w.io/produtos/01/00/img/1265954/6/1265954678_1GG.jpg"
    },
    {
        titulo: "Samsung Galaxy",
        subtitulo: "A10s 32GB Dual Chip Android 9.0 Tela 6.2” Octa-Core 4G Câmera 13MP+2MP - Azul",
        imagem: "https://images-americanas.b2w.io/produtos/01/00/img/1265954/6/1265954678_1GG.jpg"
    },

    {
        titulo: "Samsung Galaxy",
        subtitulo: "A10s 32GB Dual Chip Android 9.0 Tela 6.2” Octa-Core 4G Câmera 13MP+2MP - Azul",
        imagem: "https://images-americanas.b2w.io/produtos/01/00/img/1265954/6/1265954678_1GG.jpg"
    },
    {
        titulo: "Samsung Galaxy",
        subtitulo: "A10s 32GB Dual Chip Android 9.0 Tela 6.2” Octa-Core 4G Câmera 13MP+2MP - Azul",
        imagem: "https://images-americanas.b2w.io/produtos/01/00/img/1265954/6/1265954678_1GG.jpg"
    },
    {
        titulo: "Samsung Galaxy",
        subtitulo: "A10s 32GB Dual Chip Android 9.0 Tela 6.2” Octa-Core 4G Câmera 13MP+2MP - Azul",
        imagem: "https://images-americanas.b2w.io/produtos/01/00/img/1265954/6/1265954678_1GG.jpg"
    },
    {
        titulo: "Samsung Galaxy Final",
        subtitulo: "A10s 32GB Dual Chip Android 9.0 Tela 6.2” Octa-Core 4G Câmera 13MP+2MP - Azul",
        imagem: "https://images-americanas.b2w.io/produtos/01/00/img/1265954/6/1265954678_1GG.jpg"
    }
]