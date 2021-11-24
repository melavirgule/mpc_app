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

  const Checkbox = ({ onValueChange, selected }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onValueChange}
      style={loginStyle.checkbox}>
      {selected && <Text style={loginStyle.checkmark}>✓</Text>}
    </TouchableOpacity>
  );

  const [isSelected, setSelected] = useState(false);
  
  const toggleCheckbox = () => setSelected(!isSelected);


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
            placeholderTextColor="white"
            // textAlign={"center"}
          />
          <UserOutlined style={{ fontSize: '16px', color: '#08c', marginLeft: '-25px' }} />
        </View>

        <View style={loginStyle.textInputContainer}>
          <TextInput
            style={loginStyle.textInput}
            onChangeText={(loginPass) => setLoginPass(loginPass)}
            value={loginPass}
            placeholder="Mot de passe"
            placeholderTextColor="white"
            // textAlign={"center"}
            secureTextEntry={isSecureEntry}
          />
          <TouchableOpacity 
            onPress={() => {
              setIsSecureEntry((prev) => !prev)
            }}
          >
            {isSecureEntry ? <EyeOutlined style={{ fontSize: '16px', color: '#08c', marginLeft: '-25px' }} /> :             <EyeInvisibleOutlined style={{ fontSize: '16px', color: '#08c', marginLeft: '-25px' }} />
            }
          </TouchableOpacity>
        </View>

      <View style={loginStyle.checkboxContainer}>
        <Checkbox onValueChange={toggleCheckbox} selected={isSelected} />
        <TouchableOpacity activeOpacity={0.8} onPress={toggleCheckbox}>
          <Text style={loginStyle.label}>{"J'accepte les conditions générales"}</Text>
        </TouchableOpacity>
      </View>

        <TouchableOpacity 
          onPress={handleLogin} 
          style={loginStyle.loginButton}>
            <Text style={loginStyle.loginButtonText}>Se Connecter</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}
