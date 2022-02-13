import React from "react";
import { FlatList } from 'react-native';
import { Container, View } from 'native-base';
// Packages
import VerticalCardComponent from '../../../common/components/vertical-card/vertical-card-component';

import Styles from './style';
const styles = Styles;




class YourBuildContainer extends React.Component {
    render() {
        return (
            <Container>
                <View style={styles.cardsViewContainer}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={[
                            { key: 'Tomorrow', text: `Koginut Squash Bowl By Dan Barber \nHarvest Bowl` },
                            { key: 'Yesterday', text: `Koginut Squash Bowl By Dan Barber \nHarvest Bowl` },
                            { key: 'After Tomorrow', text: "Koginut Squash Bowl By Dan Barber \nHarvest Bowl" },
                        ]}
                        renderItem={({ item }) => <VerticalCardComponent
                            onPressProp={() => this.props.navigate('CardsOrders')}
                            name={item.key}
                            description={item.text}
                            style={styles}
                            footer={false}
                        />
                        }
                    />
                </View>
            </Container >
        )
    }
}


export default YourBuildContainer;