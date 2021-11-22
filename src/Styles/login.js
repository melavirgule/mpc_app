import { StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import { windowHeight } from "./dimension";
import { windowWidth } from "./dimension";

export const loginStyle = StyleSheet.create ({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ACC4F2',
        // backgroundColor: '#42d694',
    },
    loginContainerHeader: {
        flex: 1,
        marginBottom: 20,
    },
    loginLogo: {
        flex: 1,
        width: 200,
        height: 200,
    },
    loginContainerFooter: {
        width: windowWidth,
        flex: 2,
        // backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
    // textInputContainer: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    //     width: 260,
    //     height: 50,
    //     // backgroundColor: '#ffffff',
    //     // borderWidth: 2,
    //     // borderColor: '#42d694',
    //     margin: 20,
    //     paddingRight: 20,
    //     paddingLeft: 20,
        
    // },
    textInput: {
        width: 200,
        height: 50,
        textAlign: 'left',
        marginTop: 15,
        marginBottom: 25,
        // borderRadius: 10,
        borderBottomWidth: 2,
        borderColor: '#4D36B7',

        // backgroundColor: '#ffffff',
        paddingLeft: 15,
        paddingRight: 20,
        // borderBottomColor: 'none',
        // borderBottomWidth: 0,
    },

    loginButton: {
        width: 150,
        height: 50,
        maxHeight: 60,
        marginTop: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4D36B7',
        // backgroundColor: 'purple',
        // backgroundColor: 'rgb(64, 48, 142, 0.5)',
        borderRadius: 10,


    },
})