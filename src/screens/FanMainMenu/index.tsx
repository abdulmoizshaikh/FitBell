import React, {useState} from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

import NavItem from './NavItem';
import ImageAssets from '../../assets/images';
import {AppSearchInput} from '../../components';

export default function FanMainMenu({navigation}) {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={ImageAssets.girlListeninigMusicWoBc}
        style={styles.image}
      />

      <Image source={ImageAssets.APP_NAME} style={styles.appName} />

      <AppSearchInput
        title="Search Artists, Song or Album Name"
        value={name}
        onChangeText={setName}
      />

      <View style={{width: '100%', marginTop: 20}}>
        <NavItem
          icon={ImageAssets.PROFILE}
          title="My Profile"
          onPress={() => navigation.navigate('Profile')}
        />
        <NavItem icon={ImageAssets.Artists} title="Artists" />
        <NavItem icon={ImageAssets.NFT} title="NFT" />
        <NavItem icon={ImageAssets.WALLET} title="My Wallet" />
        <NavItem icon={ImageAssets.MESSAGE} title="Messages" />
        <NavItem icon={ImageAssets.LOGOUT} title="Logout" />
      </View>
    </View>
  );
}
