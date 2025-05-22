import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/heroStyles';

export default function HeroCard({ hero, isFavorite, onToggleFavorite }) {
    return (
        <View  style={styles.list}>
            <View style={styles.card}>
                <Image source={{ uri: hero.images.sm }} style={styles.image} />
                <View style={styles.info}>
                    <Text style={styles.name}>{hero.name}</Text>
                    <TouchableOpacity
                        style={[styles.button, isFavorite ? styles.fav : styles.notFav]}
                        onPress={() => onToggleFavorite(hero)}
                    >
                        <Text style={styles.buttonText}>
                            {isFavorite ? 'Quitar favorito' : 'Agregar favorito'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}