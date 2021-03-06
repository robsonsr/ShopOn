import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';

import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const qrCode = <FontAwesomeIcons name="qrcode" size={50} color="#F51E1E" />;

const shoppingcart = (
  <AntDesign name="shoppingcart" size={50} color="#F51E1E" />
);

const historic = <Ionicons name="md-paper" size={50} color="#F51E1E" />;

const ModoLojaHomeScreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <>
      <View
        style={{
          backgroundColor: '#F4F4F4',
        }}>
        <ScrollView style={{ padding: 10 }}>
          <View style={[styles.bannerAnuncioRetangular]} >
            <Image
              source={require("../../assets/img/banner.png")}
            />
          </View>
          <View style={[styles.containerMenu]}>
            <Button
              onPress={() => navigate('ProductDetails')}
              icon={qrCode}
              label="consulte o produto com QR Code"
            />
            <Button
              onPress={() => navigate('CarrinhoScreen')}
              icon={shoppingcart}
              label="monte o seu carrinho"
            />
            <Button
              icon={historic}
              label="veja sua jornada pela nossa sloja"
              onPress={() => navigate('HistoricoMenu')}
            />
          </View>
          <View style={[styles.containerBanner]}>
            <View style={[styles.bannerAnuncioQuadro]} />
          </View>
          <View style={[styles.containerBanner]}>
            <View style={[styles.bannerAnuncioQuadro]} />
          </View>
        </ScrollView>
      </View>
    </>
  );
};
export default ModoLojaHomeScreen;

const Button = ({ icon, onPress, label }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.containerButton]}>
      <View style={{ alignItems: 'center' }}>
        {icon}
        <Text
          style={{
            textAlign: 'center',
            fontSize: 12,
          }}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
