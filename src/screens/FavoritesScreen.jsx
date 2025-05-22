import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import HeroCard from '../components/HeroCard';
import styles from '../styles/heroStyles';
import Background from '../components/Background';

export default function FavoritesScreen({ favorites, onToggleFavorite, goBack }) {
  return (
    <Background>
      <View style={{ flex: 1 }}>
        <View style={styles.back}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Tus Favoritos</Text>
            <TouchableOpacity onPress={goBack} style={styles.headerButton}>
              <Text style={styles.headerButtonText}>Volver</Text>
            </TouchableOpacity>
          </View>
          {favorites.length === 0 ? (
            <Text style={styles.Text2}>No tienes favoritos aún.</Text>
          ) : (
            <FlatList
              data={favorites}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <HeroCard hero={item} isFavorite={true} onToggleFavorite={onToggleFavorite} />
              )}
            />
          )}
        </View>
      </View>
    </Background>
  );
}