import React from 'react'
import { View, Text, Image } from 'react-native'
import { useDarkModeContext, Dynamic, useDynamicStyleSheet, DynamicStyleSheet, DarkModeProvider } from 'react-native-dark-mode'

import Extra from './Extra'
import { dark, light } from './images'

export default function Screen() {
	const mode = useDarkModeContext()
	const styles = useDynamicStyleSheet(dynamicStyles)

	const uri = mode === 'dark' ? dark : light
	return <View style={styles.container}>
		<Image source={{ uri }} style={styles.image} />

		<Text style={styles.initialStyle}>
			Current mode: {mode}
		</Text>

		<DarkModeProvider mode="dark">
			<Extra />
		</DarkModeProvider>
		<DarkModeProvider mode="light">
			<Extra />
		</DarkModeProvider>
	</View>
}

const dynamicStyles = new DynamicStyleSheet({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: new Dynamic('#FFFFFF', '#000000')
	},
	initialStyle: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: new Dynamic('#000000', '#FFFFFF'),
	},
	image: {
		borderWidth: 1,
		borderColor: new Dynamic('#000000', '#FFFFFF'),
		width: 80,
		height: 80,
	},
})
