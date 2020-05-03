
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

import AvaliacaoStars from './AvaliacaoStars'

import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import RedButtonComponent from '../../components/RedButtonComponent'

const imgSourceProduto = require("../../assets/img/testes/cortador_legume.png")

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const chevronDown = <MaterialCommunityIcons
    name="chevron-down"
    size={16}
    color={"#666"}
/>

const chevronRight = <MaterialCommunityIcons
    name="chevron-right"
    size={16}
    color={"#666"}
/>

const ConsultaProdutoScreen = ({ navigation }) => {
    const [showDescricao, setShowDescricao] = useState(false)
    const [showInfoTecnicas, setInfoTecnicas] = useState(false)
    return (
        <>

            <View
                style={{
                    backgroundColor: "#F4F4F4"
                }}>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 80
                    }}
                >
                    <ProdutoPrincipal
                        imgSource={imgSourceProduto}
                        titulo={"Cortador Descascador de Vegetais em Espiral"}
                    />
                    <CollapseCustom
                        isCollapse={showDescricao}
                        title={"descrição"}
                        onToggle={(value) => setShowDescricao(value)}
                        values={"descrição do produto"}

                    />
                    <CollapseCustom
                        isCollapse={showInfoTecnicas}
                        title={"informações técnicas"}
                        onToggle={(value) => setInfoTecnicas(value)}
                        values={"informações técnicas"}

                    />
                    <ListaProdutosHorizontal
                        titulo={"os principais produtos da categoria"}
                        produtos={produtosFake}
                    />
                    <ListaProdutosHorizontal
                        titulo={"novidades para você"}
                        produtos={produtosFake}
                    />

                </ScrollView>
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
                    <RedButtonComponent onPress={() => {
                        navigation.navigate("CarrinhoScreen")
                    }} label={"adicionar ao carrinho"} />
                </View>
            </View>
        </>
    );
}
export default ConsultaProdutoScreen;

const ProdutoPrincipal = ({ imgSource, titulo, codigo }) => {
    return (
        <View
            style={[
                styles.containerProdutoPrincipal
            ]}>
            <View
                style={[
                    styles.containerImageProdutoPrincipal
                ]}>
                <Image
                    style={[
                        styles.imagemProdutoPrincipal
                    ]}
                    source={imgSource}
                />
            </View>
            <View
                style={{
                    width: "100%",
                    marginBottom: 10
                }}>
                <Text
                    style={{
                        fontSize: 14,
                        fontWeight: "bold"
                    }}>{titulo}</Text>
            </View>
            <View style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "flex-start"
            }}>
                <AvaliacaoStars quantStars={2} />
                <Text
                    style={{
                        fontSize: 12,
                        color: "#666666"
                    }}>(Cód. {codigo})</Text>
            </View>
            <View
                style={{
                    // backgroundColor: "blue",
                    width: "100%",
                    borderTopWidth: 1,
                    borderColor: "#BDBDBD",
                    marginTop: 5
                }}>
                <Text
                    style={{
                        fontSize: 22,
                        fontWeight: "bold",
                        color: "#404040",
                        marginVertical: 5
                    }}>R$ 25,99</Text>
                <Text>
                    em até 2x sem juros no
                    <Text style={{
                        fontWeight: "bold"
                    }}>  cartão de crédito com Ame </Text>
                    e receba R$ 0,52
                </Text>
                <Text
                    style={{
                        color: "#6FCF97",
                        fontWeight: "bold"
                    }}>
                    (2% de volta)
                </Text>
            </View>
        </View>
    )
}

const ListaProdutosHorizontal = ({ titulo, produtos }) => {
    // image: "",
    // titulo: "Mini Processador HC31 - Black & Decker 220V",
    // preco: "19,14",
    // avaliacao: 2
    const renderProdutos = () => {
        return produtos.map((produto) =>
            <TouchableOpacity
                style={{
                    marginHorizontal: 5,
                    width: 100
                }}>
                <Image
                    style={{
                        height: 100,
                        width: 100
                    }}
                    source={produto.image}
                />
                <Text
                    style={{
                        fontSize: 12,
                        color: "#666666",
                        marginTop: 5
                    }}>{produto.titulo}</Text>
                <View
                    style={{
                        marginTop: 5
                    }}>
                    <AvaliacaoStars quantStars={3} />
                </View>
                <Text
                    style={{
                        fontSize: 12,
                        color: "#666666",
                        marginTop: 5,
                        fontWeight: "bold"
                    }}>21 ofertas a partir de </Text>
                <Text
                    style={{
                        fontSize: 14,
                        color: "#666666",
                        marginTop: 5,
                        fontWeight: "bold"
                    }}>R$19,14</Text>

            </TouchableOpacity>
        )
    }
    return (
        <View
            style={{
                backgroundColor: "#fff",
                paddingHorizontal: 5,
                paddingVertical: 5,
                marginTop: 10
            }}>
            <Text
                style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#666666",
                    marginTop: 5,
                    marginBottom: 10
                }}>{titulo}</Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                }}
            >
                {renderProdutos()}

            </ScrollView>
        </View>
    )
}

const CollapseCustom = ({ title, isCollapse, onToggle, values }) => {
    return (
        <Collapse
            style={{
                backgroundColor: "#fff",
                marginTop: 10
            }}
            isCollapse={isCollapse}
            onToggle={(valueToggle) => {
                // setCollapseValue(valueToggle);
                onToggle(valueToggle)
            }
            }>
            >
            <CollapseHeader>
                <View style={{
                    backgroundColor: "#fff",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 10
                }}>
                    <Text
                        style={{
                            color: "#666",
                            fontWeight: "bold",
                            fontSize: 16
                        }}>{title}</Text>
                    {isCollapse && chevronDown}
                    {!isCollapse && chevronRight}
                </View>
            </CollapseHeader>
            <CollapseBody
                style={{
                    paddingVertical: 0,
                    paddingHorizontal: 10
                }}>
                <Text
                    style={{
                        fontSize: 14
                    }}>{values}</Text>
            </CollapseBody>
        </Collapse>
    )
}

const produtosFake = [
    {
        image: require("../../assets/img/testes/mini_processador.png"),
        titulo: "Mini Processador HC31 - Black & Decker 220V",
        preco: "19,14",
        avaliacao: 2
    },
    {
        image: require("../../assets/img/testes/fatiado_legumes.png"),
        titulo: "Cortador Fatiador Legumes 3 Laminas R...",
        preco: "19,14",
        avaliacao: 4
    },
    {
        image: require("../../assets/img/testes/mini_processador.png"),
        titulo: "Mini Processador HC31 - Black & Decker 220V",
        preco: "19,14",
        avaliacao: 2
    },
    {
        image: require("../../assets/img/testes/fatiado_legumes.png"),
        titulo: "Cortador Fatiador Legumes 3 Laminas R...",
        preco: "19,14",
        avaliacao: 4
    },
    {
        image: require("../../assets/img/testes/mini_processador.png"),
        titulo: "Mini Processador HC31 - Black & Decker 220V",
        preco: "19,14",
        avaliacao: 2
    },
    {
        image: require("../../assets/img/testes/fatiado_legumes.png"),
        titulo: "Cortador Fatiador Legumes 3 Laminas R...",
        preco: "19,14",
        avaliacao: 4
    },
]