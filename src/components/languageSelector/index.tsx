import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const languages = ['English', 'French', 'Spanish', 'Chinese', 'Hindi'];

export type Props = {
  toggleDropdown: Function;
  handleSelectLang: Function;
  showDropdown: boolean;
};

const LanguageSelector: React.FC<Props> = ({
  toggleDropdown,
  showDropdown,
  handleSelectLang,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown}>
        <Text style={styles.text}>Choose Language</Text>
      </TouchableOpacity>

      {showDropdown && (
        <View style={styles.dropDown}>
          {languages.map(lang => (
            <TouchableOpacity key={lang} onPress={() => handleSelectLang(lang)}>
              <Text style={styles.item}>{lang}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default LanguageSelector;
