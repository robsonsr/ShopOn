import React from 'react';
import { Container, Text } from './styles';
import { RNCamera } from 'react-native-camera';

const ReaderQRCode = ({ onCodeDetected }) => {
  return (
    <Container>
      <RNCamera
        style={{ width: '100%', height: '100%' }}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onGoogleVisionBarcodesDetected={({ barcodes }) => {
          onCodeDetected(barcodes[0].data);
        }}
      />
    </Container>
  );
};

export default ReaderQRCode;
