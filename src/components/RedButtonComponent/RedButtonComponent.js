import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

const RedButtonComponent = ({ onPress, label }) => {

    return (

        <TouchableOpacity
            onPress={onPress}
            style={[styles.container]}>
            <Text
                style={[styles.label]}>{label}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        borderRadius: 2,
        // elevation: 2,
        // height: 36,
        padding: 10,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    label: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        letterSpacing: 1
    }
})

export default RedButtonComponent