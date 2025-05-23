import React from 'react';
import { View, FlatList, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import SearchBar from '../components/SearchBar';
import HeroCard from '../components/HeroCard';
import Background from '../components/Background';
import styles from '../styles/heroStyles';

export default function HeroSearchScreen({
    heroes, favorites, search, setSearch, onToggleFavorite, goToFavorites, loading
}) {
    const filtered = heroes.filter(h => h.name.toLowerCase().includes(search.toLowerCase()));
    return (
        <Background>
            <View style={styles.back}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>SuperHéroes</Text>
                    <TouchableOpacity onPress={goToFavorites} style={styles.headerButton}>
                        <Text style={styles.headerButtonText}>Favoritos ({favorites.length})</Text>
                    </TouchableOpacity>
                </View>
                <SearchBar value={search} onChange={setSearch} />
                {loading ? (
                    <ActivityIndicator style={styles.ActivityIndicator} size="large" />
                ) : filtered.length === 0 ? (
                    <Text style={styles.Text}>No hay resultados</Text>
                ) : (
                    <FlatList
                        data={filtered}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <HeroCard
                                hero={item}
                                isFavorite={favorites.some(f => f.id === item.id)}
                                onToggleFavorite={onToggleFavorite}
                            />
                        )}
                    />
                )}
            </View>
        </Background>
    );
}