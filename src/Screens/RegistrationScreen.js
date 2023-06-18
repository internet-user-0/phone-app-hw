import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";

const initialState = {
	name: "",
	email: "",
	password: "",
};

export const RegistrationScreen = (props) => {
	const [state, setState] = useState(initialState);

	const submitForm = () => {
		Keyboard.dismiss()
		console.log(state)
	}
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<ImageBackground
					style={styles.image}
					source={require("../../assets/mountains-picture-BG.png")}>
					<View style={styles.formBox}>
						<View style={styles.avatar}>
						<TouchableOpacity style={styles.addAvatarBtn} >
								<Text >svg</Text>
							</TouchableOpacity>
						</View>
						<Text style={styles.title}>Реєстрація</Text>
						<View style={styles.form} marginBottom={16}>
							<TextInput
								style={styles.input}
								marginBottom={16}
								placeholder="Логин"
								onChangeText={(value) =>
									setState((prevSate) => ({ ...prevSate, name: value }))
								}></TextInput>
							<TextInput
								style={styles.input}
								marginBottom={16}
								placeholder="Адреса електронної пошти"
								onChangeText={(value) =>
									setState((prevSate) => ({ ...prevSate, email: value }))
								}></TextInput>
							<View marginBottom={43}>
								<TextInput
									style={styles.input}
									secureTextEntry={true}
									placeholder="Пароль"
									onChangeText={(value) =>
										setState((prevSate) => ({ ...prevSate, password: value }))
									}></TextInput>
									<TouchableOpacity style={styles.btnLook}>
									<Text>Показати</Text>
									</TouchableOpacity>
							</View>
							<TouchableOpacity style={styles.btnLoad} onPress={submitForm}>
								<Text style={styles.btnLoadText}>Зареєстуватися</Text>
							</TouchableOpacity>
						</View>
						<TouchableOpacity>
							<Text style={styles.toLog}>Вже є акаунт? Увійти</Text>
						</TouchableOpacity>
					</View>
				</ImageBackground>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "flex-end",
	},
	formBox: {
		backgroundColor: "#FFFFFF",
		borderTopRightRadius: 25,
		borderTopLeftRadius: 25,
		paddingTop: 92,
		paddingBottom: 78,
	},
	avatar: {
		width: 120,
		height: 120,
		backgroundColor: "#F6F6F6",
		borderRadius: 16,
		position: "absolute",
		left: "35%",
		top: -60,
	},
	addAvatarBtn:{
		paddingHorizontal:10,
		paddingVertical: 1,
		position: "absolute",
		right: -10,
		bottom: 14,
		borderRadius: 100,
		borderWidth: 1,
		borderColor: "#FF6C00",
	},
	title: {
		color: "#212121",
		fontWeight: 500,
		fontSize: 30,
		lineHeight: 35,
		textAlign: "center",
		marginBottom: 33,
	},
	form: {
		marginHorizontal: 16,
	},
	input: {
		backgroundColor: "#F6F6F6",
		paddingLeft: 16,
		borderWidth: 1,
		borderRadius: 8,
		borderColor: "#E8E8E8",
		height: 50,
	},
	btnLook: {
		position: "absolute",
		left: "80%",
		top: 16,
		color: "#1B4371",
		fontWeight: 400,
		fontSize: 16,
		lineHeight: 19,
	},
	btnLoad: {
		backgroundColor: "#FF6C00",
		paddingVertical: 16,
		borderRadius: 100,
		textAlign: "cebter",
		alignItems: "center",
	},
	btnLoadText: {
		color: "#ffffff",
		fontWeight: 400,
		fontSize: 16,
		fontWeight: 19,
	},
	toLog: {
		color: "#1B4371",
		textAlign: "center",
	},
	focus: {
		backgroundColor: "red",
	},
});
