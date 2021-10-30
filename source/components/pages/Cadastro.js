import React from "react";
import {View, Text, StyleSheet,Image, Button, Alert} from 'react-native';


const Cadastro = (props) => (

    <View style = {style.container}>
        <Button
            title="Cadastrar Usuario"
            onPress={() => Alert.alert=('./source/components/pages/Quartos')}      
        />


    </View>


);

const style = StyleSheet.create({
    container:{

        marginTop: 60,
        justifyContent: 'center',
    },
    title: {

        flex: 1,
        fontSize: 25,

    }
});


export default Cadastro;