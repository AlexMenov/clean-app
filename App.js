import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { Greetings } from "./components/greetings/Greetings";
import { Login, Register } from "./components/LoginOrRegister/LoginOrRegister";
const Stack = createNativeStackNavigator();
export default function App() {
  const [showGreetings, setShowGreetings] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowGreetings(false), 2000);
    return {
      timer,
    };
  }, []);
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Login></Login>
        <Register></Register>
        {showGreetings ? <Greetings /> : ""}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
