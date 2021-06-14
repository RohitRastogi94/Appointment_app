import React from 'react';
import { View, Text } from 'react-native';
import { Button } from './common'
import { connect } from 'react-redux'

const Home = (props) => {

    onBookAppointment = () => {
        props.navigation.navigate('bookAppointment')
    }

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 20, color: '#f4511e', letterSpacing: 1, paddingVertical: '5%' }}>{`Hi ${props.userDetails.username}`}</Text>
            <Button
                btnText={'Book Appointment'}
                onPress={onBookAppointment}
                customBtnContainerStyle={{ marginVertical: '10%' }}
            />
        </View>
    )
}

const mapStateToProps = state => {
    return {
        userDetails: state.AppReducers.response
    }
}

export default connect(mapStateToProps)(Home);