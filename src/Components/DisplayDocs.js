import React, { useState } from "react";
import { StyleSheet, View, Image, Button } from "react-native";
import { homeStyle } from "../Styles/home";
import Projects from "./Projects";


const DisplayDocs = ({selectedDocs, pickerResult, handlePickDocs}) => {
    // const  = props.selectedDocs;
    console.log(selectedDocs)
    // const handlePickDocs




    // if ( selectedDocs !== null )

    return (
        <>
            <View style={styles.container}>
                <Image
                    source={{ uri: selectedDocs.localUri }}
                    style={styles.thumbnail}
                />
            </View>


            {/* <View style={styles.buttonContainer}>
                <Button title='Return' onPress={pressHandler} />
                <Button title='Valider' onPress={handleDocSubmit} />
            </View> */}
        </>
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


export default DisplayDocs;