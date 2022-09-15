import React, { useLayoutEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, Input, Text } from 'react-native-elements';
import { auth } from '../firebase';

const Registrar = ({ navigation }) => {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [imagemUrl, setImagemUrl] = useState("")

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Voltar ao Login",
        });
    }, [navigation]);

    const register = () => {
        auth
        .createUserWithEmailAndPassword(email, senha)
        .then((authUser) => {
            authUser.user.updateProfile({
                displayNome: nome,
                photoUrl: imagemUrl ||
                 "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
            });
        })
        .catch((error) => alert(error.message));
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={{ marginBottom: 50 }}>
                Registrar
            </Text>

            <View style={styles.inputContainer}>
                <Input
                    placeholder="Nome Completo"
                    autofocus type='text'
                    value={nome}
                    onChangeText={text => setNome(text)}
                />
                <Input
                    placeholder="E-mail"
                    type='email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <Input
                    placeholder="Senha"
                    type='senha'
                    secureTextEntry
                    value={senha}
                    onChangeText={text => setSenha(text)}
                />
                <Input
                    placeholder="Imagem de Perfil URL (Opcional)"
                    type='text'
                    value={imagemUrl}
                    onChangeText={text => setImagemUrl(text)}
                    onSubmitEditing={register}
                />
            </View>
            <Button
                style={styles.button}
                raised
                onPress={register}
                title="Registrar" />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}

export default Registrar

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