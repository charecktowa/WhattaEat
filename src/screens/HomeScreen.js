import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../context/AuthContext";

const HomeScreen = () => {
    const { userInfo, logout, isLoading } = useContext(AuthContext);
    let { sites } = useState(null)


    const fetchImages = (userInfo) => {

        axios.get(`https://api.randomlearning.fun/places/places/?skip=0&limit=3`, {
            headers: {
                Authorization: `Bearer ${userInfo}`
            }
        }).then((res) => {
            sites = res.data
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <View>
            <Text>Hello, WOrld</Text>
            <Button
                title="press me"
                onPress={() => fetchImages(userInfo)}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1,
        padding: 8,
    },
});

export default HomeScreen;