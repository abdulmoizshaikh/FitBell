import React, {useState} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import styles from './styles';
import ToggleSwitch from 'toggle-switch-react-native';
import {AppHeader, AppSearchInput, FooterButtonSection} from '../../components';
import {themeColors} from '../../theme';
import ImageAssets from '../../assets/images';
import {useKeyboard} from '../../hooks';
import {NavigationService} from '../../services';

export type Props = {};
const Profile: React.FC<Props> = props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [name, setName] = useState('');
  const {isKeyboardVisible} = useKeyboard();

  return (
    <ScrollView contentContainerStyle={styles.scrollview}>
      <View style={styles.container}>
        <AppHeader rightIcon {...props} />

        <AppSearchInput
          title="Search Artists, Song or Album Name"
          value={name}
          onChangeText={setName}
        />
        <View style={[styles.row, styles.pading]}>
          <Text style={[styles.heading2, styles.heading3]}>Notifications</Text>
          <ToggleSwitch
            onColor={themeColors.secondary}
            offColor="#767577"
            // ios_backgroundColor="#3e3e3e"
            onToggle={toggleSwitch}
            isOn={isEnabled}
          />
        </View>

        <Text style={[styles.heading1, GlobalStyles.MT(35)]}>My Profile</Text>
        <Image source={ImageAssets.QRCodeIcon} style={styles.otpImage} />

        {isKeyboardVisible ? null : (
          <FooterButtonSection
            SocialNetwork
            btnTitle="MAIN MENU"
            onPress={() => NavigationService.navigate('ArtistMainMenu')}
            // onPress={() => NavigationService.navigate('FanMainMenu')}
          />
        )}
      </View>
    </ScrollView>
  );
};
export default Profile;
