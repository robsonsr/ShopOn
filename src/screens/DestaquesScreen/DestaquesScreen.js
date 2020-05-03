import React, { useState, } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';


const compre_receba_hoje = require("../../assets/img/destaques/compre_receba_hoje.png")
const venda_com_a_gente = require("../../assets/img/destaques/venda_com_a_gente.png")
const auxilio_emergencial = require("../../assets/img/destaques/auxilio_emergencial.png")
const comercio_local = require("../../assets/img/destaques/comercio_local.png")
const dia_maes = require("../../assets/img/destaques/dia_maes.png")
const dia_maes_anuncio = require("../../assets/img/destaques/dia_maes_anuncio.png")

const covid = require("../../assets/img/destaques/covid.png")



const DestaquesScreen = ({ navigation }) => {

    const { navigate } = navigation;
    return (
        <View
            style={{
                backgroundColor: "#F4F4F4"
            }}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={{
                    paddingVertical: 10
                }}
            >
                <DestaqueButton
                    onPress={() => navigate("ModoLojaHomeScreen")}
                    imageSource={""}
                    label={"shop on"} />
                <DestaqueButton
                    imageSource={compre_receba_hoje}
                    label={"compre e receba hoje"} />
                <DestaqueButton
                    imageSource={venda_com_a_gente}
                    label={"venda com a gente"} />
                <DestaqueButton
                    imageSource={auxilio_emergencial}
                    label={"auxilio emergêncial"} />
                <DestaqueButton
                    imageSource={comercio_local}
                    label={"compre da sua cidade"} />
                <DestaqueButton
                    imageSource={dia_maes}
                    label={"escolha o presente"} />
                <DestaqueButton
                    imageSource={auxilio_emergencial}
                    label={"venda com a gente"} />
                <DestaqueButton
                    imageSource={comercio_local}
                    label={"compre da sua cidade"} />
                <DestaqueButton
                    imageSource={dia_maes}
                    label={"escolha o presente"} />
                <DestaqueButton
                    imageSource={auxilio_emergencial}
                    label={"venda com a gente"} />

            </ScrollView>
            <ScrollView>
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Image source={covid} />
                </View>
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 10
                    }}>
                    <Image source={dia_maes_anuncio} />
                </View>

            </ScrollView>
        </View>
    );
};
export default DestaquesScreen;

const DestaqueButton = ({ imageSource, label, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                maxWidth: 70,
                margin: 10
            }}>
            <View
                style={{
                    height: 80,
                    width: 80,
                    borderRadius: 100,
                    marginBottom: 5,
                    backgroundColor: "#fff",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <Image
                    source={imageSource}
                    style={{
                        height: 70,
                        width: 70
                    }}
                />
            </View>
            <Text
                style={{
                    fontSize: 12,
                    textAlign: "center"
                }}>{label}</Text>
        </TouchableOpacity>
    )
}
