import React from "react";
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { ScrollView, StyleSheet} from "react-native";
import { View, Text } from "native-base";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 30,
        textAlign: 'center',
    }
});

const drawerItemOptions = {
    itemsContainerStyle: {
        marginVertical: 0,
    },
    iconContainerStyle: {
        opacity: 0.5
    }
};

const renderSidebarTitle = (titleStyle) => (
    <View>
        <Text style={titleStyle}>Menu</Text>
    </View>
);

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            {renderSidebarTitle(styles.title)}
            <DrawerItems {...props} {...drawerItemOptions}/>
        </SafeAreaView>
    </ScrollView>
);

export default CustomDrawerContentComponent;