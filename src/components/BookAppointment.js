import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux'
import { ChonseSelect } from 'react-native-chonse-select';
import moment from 'moment'
import { tabData, timeSlotsData } from '../utils/CommonUtils'
import { setUserDetails, getUserDetails } from '../utils/StorageUtils'
import { Button } from './common';


const BookAppointment = ({ navigation, userDetails }) => {
    const [selectedDate, setSelectedDate] = useState('0')
    const [timeSlots, setTimeSlots] = useState(timeSlotsData)
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('')

    useEffect(async () => {
        const { username: user, email, mobile } = userDetails
        let bookedUserData = await getUserDetails()
        let currentTS = Date.now()

        let currentDate = moment(currentTS).add(parseInt(selectedDate), 'days').format('D/M/Y');
        let userBooked = []
        if (bookedUserData) {
            userBooked = bookedUserData.filter((obj) => {
                return (obj.username == user || obj.email == email || obj.mobile == mobile) && obj.slotBooked.bookedDate == currentDate
            })

            let timeSlotsArr = JSON.parse(JSON.stringify(timeSlotsData))

            userBooked.forEach(element => {
                const { bookedTime } = element.slotBooked
                timeSlotsArr.forEach(o => {
                    if (o.time == bookedTime) o.available = false
                })
            });
            setTimeSlots(timeSlotsArr)
        }
    }, [selectedDate])

    onBookClick = async () => {
        if (selectedTimeSlot != '') {
            let currentTS = Date.now()
            let date = moment(currentTS).add(parseInt(selectedDate), 'days').format('D/M/Y');
            let slotBooked = {
                bookedDate: date,
                bookedTime: selectedTimeSlot
            }
            let obj = { ...userDetails, slotBooked }
            let saved = await setUserDetails(obj)
            if (saved) {
                Alert.alert('Message!',
                    `Appointment booked successfully for ${date} at ${selectedTimeSlot}`,
                    [{ text: 'OK', onPress: () => navigation.navigate('userDetails') }]
                )
            }
        } else {
            Alert.alert('Error!', 'Please select time slot')
        }
    }

    renderSlotList = ({ item }) => {

        return (
            <TouchableOpacity
                style={[styles.timeSlotContainer, !item.available ? styles.bookedSlotContainer : selectedTimeSlot == item.time ? styles.selectedSlotContainer : {}]}
                onPress={() => setSelectedTimeSlot(item.time)}
                disabled={!item.available}
            >
                <Text style={[styles.txtStyle, !item.available || selectedTimeSlot == item.time ? styles.bookedTxtStyle : {}]}>
                    {item.time}
                </Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', padding: '6%' }}>
            <ChonseSelect
                height={50}
                textStyle={{ letterSpacing: 1, fontSize: 16 }}
                data={tabData}
                initValue={selectedDate}
                onPress={(item) => {
                    setSelectedDate(item.value)
                }}
            />
            <View style={{ margin: '8%', flexShrink: 1 }}>
                <FlatList
                    keyboardShouldPersistTaps={'handled'}
                    data={timeSlots}
                    renderItem={renderSlotList}
                    numColumns={3}
                    style={{}}
                    keyExtractor={(item, index) => index}
                />
            </View>
            <Button
                btnText={'Book'}
                onPress={onBookClick}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    timeSlotContainer: {
        borderWidth: .8,
        borderColor: 'grey',
        borderRadius: 4,
        margin: 4,
        padding: 10,
        backgroundColor: 'white'
    },
    selectedSlotContainer: {
        backgroundColor: 'green'
    },
    bookedSlotContainer: {
        backgroundColor: 'grey'
    },
    txtStyle: {
        color: '#000000',
        fontSize: 14,
        letterSpacing: 1
    },
    bookedTxtStyle: {
        color: '#FFFFFF'
    }
})

const mapStateToProps = state => {
    return {
        userDetails: state.AppReducers.response
    }
}

export default connect(mapStateToProps)(BookAppointment)