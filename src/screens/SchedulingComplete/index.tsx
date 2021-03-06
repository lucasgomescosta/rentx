import React from 'react';
import { useWindowDimensions, StatusBar } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from '../../assets/done.svg';

import { Container, Content, Title, Message, Footer } from "./styles";
import { ConfirmButton } from '../../components/ConfirmButton';

type NavigationProps = {
  navigate: (screen: string) => void;
};

export function SchedulingComplete() {
  const navigation = useNavigation<NavigationProps>();

  function handleConfirmRental() {
    navigation.navigate("Home");
  }
  const { width } = useWindowDimensions();

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir {"\n"}
          até a concessionária da RENTX {"\n"}
          pegar o seu automóvel.
        </Message>
      </Content>

      <Footer>
        <ConfirmButton
          title="OK"
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}