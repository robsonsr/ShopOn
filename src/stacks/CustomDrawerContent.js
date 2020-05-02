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

import { DrawerContentScrollView } from '@react-navigation/drawer';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

const CustomDrawerContent = (props) => {
    const {
        state: { index },
        navigation,
    } = props;
    return (
        <DrawerContentScrollView {...props} style={{}}>
            <TouchableOpacity style={{
                height: 70,
                backgroundColor: "#F51E1E",
                marginTop: -4,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingHorizontal: 5
            }}>

                <MaterialIcons
                    name="person"
                    size={50}
                    style={[
                        {
                            color: "#fff",
                            opacity: 0.7
                        }
                    ]}
                />
                <View style={{
                    marginLeft: 10
                }}>
                    <Text
                        style={{
                            color: "#fff",
                            fontSize: 16,
                            fontWeight: "bold"
                        }} >
                        Faça seu login
                        </Text>
                    <Text
                        style={{
                            color: "#fff",
                            fontSize: 14,
                            opacity: 0.7
                        }}>
                        ou cadastra-se.
                    </Text>
                </View>

            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.itemMenu]}
                onPress={() => {
                    navigation.navigate('DestaquesStack');
                }}>
                <View style={[styles.itemMenuIconContainer]}>
                    {index === 0 ? (
                        <Image source={require('../assets/img/destaquesIconActive.png')} />
                    ) : (
                            <Image source={require('../assets/img/destaquesIcon.png')} />
                        )}
                </View>
                <Text
                    style={[
                        styles.itemMenuLabel,
                        index === 0 && styles.itemMenuLabelActive,
                    ]}>
                    destaques
        </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.itemMenu]}
                onPress={() => {
                    navigation.navigate('ProductDetailsStack');
                }}>
                <View style={[styles.itemMenuIconContainer]}>
                    <FontAwesomeIcons
                        name="qrcode"
                        size={25}
                        style={[
                            styles.itemMenuIcon,
                            index === 1 && styles.itemMenuIconActive,
                        ]}
                    />
                </View>

                <Text
                    style={[
                        styles.itemMenuLabel,
                        index === 1 && styles.itemMenuLabelActive,
                    ]}>
                    QrCode
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.itemMenu]}
                onPress={() => {
                    // navigation.navigate('ProductDetailsStack');
                }}>
                <View style={[styles.itemMenuIconContainer]}>
                    <MaterialCommunityIcons
                        name="cards-heart"
                        size={25}
                        style={[
                            styles.itemMenuIcon,
                            index === 2 && styles.itemMenuIconActive,
                        ]}
                    />
                </View>
                <Text
                    style={[
                        styles.itemMenuLabel,
                        index === 2 && styles.itemMenuLabelActive,
                    ]}>
                    favoritos
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.itemMenu]}
                onPress={() => {
                    // navigation.navigate('ProductDetailsStack');
                }}>
                <View style={[styles.itemMenuIconContainer]}>
                    <MaterialCommunityIcons
                        name="library-books"
                        size={25}
                        style={[
                            styles.itemMenuIcon,
                            index === 2 && styles.itemMenuIconActive,
                        ]}
                    />
                </View>
                <Text
                    style={[
                        styles.itemMenuLabel,
                        index === 2 && styles.itemMenuLabelActive,
                    ]}>
                    meus pedidos
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.itemMenu]}
                onPress={() => {
                    // navigation.navigate('ProductDetailsStack');
                }}>
                <View style={[styles.itemMenuIconContainer]}>
                    <MaterialCommunityIcons
                        name="ticket-confirmation"
                        size={25}
                        style={[
                            styles.itemMenuIcon,
                            index === 2 && styles.itemMenuIconActive,
                        ]}
                    />
                </View>
                <Text
                    style={[
                        styles.itemMenuLabel,
                        index === 2 && styles.itemMenuLabelActive,
                    ]}>
                    meus vales
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.itemMenu]}
                onPress={() => {
                    // navigation.navigate('ProductDetailsStack');
                }}>
                <View style={[styles.itemMenuIconContainer]}>
                    <MaterialCommunityIcons
                        name="barcode-scan"
                        size={25}
                        style={[
                            styles.itemMenuIcon,
                            index === 2 && styles.itemMenuIconActive,
                        ]}
                    />
                </View>
                <Text
                    style={[
                        styles.itemMenuLabel,
                        index === 2 && styles.itemMenuLabelActive,
                    ]}>
                    leitor de código de barras
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.itemMenu]}
                onPress={() => {
                    // navigation.navigate('ProductDetailsStack');
                }}>
                <View style={[styles.itemMenuIconContainer]}>
                    <MaterialCommunityIcons
                        name="bell"
                        size={25}
                        style={[
                            styles.itemMenuIcon,
                            index === 2 && styles.itemMenuIconActive,
                        ]}
                    />
                </View>
                <Text
                    style={[
                        styles.itemMenuLabel,
                        index === 2 && styles.itemMenuLabelActive,
                    ]}>
                    notificações
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.itemMenu]}
                onPress={() => {
                    // navigation.navigate('ProductDetailsStack');
                }}>
                <View style={[styles.itemMenuIconContainer]}>
                    <MaterialCommunityIcons
                        name="credit-card"
                        size={25}
                        style={[
                            styles.itemMenuIcon,
                            index === 2 && styles.itemMenuIconActive,
                        ]}
                    />
                </View>
                <Text
                    style={[
                        styles.itemMenuLabel,
                        index === 2 && styles.itemMenuLabelActive,
                    ]}>
                    cartão americanas
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.itemMenu]}
                onPress={() => {
                    // navigation.navigate('ProductDetailsStack');
                }}>
                <View style={[styles.itemMenuIconContainer]}>
                    <MaterialCommunityIcons
                        name="store"
                        size={25}
                        style={[
                            styles.itemMenuIcon,
                            index === 2 && styles.itemMenuIconActive,
                        ]}
                    />
                </View>
                <Text
                    style={[
                        styles.itemMenuLabel,
                        index === 2 && styles.itemMenuLabelActive,
                    ]}>
                    ache uma loja
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.itemMenu]}
                onPress={() => {
                    // navigation.navigate('ProductDetailsStack');
                }}>
                <View style={[styles.itemMenuIconContainer]}>
                    <MaterialCommunityIcons
                        name="percent"
                        size={25}
                        style={[
                            styles.itemMenuIcon,
                            index === 2 && styles.itemMenuIconActive,
                        ]}
                    />
                </View>
                <Text
                    style={[
                        styles.itemMenuLabel,
                        index === 2 && styles.itemMenuLabelActive,
                    ]}>
                    aqui tem desconto
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.itemMenu]}
                onPress={() => {
                    // navigation.navigate('ProductDetailsStack');
                }}>
                <View style={[styles.itemMenuIconContainer]}>
                    <FontAwesomeIcons
                        name="inbox"
                        size={25}
                        style={[
                            styles.itemMenuIcon,
                            index === 1 && styles.itemMenuIconActive,
                        ]}
                    />
                </View>
                <Text
                    style={[
                        styles.itemMenuLabel,
                        index === 2 && styles.itemMenuLabelActive,
                    ]}>
                    mensagens
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.itemMenu, { borderTopWidth: 1, borderTopColor: "rgba(0, 0, 0, 0.05)" }]}
                onPress={() => {
                    // navigation.navigate('ProductDetailsStack');
                }}>
                <Text
                    style={[
                        styles.itemMenuLabel,
                        { marginLeft: 0 },
                        index === 2 && styles.itemMenuLabelActive,
                    ]}>
                    venda com a gente
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.itemMenu]}
                onPress={() => {
                    // navigation.navigate('ProductDetailsStack');
                }}>
                <Text
                    style={[
                        styles.itemMenuLabel,
                        { marginLeft: 0 },
                        index === 2 && styles.itemMenuLabelActive,
                    ]}>
                    atendimento por telefone
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.itemMenu]}
                onPress={() => {
                    // navigation.navigate('ProductDetailsStack');
                }}>
                <Text
                    style={[
                        styles.itemMenuLabel,
                        { marginLeft: 0 },
                        index === 2 && styles.itemMenuLabelActive,
                    ]}>
                    compre pelo telefone
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.itemMenu]}
                onPress={() => {
                    // navigation.navigate('ProductDetailsStack');
                }}>
                <Text
                    style={[
                        styles.itemMenuLabel,
                        { marginLeft: 0 },
                        index === 2 && styles.itemMenuLabelActive,
                    ]}>
                    regras descontos lojas americanas
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.itemMenu]}
                onPress={() => {
                    // navigation.navigate('ProductDetailsStack');
                }}>
                <Text
                    style={[
                        styles.itemMenuLabel,
                        { marginLeft: 0 },
                        index === 2 && styles.itemMenuLabelActive,
                    ]}>
                    regras compras online
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.itemMenu]}
                onPress={() => {
                    // navigation.navigate('ProductDetailsStack');
                }}>
                <Text
                    style={[
                        styles.itemMenuLabel,
                        { marginLeft: 0 },
                        index === 2 && styles.itemMenuLabelActive,
                    ]}>
                    sobre o app
                </Text>
            </TouchableOpacity>


        </DrawerContentScrollView >
    );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
    itemMenu: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 10,
    },
    itemMenuIconContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: 25,
        width: 25
    },
    itemMenuIcon: {
        color: '#1A1A1A',
    },
    itemMenuLabel: {
        // paddingHorizontal: 10,
        marginLeft: 25,
        color: '#1A1A1A',
        fontWeight: 'bold',
        fontSize: 14,
    },
    itemMenuLabelActive: {
        color: '#F51E1E',
    },
    itemMenuIconActive: {
        color: '#F51E1E',
    },
});
