
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
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

import getRealm from '../../services/realm'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import RedButtonComponent from '../../components/RedButtonComponent'

import ListaCompraActions from '../../redux/Actions/ListaCompraActions'

const barCodeIcon = <MaterialCommunityIcons
    name="barcode-scan"
    size={25}
    color={"#fff"}
/>

const chevronDown = <MaterialCommunityIcons
    name="chevron-down"
    size={20}
    color={"#666"}
/>

const CarrinhoScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const listaCompraReducer = useSelector(({ ListaCompraReducer }) => ListaCompraReducer)
    console.log("Lista", listaCompraReducer)

    const [showScanner, setShowScanner] = useState(false)


    const openCodeScanner = () => {
        setShowScanner(true);
    }

    const onCodeDetected = (value) => {
        navigation.navigate("ConsultaProdutoScreen", { barCode: value })
    }

    const removerItem = (item) => {
        dispatch(ListaCompraActions.removerProdutoLista(item))
    }

    const getValueTotal = () => {
        let valorTotal = 0;
        if (listaCompraReducer.produtos.length) {
            listaCompraReducer.produtos.forEach(produto => {
                valorTotal += produto.price;
            });
        }
        return valorTotal;
    }

    const finalizarCompra = () => {
        dispatch(ListaCompraActions.setValueTotal(getValueTotal()))
        navigation.navigate("FinalizarCompraScreen")
    }
    useEffect(() => {
        if (listaCompraReducer.produtos.length === 0) {
            openCodeScanner();
        }
    }, [])

    return (
        <>
            <ReaderBarCode
                showCamera={showScanner}
                onCodeDetected={onCodeDetected}
                closeCamera={() => { setShowScanner(false) }}
            />
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
                        data={listaCompraReducer.produtos}
                        renderItem={({ item, index }) => (
                            <View
                                style={{
                                    flexDirection: "column",
                                    backgroundColor: "#fff",
                                    marginBottom: (index === listaCompraReducer.produtos.length - 1) ? 103 : 10,
                                    padding: 10,
                                    // paddingBottom: (index === lista.length - 1) ? 90 : 10,
                                    alignItems: "center",
                                }}>
                                <View style={{
                                    flexDirection: "row",
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
                                                uri: item.image_url
                                            }}
                                        />
                                    </View>
                                    <View
                                        style={{
                                            paddingHorizontal: 10,
                                            flex: 1
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 14,
                                                color: "#404040",
                                                fontWeight: "bold"
                                            }}
                                        >{item.name}</Text>
                                        <Text style={{
                                            fontSize: 12,
                                            textAlign: "justify",
                                            color: "#404040",
                                            // fontWeight: "bold"
                                        }}>{item.description}</Text>
                                    </View>
                                    <View
                                        style={{
                                            // backgroundColor: "red",
                                            justifyContent: "flex-end"
                                            // width: 20
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 14,
                                                color: "#404040"
                                            }}>R$ {item.price?.toFixed(2)}</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        width: "100%",
                                        marginTop: 10,
                                        paddingVertical: 10,
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        borderTopWidth: 1,
                                        borderColor: "#EAEAEA"
                                    }}>
                                    <View style={{
                                        backgroundColor: "#EAEAEA",
                                        width: 60,
                                        padding: 6,
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: 4
                                    }}>
                                        <Text
                                            style={{
                                                borderRadius: 4,
                                                color: "#666666"
                                            }}>1 un.</Text>
                                        {chevronDown}
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => {
                                            removerItem(item)
                                        }}
                                        style={{
                                            backgroundColor: "#fff",
                                            borderWidth: 1,
                                            borderRadius: 2,
                                            borderColor: "#E60014",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <Text style={{
                                            color: "#E60014",
                                            padding: 10
                                        }}>remover item</Text>
                                    </TouchableOpacity>

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
                            backgroundColor: "#fff",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <View
                            style={{
                                backgroundColor: "#fff",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                paddingVertical: 10,
                                width: "100%"
                            }}>
                            <Text style={{ fontSize: 14, color: "#404040" }}>
                                total do carrinho
                            </Text>
                            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#404040" }}>
                                {getValueTotal().toFixed(2)}
                            </Text>
                        </View>
                        <RedButtonComponent
                            onPress={() => { finalizarCompra() }}
                            label={"finalizar compra"} />
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
        imagem: "https://images-americanas.b2w.io/produtos/01/00/img/1265954/6/1265954678_1GG.jpg",
        codigo: 1,
        valor: 25.99
    },
    {
        titulo: "Samsung Galaxy",
        subtitulo: "A10s 32GB Dual Chip Android 9.0 Tela 6.2” Octa-Core 4G Câmera 13MP+2MP - Azul",
        imagem: "https://images-americanas.b2w.io/produtos/01/00/img/1265954/6/1265954678_1GG.jpg",
        codigo: 2,
        valor: 25.99
    },
    {
        titulo: "Samsung Galaxy",
        subtitulo: "A10s 32GB Dual Chip Android 9.0 Tela 6.2” Octa-Core 4G Câmera 13MP+2MP - Azul",
        imagem: "https://images-americanas.b2w.io/produtos/01/00/img/1265954/6/1265954678_1GG.jpg",
        codigo: 3,
        valor: 25.99
    },
    {
        titulo: "Samsung Galaxy",
        subtitulo: "A10s 32GB Dual Chip Android 9.0 Tela 6.2” Octa-Core 4G Câmera 13MP+2MP - Azul",
        imagem: "https://images-americanas.b2w.io/produtos/01/00/img/1265954/6/1265954678_1GG.jpg",
        codigo: 4,
        valor: 25.99
    },
    {
        titulo: "Samsung Galaxy",
        subtitulo: "A10s 32GB Dual Chip Android 9.0 Tela 6.2” Octa-Core 4G Câmera 13MP+2MP - Azul",
        imagem: "https://images-americanas.b2w.io/produtos/01/00/img/1265954/6/1265954678_1GG.jpg",
        codigo: 5,
        valor: 25.99
    },
    {
        titulo: "Samsung Galaxy",
        subtitulo: "A10s 32GB Dual Chip Android 9.0 Tela 6.2” Octa-Core 4G Câmera 13MP+2MP - Azul",
        imagem: "https://images-americanas.b2w.io/produtos/01/00/img/1265954/6/1265954678_1GG.jpg",
        codigo: 6,
        valor: 25.99
    },

    {
        titulo: "Samsung Galaxy",
        subtitulo: "A10s 32GB Dual Chip Android 9.0 Tela 6.2” Octa-Core 4G Câmera 13MP+2MP - Azul",
        imagem: "https://images-americanas.b2w.io/produtos/01/00/img/1265954/6/1265954678_1GG.jpg",
        codigo: 7,
        valor: 25.99
    },
    {
        titulo: "Samsung Galaxy",
        subtitulo: "A10s 32GB Dual Chip Android 9.0 Tela 6.2” Octa-Core 4G Câmera 13MP+2MP - Azul",
        imagem: "https://images-americanas.b2w.io/produtos/01/00/img/1265954/6/1265954678_1GG.jpg",
        codigo: 8,
        valor: 25.99
    },
    {
        titulo: "Samsung Galaxy",
        subtitulo: "A10s 32GB Dual Chip Android 9.0 Tela 6.2” Octa-Core 4G Câmera 13MP+2MP - Azul",
        imagem: "https://images-americanas.b2w.io/produtos/01/00/img/1265954/6/1265954678_1GG.jpg",
        codigo: 9,
        valor: 25.99
    },
    {
        titulo: "Samsung Galaxy Final",
        subtitulo: "A10s 32GB Dual Chip Android 9.0 Tela 6.2” Octa-Core 4G Câmera 13MP+2MP - Azul",
        imagem: "https://images-americanas.b2w.io/produtos/01/00/img/1265954/6/1265954678_1GG.jpg",
        codigo: 10,
        valor: 25.99
    }
]