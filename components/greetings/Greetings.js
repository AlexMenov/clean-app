import { Text } from "react-native";
import styled from "styled-components/native";
import logo from "../../assets/logo.png";
const GreetingsContainer = styled.TouchableOpacity`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
  background-color: #fff;
  height: 100%;
  width: 100%;
`;

const Logo = styled.Image`
  width: 240px;
  height: 85px;
`;

export const Greetings = () => {
  return (
    <GreetingsContainer>
      {logo ? <Logo source={logo} /> : <Text>загрузка данных...</Text>}
    </GreetingsContainer>
  );
};
