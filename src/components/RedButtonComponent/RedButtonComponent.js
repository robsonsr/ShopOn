import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

const RedButtonComponent = ({ onPress, label, outline }) => {

    return (

        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.container,
                outline && {
                    backgroundColor: "#fff",
                    borderColor: "#E60014",
                    borderWidth: 1
                }
            ]}>
            <Text
                style={[
                    styles.label,
                    outline && {
                        color: "#E60014"
                    }
                ]}>{label}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E60014",
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