import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

class OnePizzaWindow extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Image
                    style={{width: 50, height: 50}}
                    source={{uri: this.props.image}}/>
                <Text> {this.props.text}</Text>
                <Text> {this.props.price}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 10
    },
});

export default OnePizzaWindow;