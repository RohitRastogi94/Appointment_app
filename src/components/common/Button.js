import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const Button = ({ btnText, onPress, customBtnContainerStyle }) => {
    return (
        <TouchableOpacity
            style={[styles.buttonContainer, customBtnContainerStyle]}
            onPress={onPress}
        >
            <Text
                style={styles.buttonTextStyle}
            >
                {btnText}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        minWidth: '65%',
        backgroundColor: '#28c1c9',
        padding: 14,
        borderRadius: 8
    },
    buttonTextStyle: {
        fontSize: 18,
        textAlign: 'center',
        letterSpacing: 1,
        color: 'black'
    }
})

export default Button;