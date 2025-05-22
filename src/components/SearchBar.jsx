import React from 'react';
import { View, TextInput } from 'react-native';
import styles from '../styles/heroStyles';

export default function SearchBar({ value, onChange }) {
  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.input}
        placeholder="Buscar superhéroe..."
        value={value}
        onChangeText={onChange}
        autoCapitalize="none"
      />
    </View>
  );
}