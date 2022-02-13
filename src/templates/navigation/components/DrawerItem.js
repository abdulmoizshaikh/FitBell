import React from 'react'
import { 
    View, 
    Text, 
    TouchableWithoutFeedback 
} from 'react-native'
import styles from './styles'

export default function DrawerItem({ label, onPress, active }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.drawerItemContainer, active ? styles.activeItem : {}]}>
                <Text style={styles.drawerLabel}>{label}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}
