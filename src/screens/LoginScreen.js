import React, { useContext, useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import Spinner from "react-native-loading-spinner-overlay/lib";
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const { isLoading, login } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Spinner visible={isLoading} />
            <View style={styles.wrapper}>
                <TextInput
                    style={styles.intput}
                    value={email}
                    placeholder="Ingresa un correo"
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    style={styles.intput}
                    value={password}
                    placeholder="Ingresa una contraseña"
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />

                <Button
                    title="Iniciar sesión"
                    onPress={() => { login(email, password) }}
                />
            </View>

            <View style={{ flexDirection: 'row', marginTop: 30 }}>
                <Text>Crear una cuenta     </Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
                    <Text styles={styles.link}>Registrarse</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    wrapper: {
        width: '80%',
    },

    intput: {
        marginBottom: 12,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        paddingHorizontal: 14,
        padding: 10,
    },

    link: {
        color: 'red',
    },
});

export default LoginScreen;