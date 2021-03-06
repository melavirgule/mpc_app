// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppStack from "./src/routes/AppStack";


export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <View style={styles.container}>
          {/* <Text>Open up App.js to start working on your app!</Text> */}
          {/* <StatusBar style="auto" /> */}
          <AppStack />
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
