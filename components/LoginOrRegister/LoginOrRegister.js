import styled, { css } from "styled-components/native";
const container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: tomato;
  color: #fff;
  font-size: 25px;
  width: 200px;
  height: 75px;
  border-radius: 15px;
  font-weight: 500;
`;
const LoginContainer = styled.TouchableOpacity`
  ${container}
  margin-bottom: 50px;
`;
const RegisterContainer = styled.TouchableOpacity`
  ${container}
`;

export const Login = () => {
  return <LoginContainer onPress={() => alert("login")}>Вход</LoginContainer>;
};

export const Register = () => {
  return <RegisterContainer onPress={() => alert("register")}>Регистрация</RegisterContainer>;
};
