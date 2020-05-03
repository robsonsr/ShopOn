import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
const menu = <MaterialCommunityIcons name="menu" size={25} color="#fff" />
const searchIcon = <MaterialIcons name="search" size={25} color="#fff" />
const shoppingBasketIcon = <Fontisto name="shopping-basket" size={20} color="#fff" />

const backIcon = <MaterialIcons name="arrow-back" size={25} color="#fff" />

const screenOptions = ({ route, navigation }) => {
    return ({
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: '#F51E1E',
            // paddingHorizontal: 20
        },
        headerRight: () => {
            return <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    // backgroundColor: "blue",
                    paddingHorizontal: 20
                }}>
                <TouchableOpacity style={{ marginRight: 20 }}>
                    <View style={{
                        height: 25,
                        width: 25,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        {searchIcon}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{
                        height: 25,
                        width: 25,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        {shoppingBasketIcon}
                    </View>
                </TouchableOpacity>
            </View >
        },
        headerBackImage: () => {
            return (
                <View
                    style={{
                        height: 30,
                        width: 30,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    {backIcon}
                </View>
            )
        }
        // headerTitle: false,
        // headerLeft: (props) => {
        //     console.log("aaa", navigation)
        //     return (
        //         <View
        //             style={{
        //                 paddingHorizontal: 20,
        //                 flexDirection: 'row',
        //                 alignItems: 'center',
        //             }}>
        //             <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        //                 {menu}
        //             </TouchableOpacity>
        //         </View>
        //     );
        // }
    })
}
export default screenOptions;