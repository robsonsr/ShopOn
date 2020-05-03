


import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Dimensions,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';

import styles from './styles'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import { Switch } from 'react-native-switch';


import RedButtonComponent from '../../components/RedButtonComponent'

const FinalizarCompraScreen = ({ navigation }) => {
    const [formaPagmento, setFormaPagamento] = useState(0)
    const [retirarMaisTarde, setRetirarMaisTarde] = useState(false)
    useEffect(() => {
        // setLista(dadosFakes);
    }, [])

    return (
        <>
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 70
                }}>
                <View style={{ padding: 10 }}>
                    <Titulo label={"resumo do carrinho"} />
                    <Resumo />
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                    <Titulo label={"forma de pagamento"} />
                </View>
                <FormasPagamento
                    escolhido={formaPagmento}
                    onChange={setFormaPagamento}
                />
                <View style={{
                    // padding: 10,
                    marginHorizontal: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <Titulo label={"deseja retirar mais tarde?"} />
                    <Switch
                        useNativeDrive={true}
                        value={retirarMaisTarde}
                        onValueChange={(val) => setRetirarMaisTarde(val)}
                        disabled={false}
                        activeText={'Sim'}
                        inActiveText={'Não'}
                        circleSize={30}
                        circleBorderWidth={0}
                        backgroundActive={'#F2C94C'}
                        backgroundInactive={'#666666'}
                        circleActiveColor={'#E60014'}
                        circleInActiveColor={'#C4C4C4'}
                        changeValueImmediately={true}
                    // renderActiveText={true}
                    />
                </View>
                <View style={{ padding: 10 }}>
                    <Titulo label={"possue cupom ou vale?"} />
                    <TextInput
                        style={{
                            backgroundColor: "#fff",
                            borderWidth: 1,
                            borderColor: "#666666",
                            padding: 10
                        }}
                    // value={"robson"}
                    />
                    <View style={{
                        marginTop: 10
                    }}>
                        <RedButtonComponent
                            outline={true}
                            label={"aplicar"}
                        />
                    </View>
                </View>

            </ScrollView>
            <View
                style={{
                    // height: 70,
                    // padding: 20,
                    paddingHorizontal: 20,
                    paddingVertical: 20,
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    backgroundColor: "#fff",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <RedButtonComponent
                    onPress={() => {
                        navigation.navigate("AgendarRetiradaScreen")
                    }}
                    label={"confirmar compra"} />
            </View>
        </>
    );
}
export default FinalizarCompraScreen;

const Resumo = () => {
    return (
        <View style={{
            backgroundColor: "#fff",
            padding: 10,
            // borderWidth: 1,
            // borderColor: "#BDBDBD",
            elevation: 2
        }}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <Text style={{}}>10 produtos</Text>
                <Text>R$ 100.000,00</Text>
            </View>
            <View style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                paddingVertical: 10,
                marginTop: 10
            }}>
                <Text style={{
                    textAlign: "right",
                    fontSize: 12,
                    paddingVertical: 2
                }}>R$ 140,45 em até 12x ou</Text>
                <Text style={{
                    textAlign: "right",
                    fontSize: 12,
                    paddingVertical: 2
                }}>R$134,53 em 1x no cartão</Text>
                <Text style={{
                    textAlign: "right",
                    fontSize: 12,
                    color: "#47701A",
                    paddingVertical: 2
                }}>R$ 134,53 em 1x no cartão americanas.com</Text>
                <Text style={{
                    textAlign: "right",
                    fontSize: 12,
                    color: "#BA2A60",
                    paddingVertical: 2
                }}>pague com Ame e ganhe até R$ 2,50 de volta</Text>
                <Text style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#666666"
                }}>total</Text>
            </View>
        </View>
    )
}

const FormasPagamento = ({ onChange, escolhido }) => {

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={{
                paddingVertical: 10,
                paddingHorizontal: 10,
                // backgroundColor: "blue"
            }}>
            <ItemFormaPagmento
                source={require("../../assets/img/ame.png")}
                label={"ame"}
                onPress={() => {
                    onChange(0)
                }}
                active={escolhido === 0}
            />
            <ItemFormaPagmento
                source={require("../../assets/img/americana_card.png")}
                label={"americanas.com"}
                onPress={() => {
                    onChange(1)
                }}
                active={escolhido === 1}
            />
            <ItemFormaPagmento
                source={require("../../assets/img/dinheiro.png")}
                label={"dinheiro"}
                onPress={() => {
                    onChange(2)
                }}
                active={escolhido === 2}
            />
            <ItemFormaPagmento
                source={require("../../assets/img/cartao_deb_cred.png")}
                label={"cartão de crédito ou débito"}
                onPress={() => {
                    onChange(3)
                }}
                active={escolhido === 3}
            />
        </ScrollView>
    )
}

const ItemFormaPagmento = ({ source, label, onPress, active }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                backgroundColor: "#fff",
                height: 90,
                width: 110,
                elevation: 4,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10,
                padding: 5,
                borderWidth: active ? 1 : 0,
                borderColor: active ? "#E60014" : "#fff"
            }}>
            <Image
                style={{
                    marginBottom: 5
                }}
                source={source}
            />
            <Text style={{
                fontSize: 12,
                marginTop: 5,
                textAlign: "center"

            }}>{label}</Text>

        </TouchableOpacity>
    )
}

const Titulo = ({ label }) => {
    return (
        <View style={{
            padding: 10
        }}>
            <Text style={{
                fontSize: 20,
                color: "#404040"
            }}>{label}</Text>
        </View>
    )
}
