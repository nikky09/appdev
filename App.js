import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./pages/home/Home";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";
import QRCode from "react-native-qrcode-svg";
import ViewShot from "react-native-view-shot-svg";


export default function App() {
  return (
    // <NavigationContainer>
    //   <View style={styles.container}>
    //     <StatusBar style="auto" />
    //     <Home />
    //   </View>
    // </NavigationContainer>
    <AppNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#325ca8",
    alignItems: "center",
    justifyContent: "center",
  },
});
