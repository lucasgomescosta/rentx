import React, { useEffect } from 'react';
import { Button, StyleSheet, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
  runOnJS
} from 'react-native-reanimated';

import { useNavigation} from "@react-navigation/native";

import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';

import { Container } from './styles';

type NavigationProps = {
  navigate: (screen: string) => void;
};

export function Splash() {
  const navigation = useNavigation<NavigationProps>();
  const splashAnimation = useSharedValue(0);

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
      transform: [
        {
          translateX: interpolate(splashAnimation.value,
            [0, 50],
            [0, -50],
            Extrapolate.CLAMP
          )
        }
      ]
    }
  })

    const logoStyle = useAnimatedStyle(() => {
      return {
        opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, 0.3, 1]),
        transform: [
          {
            translateX: interpolate(
              splashAnimation.value,
              [0, 50],
              [-50, 0],
              Extrapolate.CLAMP
            ),
          },
        ],
      };
    });

  function startApp() {
    navigation.navigate("Home");
  }
  
  useEffect(() => {
    splashAnimation.value = withTiming(
      50,
      { duration: 1000 },
      () => {
        'worklet'
        runOnJS(startApp)();
      }
    )
  }, [])

  return (
    <Container>
      <Animated.View style={[brandStyle, { position: "absolute" }]}>
        <BrandSvg width={80} height={80} />
      </Animated.View>

      <Animated.View style={[logoStyle, { position: "absolute" }]}>
        <LogoSvg width={80} height={80} />
      </Animated.View>
    </Container>
  );
}