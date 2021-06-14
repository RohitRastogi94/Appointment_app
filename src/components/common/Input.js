import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const Input = ({ value, onChangeText, placeholder, keyboardType = 'default', maxLength }) => {
    return (
        <View
            style={styles.textContainer}
        >
            <TextInput
                style={styles.textStyle}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={'#6b7380'}
                keyboardType={keyboardType}
                maxLength={maxLength}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        width: '80%',
        height: '8%',
        borderBottomWidth: 1,
        borderColor: '#000000',
        marginVertical: '3%'
    },
    textStyle: {
        width: '100%',
        height: '100%',
        letterSpacing: 1,
        padding: 0,
        fontSize: 16,
        color: '#000000'
    }
})

export default Input;