import React from 'react'
import {
    StyleSheet,
    Dimensions
} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    containerMenu: {
        flexDirection: "row",
        justifyContent: "space-around",
        // padding: 16
        paddingVertical: 16
    },
    containerButton: {
        width: windowWidth / 3 - 15,
        height: windowWidth / 3 - 15,
        maxWidth: 200,
        maxHeight: 200,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        padding: 5,
        // flexWrap: "wrap"
        backgroundColor: "#fff",
        elevation: 4,
        borderRadius: 4
    },
    containerBanner: {
        // justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    bannerAnuncioRetangular: {
        height: 90,
        backgroundColor: "gray"
    },
    bannerAnuncioQuadro: {
        width: windowWidth,
        height: windowWidth,
        // maxWidth: 200,
        // maxHeight: 200,
        backgroundColor: "gray"
    },
})

export default styles;