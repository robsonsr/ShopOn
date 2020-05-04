
import React, { useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'

import { RNCamera, FaceDetector } from 'react-native-camera';
import Modal from 'react-native-modal';

import RedButtonComponent from '../RedButtonComponent'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const backIcon = <MaterialIcons name="arrow-back" size={25} color="#fff" />

const ReaderBarCode = ({ showCamera, closeCamera, onCodeDetected }) => {
    return (
        <Modal
            animationIn={"fadeIn"}
            animationOut={"fadeOut"}
            isVisible={showCamera}
            style={{
                padding: 0,
                margin: 0
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    backgroundColor: '#F51E1E',
                    height: 55,
                    padding: 10,
                    elevation: 4,
                    justifyContent: "flex-start",
                    alignItems: "center"
                }}>
                <TouchableOpacity
                    onPress={closeCamera}
                    style={{
                        height: 30,
                        width: 30,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    {backIcon}
                </TouchableOpacity>
                <Text
                    style={{
                        color: "#fff",
                        fontSize: 18,
                        fontWeight: "700",
                        marginLeft: 30
                    }}>leitor de código de barras</Text>
            </View>
            <View
                style={{
                    flex: 1
                }}>
                <RNCamera
                    style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    onGoogleVisionBarcodesDetected={({ barcodes }) => {
                        if (barcodes[0].type === "EAN_13" || barcodes[0].type === "EAN_8") {
                            closeCamera();
                            onCodeDetected(barcodes[0].data);
                        }
                    }}
                />
                <View
                    style={{
                        backgroundColor: "#fff",
                        padding: 40
                    }}>
                    <View>
                        <Text style={{
                            textAlign: "center",
                            fontSize: 18
                        }}>Faça a leitura dos produtos através do código de barras e adicione ao seu carrinho de compras.</Text>
                        <View
                            style={{
                                marginTop: 20
                            }}>
                            <RedButtonComponent label={"teve alguma problema?"} />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ReaderBarCode;