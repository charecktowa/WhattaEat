import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { ActivityIndicator, Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../context/AuthContext";

const HomeScreen = () => {
    const { userInfo } = useContext(AuthContext);

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        axios.get('https://api.randomlearning.fun/places/places/?skip=0&limit=6', {
            headers: {
                Authorization: `Bearer ${userInfo}`
            }
        }).then((res) => {
            console.log(res.photo)

        }).then((resJSON) => {
            setData(resJSON.results);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    const renderUser = (item) => {
        return (
            <View style={styles.item}>
                <Image
                    style={styles.image}
                    source={{ uri: item.photo }}
                    resizeMode="contain"
                />
                <View style={styles.wrapText}>
                    <Text>Hey</Text>
                </View>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            {
                isLoading ? <ActivityIndicator /> : (
                    <FlatList
                        data={data}
                        keyExtractor={item => `key-${item.id}`}
                        renderItem={renderUser}
                    />
                )
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    fontSize: {
        fontSize: 12,
    },
    image: {
        width: 100,
        height: 100,
    },
    wrapText: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    item: {
        flexDirection: 'row',
        marginBottom: 20,
        borderRadius: 10,
    },
    container: {
        flex: 1
    },
});

export default HomeScreen;