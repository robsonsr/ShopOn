import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    StatusBar
} from 'react-native';

import {
    DrawerContentScrollView
} from '@react-navigation/drawer';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomDrawerContent = (props) => {
    console.log("props", props)
    const { state: { index }, navigation } = props;
    return (
        <DrawerContentScrollView {...props}>

            <TouchableOpacity style={[styles.itemMenu]}
                onPress={() => {
                    navigation.navigate("DestaquesStack")
                }}>
                {index === 0 ?
                    <Image source={require("../assets/img/destaquesIconActive.png")} />
                    :
                    <Image source={require("../assets/img/destaquesIcon.png")} />
                }
                <Text
                    style={[styles.itemMenuLabel, (index === 0) && styles.itemMenuLabelActive]}>
                    destaques
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.itemMenu]}
                onPress={() => {
                    navigation.navigate("DepartamentoStack")
                }}>
                <MaterialCommunityIcons
                    name="format-list-bulleted-square"
                    size={25}
                    style={[styles.itemMenuIcon, (index === 1) && styles.itemMenuIconActive]}
                />
                <Text
                    style={[styles.itemMenuLabel, (index === 1) && styles.itemMenuLabelActive]}>
                    departamentos
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.itemMenu]}
                onPress={() => {
                    navigation.navigate("DepartamentoStack")
                }}>
                <MaterialCommunityIcons
                    name="cards-heart"
                    size={25}
                    style={[styles.itemMenuIcon, (index === 2) && styles.itemMenuIconActive]}
                />
                <Text style={[styles.itemMenuLabel, (index === 2) && styles.itemMenuLabelActive]}>
                    favoritos
                 </Text>
            </TouchableOpacity>

        </DrawerContentScrollView>
    );
}


export default CustomDrawerContent


const styles = StyleSheet.create({
    itemMenu: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 10
    },
    itemMenuIcon: {
        color: "#1A1A1A",
    },
    itemMenuLabel: {
        paddingHorizontal: 10,
        color: "#1A1A1A",
        fontWeight: "700",
        fontSize: 14
    },
    itemMenuLabelActive: {
        color: "#F51E1E",
    },
    itemMenuIconActive: {
        color: "#F51E1E",
    }
})