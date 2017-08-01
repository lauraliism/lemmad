import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	TouchableOpacity,
} from 'react-native'
import _ from 'lodash'

import BouncyBouncyContainer from './BouncyBouncyContainer'

function getLemmad(index) {
	switch (index) {
		case 0:
			return require('./lemmad/lemmad0.json')
		case 1:
			return require('./lemmad/lemmad1.json')
		case 2:
			return require('./lemmad/lemmad2.json')
		case 3:
			return require('./lemmad/lemmad3.json')
		case 4:
			return require('./lemmad/lemmad4.json')
		case 5:
			return require('./lemmad/lemmad5.json')
		case 6:
			return require('./lemmad/lemmad6.json')
		case 7:
			return require('./lemmad/lemmad7.json')
		case 8:
			return require('./lemmad/lemmad8.json')
		case 9:
			return require('./lemmad/lemmad9.json')
		case 10:
			return require('./lemmad/lemmad10.json')
		case 11:
			return require('./lemmad/lemmad11.json')
		case 12:
			return require('./lemmad/lemmad12.json')
		case 13:
			return require('./lemmad/lemmad13.json')
		case 14:
			return require('./lemmad/lemmad14.json')
		case 15:
			return require('./lemmad/lemmad15.json')
		case 16:
			return require('./lemmad/lemmad16.json')
		case 17:
			return require('./lemmad/lemmad17.json')
		default:
			return []
	}
}

const MAX_LEMMAD = 17

const { width } = Dimensions.get('window')

const DIAMETER = width * 0.8

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FAFAFA'
	},
	circle: {
		backgroundColor: '#2196F3',
		width: DIAMETER,
		height: DIAMETER,
		borderRadius: DIAMETER / 2,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: 'gray',
		shadowOffset: { width: 0, height: 1 },
		shadowRadius: 4,
		shadowOpacity: 1,
		elevation: 4,
		margin: 5,
	},
	text: {
		backgroundColor: 'transparent',
		color: '#FAFAFA',
		fontSize: DIAMETER * 0.1,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	button: {
		position: 'absolute',
		bottom: 20,
		padding: 20,
	},
})

export default class App extends Component {

	state = {
		word: _.sample(getLemmad(_.random(17)))
	}

	componentDidMount() {
		this.bouncer.appear()
	}

	setNewLemmad = () =>{
		this.bouncer.bounce(() => {
			this.setState({
				word: _.sample(getLemmad(_.random(17)))
			})
		})
	}

	bouncer: BouncyBouncyContainer

	render() {
		const { word } = this.state
		return (
			<View style={styles.container}>
				<BouncyBouncyContainer ref={(view) => { this.bouncer = view }}>
					<View style={styles.circle}>
						<Text style={styles.text}>
							{word}
						</Text>
					</View>
				</BouncyBouncyContainer>
				<TouchableOpacity
					onPress={this.setNewLemmad}
					style={styles.button}
				>
					<Text>Generate</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
