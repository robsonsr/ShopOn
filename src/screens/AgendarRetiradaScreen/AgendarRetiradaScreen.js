


import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

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

import RadioButtonRN from 'radio-buttons-react-native';

import RedButtonComponent from '../../components/RedButtonComponent'

import Ionicons from 'react-native-vector-icons/Ionicons'

import RNPickerSelect from 'react-native-picker-select';

const arrowLeft = <Ionicons
    name="ios-arrow-back"
    size={35}
    color={"#F2C94C"}
/>
const arrowRight = <Ionicons
    name="ios-arrow-forward"
    size={35}
    color={"#E60014"}
/>


const AgendarRetiradaScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const listaCompraReducer = useSelector(({ ListaCompraReducer }) => ListaCompraReducer)

    const [quemRetira, setQueRetira] = useState(0)

    const [itensComprados, setItensComprados] = useState([])

    const [itensSelecionados, setItensSelecionados] = useState([])

    const [horarioSelecionado, setHorarioSelecionado] = useState(0)

    const setItemSelecionado = (item) => {
        const newItensSelecionado = itensSelecionados;
        newItensSelecionado.push(item)
        setItensSelecionados(newItensSelecionado)
        const newItensComprados = itensComprados.filter(({ id }) => item.id != id);
        setItensComprados(newItensComprados)
    }

    const setItemComprados = (item) => {
        const newItensComprados = itensComprados;
        newItensComprados.push(item)
        setItensComprados(newItensComprados)
        const newItensSelecionados = itensSelecionados.filter(({ id }) => item.id != id);
        setItensSelecionados(newItensSelecionados)
    }

    const separarListaProdutos = () => {
        setItensComprados(listaCompraReducer.produtos);
    }

    useEffect(() => {
        // setLista(dadosFakes);
    }, [])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // do something
            separarListaProdutos()
        });
        return unsubscribe;
    }, [navigation])

    return (
        <>
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 70
                }}>
                <View style={{ padding: 10 }}>
                    <Titulo label={"quem vai retirar?"} />
                    <RNPickerSelect
                        placeholder={{
                            label: 'eu mesmo', value: '0'
                        }}
                        // useNativeAndroidPickerStyle={false}
                        onValueChange={(value) => setQueRetira(value)}
                        items={[
                            { label: 'outra pessoa', value: '1' },
                        ]}
                    />
                    {
                        quemRetira != 0 &&
                        <TextInput
                            placeholder={"nome"}
                            style={{
                                backgroundColor: "#fff",
                                borderWidth: 1,
                                borderColor: "#666666",
                                padding: 10,
                                marginBottom: 10
                            }}
                        />
                    }
                    {
                        quemRetira != 0 &&
                        <TextInput
                            placeholder={"cpf"}
                            style={{
                                backgroundColor: "#fff",
                                borderWidth: 1,
                                borderColor: "#666666",
                                padding: 10
                            }}
                        />
                    }

                </View>
                <View style={{ padding: 10 }}>
                    <Titulo label={"horário"} />
                    <Text style={{
                        fontSize: 14,
                        color: "#666666"
                    }}>Em quanto tempo você voltará para buscar suas compras?</Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <RadioButtonRN
                            initial={1}
                            boxStyle={{
                                backgroundColor: "#fff",
                                height: 40,
                                width: 100,
                                borderRadius: 100,
                                marginLeft: 10,
                                borderWidth: 0
                            }}
                            textStyle={{
                                marginLeft: 10
                            }}
                            style={{
                                flexDirection: "row"
                            }}
                            activeColor={"red"}
                            data={[
                                {
                                    label: '30 min',
                                    key: 0,
                                    ms: 1800000
                                },
                                {
                                    label: '1 hora',
                                    key: 1,
                                    ms: 3600000
                                },
                                {
                                    label: '2 horas',
                                    key: 2,
                                    ms: 7200000
                                },
                                {
                                    label: 'outro horário',
                                    key: 3
                                }
                            ]}
                            selectedBtn={(e) => setHorarioSelecionado(e.ms)}
                        />
                    </ScrollView>
                </View>
                <View style={{ padding: 10 }}>
                    <Titulo label={"quais produtos deseja retirar?"} />
                </View>
                <TabList
                    listaEsquerda={itensComprados}
                    listaDireita={itensSelecionados}
                    cliqueItemEsquerda={setItemSelecionado}
                    cliqueItemDireita={setItemComprados}
                />


            </ScrollView>
            <View
                style={{
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
                    onPress={() => { navigation.navigate("FinalizarCompra", { horarioSelecionado }) }}
                    label={"agendar retirada"} />
            </View>
        </>
    );
}
export default AgendarRetiradaScreen;


const TabList = ({ listaEsquerda, listaDireita, cliqueItemEsquerda, cliqueItemDireita }) => {
    const [tabSelecionada, setTabSelecionada] = useState(0);
    const renderListaEsquerda = () => (
        listaEsquerda.map((item) => (
            <ItemLine
                source={{
                    uri: item.image_url
                }}
                titulo={item.name}
                descricao={item.description}
                onPress={() => cliqueItemEsquerda(item)}
            />
        ))
    )
    const renderListaDireita = () => (
        listaDireita.map((item) => (
            <ItemLine
                source={{
                    uri: item.image_url
                }}
                titulo={item.name}
                descricao={item.description}
                onPress={() => cliqueItemDireita(item)}
                leftIcon
            />
        ))
    )
    return (
        <View>
            <View
                style={{
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-around"
                }}
            >
                <TouchableOpacity
                    onPress={() => setTabSelecionada(0)}
                    style={{
                        borderColor: tabSelecionada == 0 ? "#E60014" : "#666666",
                        borderBottomWidth: tabSelecionada == 0 ? 1 : 0,
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        paddingVertical: 5
                    }}>
                    <Text style={{
                        color: tabSelecionada == 0 ? "#E60014" : "#666666",
                        fontSize: 16,
                        fontWeight: "bold"
                    }}>itens comprados</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setTabSelecionada(1)}
                    style={{
                        borderColor: tabSelecionada == 1 ? "#E60014" : "#666666",
                        borderBottomWidth: tabSelecionada == 1 ? 1 : 0,
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Text style={{
                        color: tabSelecionada == 1 ? "#E60014" : "#666666",
                        fontSize: 16,
                        fontWeight: "bold"

                    }}>itens selecionado</Text>
                </TouchableOpacity>
            </View>
            {
                tabSelecionada === 0 &&
                <View style={{
                    // backgroundColor: "red",
                }}>
                    {renderListaEsquerda()}
                </View>
            }
            {
                tabSelecionada === 1 &&
                <View style={{
                    backgroundColor: "#fff",
                }}>
                    {renderListaDireita()}
                </View>
            }

        </View>
    )
}

const ItemLine = ({ onPress, leftIcon, source, titulo, descricao }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                backgroundColor: "#fff",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 10,
                paddingHorizontal: 20,
                marginBottom: 10
            }}>
            {
                leftIcon &&
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 10
                    }}>{arrowLeft}
                </View>
            }
            <View
                style={{
                    // flexWrap: "wrap",
                    // width: "100%"
                }}>
                <Image
                    style={{
                        height: 50,
                        width: 50
                    }}
                    source={source} />
            </View>
            <View
                style={{
                    // flexWrap: "wrap",
                    // width: "100%"
                    flex: 1,
                    paddingHorizontal: 5,
                    justifyContent: "center"
                }}>
                <Text
                    style={{
                        fontWeight: "bold",
                        fontSize: 14
                    }}>{titulo}</Text>
                <Text
                    style={{
                        fontSize: 12,
                        color: "#404040"
                    }}>{descricao}</Text>
            </View>
            {
                !leftIcon &&
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 10
                    }}>{arrowRight}
                </View>
            }
        </TouchableOpacity>
    )
}

const Titulo = ({ label }) => {
    return (
        <View style={{
            paddingVertical: 10
        }}>
            <Text style={{
                fontSize: 20,
                color: "#404040"
            }}>{label}</Text>
        </View>
    )
}
