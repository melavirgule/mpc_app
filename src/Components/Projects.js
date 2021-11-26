import React, { useState, useEffect } from "react";
import { TextInput, View, Button, Platform, StyleSheet, Image
 } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { homeStyle } from "../Styles/home";
import * as DocumentPicker from 'expo-document-picker';
import * as MediaLibrary from 'expo-media-library';
// import DisplayDocs from "./DisplayDocs";



const Projects = () => {    
    const [textDescription, setTextDescription] = useState("");
    // const [selectedDocs, setSelectedDocs] = useState({});
    const [selectedDocs, setSelectedDocs] = useState({});



// Construction de mon textArea
    const TextAreaDescription = (props) => {
        return (
            <TextInput
                {...props}
                editable
                maxLength={1600}                
            />
        );
    }

    // useEffect(() => {
    //     (async () => {
    //         if(Platform.OS !== 'web') {
    //             const { status } = await MediaLibrary.requestPermissionsAsync();
    //             if ( status !== 'granted' ){
    //                 alert("Désolé, la permission est nécessaire pour accéder à la galerie");
    //             }
    //         }  
    //     })();
    // }, []);


   const handlePickDocs = async() => {
    let pickerResult = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        multiple: true,
        copyToCacheDirectory: true 
    });

    if(pickerResult.type === 'cancel'){
        return;
    }
    // console.log(pickerResult.uri);
    console.log(pickerResult);
    // console.log(pickerResult.name);
    // setSelectedDocs({ name: pickerResult.name})
    // setSelectedDocs({ localUri: pickerResult.uri });
    setSelectedDocs({ pickerResult });
    // console.log(selectedDocs.uri);

    console.log(selectedDocs)

   }

//    const DisplayPickedDocs = () => {
//     if ( selectedDocs !== null ){
//         return (
//             <View style={styles.container}>
//                 <Image
//                     source={{ uri: selectedDocs.localUri}}
//                     style={styles.thumbnail}
//                 />
    
//             </View>
//         );
//        }
//     }

// CONTINUER DE CHERCHER COMMENT MAPPER SUR UN OBJET !
    // const DisplayPickedDocs = () => {
    //     if ( selectedDocs !== null ){
    //         return (
    //             <View style={styles.container}>
    //             {selectedDocs && selectedDocs.map((el, localUri) => (
    //                 <Image key={el.name}
    //                     source={{ uri: selectedDocs.localUri}}
    //                     style={styles.thumbnail}
    //                 />))}
        
    //             </View>
    //         );
    //    }
    // }

    const DisplayPickedDocs = () => {
        if ( selectedDocs !== null ){
            return (
                <View style={styles.container}>
                    <Image
                        source={{ uri: selectedDocs.localUri}}
                        style={styles.thumbnail}
                    />
        
                </View>
            );
           }
        }
    




// voir ce qu'il se passe pour le textarea
    return(
        <SafeAreaView>
            <View>
            <TextAreaDescription
                // onChangeText={(textDescription) => setTextDescription(textDescription)}
                // value={textDescription}
                style={homeStyle.textarea}
                placeholder={"Entrez votre description ici"}
                multiline={true}
                numberOfLines={3}
            />

            <Button 
                title='Choisissez vos documents' 
                onPress={handlePickDocs} 
                style={homeStyle.chooseButton}
            />


            <DisplayPickedDocs/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center'

    },
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
});



export default Projects;