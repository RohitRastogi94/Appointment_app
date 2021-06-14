import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { Input, Button } from './common'
import { AppActions } from './actions/AppActions'

const emailValidation = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);

const UserDetails = (props) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [errMsg, setErrMsg] = useState('')

    validateFields = () => {
        let valid = false
        let validateEmail = emailValidation.test(email.trim())
        if (username.length == 0) {
            setErrMsg('Please enter Username')
            return valid
        }
        else if (username.length <= 3) {
            setErrMsg('Username should be more than 3 letters')
            return valid
        } else if (email.length == 0) {
            setErrMsg('Please enter E-mail')
            return valid
        }
        else if (email.trim().length > 0 && !validateEmail) {
            setErrMsg('Please enter valid E-mail')
            return valid
        }
        else if (mobile.length == 0) {
            setErrMsg('Please enter Mobile No.')
            return valid
        }
        else if (mobile.length != 10) {
            setErrMsg('Please enter valid Mobile No.')
            return valid
        }
        setErrMsg('')
        return valid = true
    }

    onNext = () => {
        if (validateFields()) {
            let obj = {
                username: username.toLowerCase(),
                email: email.toLowerCase(),
                mobile
            }
            props.setUserDetails(obj)
            setUsername('')
            setEmail('')
            setMobile('')
            props.navigation.navigate('home')
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}
                keyboardShouldPersistTaps='handled'
            >
                {errMsg.length > 0 && <Text style={styles.errTxtStyle}>{errMsg}</Text>}
                <Input
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                    placeholder={'Username'}
                />
                <Input
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder={'E-Mail'}
                />
                <Input
                    value={mobile}
                    onChangeText={(text) => setMobile(text)}
                    placeholder={'Mobile No.'}
                    keyboardType={'numeric'}
                    maxLength={10}
                />
                <Button
                    btnText={'Next'}
                    customBtnContainerStyle={{ marginVertical: '5%' }}
                    onPress={onNext}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    scrollContainer: {
        flex: 1,
        padding: '5%'
    },
    errTxtStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 16
    }
})

const mapDispatchToProps = dispatch => ({
    setUserDetails: data => dispatch(AppActions.setUserDetails(data)),
});

export default connect(null, mapDispatchToProps)(UserDetails);