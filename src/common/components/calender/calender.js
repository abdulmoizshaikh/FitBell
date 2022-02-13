// https://github.com/wix/react-native-calendars


import React from 'react';
import { Calendar } from 'react-native-calendars';
import Styles from './style.js';
const styles = Styles;



const CalenderComponent = (props) => {
    return (
        <Calendar
            style={styles.calendar}
            // hideExtraDays
            onDayPress={props.onDayPress}
            markedDates={props.markedDates}
            // minDate={new Date()}

            theme={{
                selectedDayBackgroundColor: 'rgb(149, 202, 49)',
                selectedDayTextColor: "#fff",
                selectedDotColor: "#fff",
                dotColor: 'rgb(149, 202, 49)',
                arrowColor: '#000',
                todayTextColor: '#000'
            }}
        />
    );
}

export default CalenderComponent;