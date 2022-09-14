import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from "react-native-elements"
import { auth } from '../firebase';

const TeladeLogin = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                navigation.replace("Home");
            }
        });

        return unsubscribe; 
    }, [] );



    const Entrar = () => {

    }

    return (
        //pelo keyboardAvoid o teclado aparecerá debaixo dos itens (levantando)
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="Light" />
            <Image source={{
                uri: "https://cdn-icons-png.flaticon.com/512/1453/1453729.png",
            }}
                style={{ width: 200, height: 200 }} />

            <View style={styles.inputContainer}>
                <Input
                    placeholder="Email"
                    autoFocus type="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)} />

                <Input placeholder="Senha"
                    secureTextEntry type="password"
                    value={senha}
                    onChangeText={(text) => setSenha(text)} />
            </View>
            <Button containerStyle={styles.button} onPress={Entrar} title="Login" />
            <Button onPress={() => navigation.navigate("Registrar")} containerStyle={styles.button} type="outline" title="Registrar" />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}
export default TeladeLogin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    },

})