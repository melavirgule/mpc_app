import React, { useState } from "react";
import {
  Image,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { loginStyle } from "../Styles/login";

export default function Login({ navigation }) {
  const [loginText, setLoginText] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  const handleLogin = (props) => {
    // const isUserLoggedIn = props.isUserLoggedIn;
    // if (isUserLoggedIn) {
    navigation.navigate("HomeScreen", { screen: "HomeScreen" });
    // } else {
    //     return <Text>Veuillez vous connecter svp</Text>
    // }
  };

  return (
    <SafeAreaView style={loginStyle.mainContainer}>
      <View style={loginStyle.loginContainerHeader}>
        <Image
          source={require("../assets/smallLogo.png")}
          resizeMode="center"
          style={loginStyle.loginLogo}
        />
      </View>

      <View style={loginStyle.loginContainerFooter}>
        <View style={loginStyle.textInputContainer}>
          <TextInput
            style={loginStyle.textInput}
            onChangeText={(loginText) => setLoginText(loginText)}
            value={loginText}
            placeholder="Identifiant"
            // left={<TextInput.Icon name="account" />}
            textAlign={"center"}
            placeholderTextColor="white"

            //   {<UserOutlined />}
          />
          <UserOutlined style={{ fontSize: '16px', color: '#08c', marginLeft: '-25px' }} />
        </View>

        <View style={loginStyle.textInputContainer}>
          <TextInput
            style={loginStyle.textInput}
            onChangeText={(loginPass) => setLoginPass(loginPass)}
            value={loginPass}
            placeholderTextColor="white"
            placeholder="Mot de passe"
            textAlign={"center"}
            secureTextEntry={isSecureEntry}
          />
          <TouchableOpacity>
            <EyeOutlined style={{ fontSize: '16px', color: '#08c', marginLeft: '-25px' }} />
            {/* <EyeInvisibleOutlined style={{ fontSize: '16px', color: '#08c', marginLeft: '-25px' }} /> */}
          </TouchableOpacity>

        </View>

        <TouchableOpacity onPress={handleLogin} style={loginStyle.loginButton}>
          <Text>Se Connecter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
