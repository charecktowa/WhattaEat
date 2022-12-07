import React from "react";
import { Text, View } from 'react-native';
import Navigation from "./src/components/Navigation";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}

