import React from 'react'
import { Image, View, Text, TouchableWithoutFeedback } from 'react-native'
import {
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import styles from './styles';
import DrawerItem from './DrawerItem';

import CLOSE from 'source/assets/close.png';

export default function DrawerContent(props) {

    return (
        <DrawerContentScrollView {...props} scrollEnabled={false} contentContainerStyle={styles.drawerContentContainer}>
        
            <View style={styles.contentView}>
                <TouchableWithoutFeedback onPress={() => props.navigation.closeDrawer()}>
                    <Image
                        source={CLOSE}
                        style={styles.closeIcon}
                    />
                </TouchableWithoutFeedback>
            </View>
            
            <DrawerItem
                label="Artist"
                onPress={() => props.navigation.navigate('Home')}
            />
            
            <DrawerItem
                label="My Profile"
                onPress={() => props.navigation.navigate('Home')}
            />
            
            <DrawerItem
                label="FAN"
                onPress={() => props.navigation.navigate('Home')}
            />
            
            <DrawerItem
                label="NFT"
                onPress={() => props.navigation.navigate('Home')}
            />
            
            <DrawerItem
                label="My Wallet"
                onPress={() => props.navigation.navigate('Home')}
            />
            
            <DrawerItem
                label="Promotion"
                onPress={() => props.navigation.navigate('Home')}
            />
            
            <DrawerItem
                label={`Royalities &\nPublishing`}
                onPress={() => props.navigation.navigate('Home')}
            />
            
            <DrawerItem
                active
                label="Messages"
                onPress={() => props.navigation.navigate('Home')}
            />
            
            <DrawerItem
                label="Logout"
                onPress={() => props.navigation.navigate('Home')}
            />
        </DrawerContentScrollView>
    )
}