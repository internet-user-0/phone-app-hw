import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

import { RegistrationScreen } from "./src/Screens/RegistrationScreen";
import { LoginScreen } from "./src/Screens/LoginScreen";

export default function App() {
	return (

		<RegistrationScreen style={styles.container}/>
		// <LoginScreen style={styles.container}/>

	);
}

const styles = StyleSheet.create({
	container: {
	flex: 1,
	backgroundColor: "#fff",
	alignItems: "center",
	justifyContent: "center",
	},
});
