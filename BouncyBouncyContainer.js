import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	Animated,
} from 'react-native'

export default class BouncyBouncyContainer extends Component {

	state = {
		animation: new Animated.Value(0)
	}

	appear = (callback) => {
		const { animation } = this.state
		animation.setValue(0)
		Animated.spring(animation, {
			toValue: 1,
			timing: 200,
		}).start(callback)
	}

	bounce = (callback) => {
		const { animation } = this.state
		Animated.timing(animation, {
			toValue: 0,
			duration: 100,
		}).start(() => {
			callback()
			this.appear()
		})
	}

	render() {
		const { animation } = this.state
		const { children } = this.props
		return (
			<Animated.View style={{ transform: [{ scale: animation }] }}>
				{children}
			</Animated.View>
		);
	}
}
