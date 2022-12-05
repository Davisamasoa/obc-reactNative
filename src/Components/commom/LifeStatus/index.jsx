import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Lottie from "lottie-react-native";

export default function LifeStatus() {
	return (
		<View style={style.container}>
			<Lottie
				source={require("../../../assets/education/education-100.json")}
				autoPlay
				loop
				style={style.educacaoAnimacao}
			/>
			<Lottie
				source={require("../../../assets/money/money-100.json")}
				autoPlay
				loop
				style={style.financasAnimacao}
			/>
			<Lottie
				source={require("../../../assets/robot/robot-100-100.json")}
				autoPlay
				loop
				style={style.roboAnimacao}
			/>
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		width: 300,
		height: 300,
	},
	educacaoAnimacao: {
		width: 100,
		marginTop: 50,
		marginLeft: 5,
		position: "absolute",
	},
	financasAnimacao: {
		width: 100,
		marginTop: 50,
		marginLeft: 95,
		position: "absolute",
	},
	roboAnimacao: {
		width: 190,
		marginTop: 30,
		marginLeft: 25,
	},
});
