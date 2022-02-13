import React from 'react';
import { TouchableOpacity } from "react-native";
import { View, Text, Icon } from 'native-base';
// import LocationIcon from 'react-native-vector-icons/MaterialIcons';
import Styles from './style';
const styles = Styles;


const AddressCardComponent = (props) => {
    // console.log("AddressCardComponent", props.isPickup)
    return (
        <TouchableOpacity
            onPress={() => props.onPress(props.item)}
            style={props.isActive ? [styles.ViewWrapper, styles.slected] : styles.ViewWrapper}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text dark style={{ flex: 0.7 }}  >{props.name ? props.name : 'No Name'}</Text>
                <View style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Icon
                        style={props.isActive ? [styles.dot, styles.selectedDot] : styles.dot}
                        type="FontAwesome"
                        // name="circle"
                        name={props.isActive ? "circle-o" : "circle"}
                    />
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text info style={{ flex: 0.6 }}>{props.address}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                <Text style={{ flex: 0.7 }} info>{props.contact ? props.contact : 'no contact avsailable'}</Text>
                {props.isPickup ? null :
                    <TouchableOpacity onPress={() => props.onEdit(props.item)} style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Icon
                            style={styles.pen}
                            type="MaterialIcons"
                            name="edit"
                        // name={props.isActive ? "edit" : "edit"}
                        />
                    </TouchableOpacity>
                }
            </View>
        </TouchableOpacity>
    );
}


export default AddressCardComponent;
