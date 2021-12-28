import React from 'react';
import { View } from 'react-native';

import loadingCar from "../../assets/loadingCar.json";

import LottieView from 'lottie-react-native'

import { Container } from './styles';

export function LoadAnimation() {
  return (
    <Container>
      <LottieView
        source={loadingCar}
        style={{ height: 200 }}
        resizeMode="contain"
        autoPlay
        loop
      />
    </Container>
  )
}