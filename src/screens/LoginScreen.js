import React, { useContext, useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const { val } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <View>
                <Text>{val}</Text>
                <TextInput
                    style={styles.intput}
                    value={email}
                    placeholder="Ingresa un correo"
                    onChange={text => setEmail(text)}
                />
                <TextInput
                    style={styles.intput}
                    value={password}
                    placeholder="Ingresa una contraseña"
                    onChange={text => setPassword(text)}
                    secureTextEntry
                />

                <Button title="Iniciar sesión" />
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