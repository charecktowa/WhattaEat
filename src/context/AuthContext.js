import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useState } from "react";
import { BASE_URL } from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const register = (email, password) => {
        setIsLoading(true);

        axios.post(`https://api.randomlearning.fun/user/user/signup`, {
            email, password
        }).then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            console.log(userInfo);
            AsyncStorage.setItem('userinfo', JSON.stringify(userInfo));
            setIsLoading(false);
        }).catch(e => {
            console.log(e);
            setIsLoading(false);
        });
    };

    const login = (email, password) => {
        setIsLoading(true);

        axios.post(`https://api.randomlearning.fun/user/user/login`, {
            email, password,
        }).then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            console.log(userInfo);
            AsyncStorage.setItem('userinfo', JSON.stringify(userInfo));
            setIsLoading(false);
        }).catch(e => {
            console.log(e);
            setIsLoading(false);
        })
    }

    return (
        <AuthContext.Provider value={{
            isLoading,
            userInfo,
            register,
            login,
        }}>{children}</AuthContext.Provider>
    );
};
