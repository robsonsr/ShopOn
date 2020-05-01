import React, { useState } from 'react';
import ReaderQRCode from '../../components/ReaderQRCode';
import { Container, Text } from './styles';

const ProductDetails = (props) => {
  const [code, setCode] = useState('0001');

  return code.length > 0 ? (
    <Container>
      <Text>{code}</Text>
    </Container>
  ) : (
      <ReaderQRCode onCodeDetected={(code) => setCode(code)} />
    )
}

export default ProductDetails;
