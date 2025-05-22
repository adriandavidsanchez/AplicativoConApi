import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import HeroSearchScreen from './src/screens/HeroSearchScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import { fetchAllHeroes } from './src/api/superheroApi';

export default function App() {
  const [screen, setScreen] = useState('search');
  const [search, setSearch] = useState('');
  const [heroes, setHeroes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllHeroes()
      .then(data => setHeroes(data))
      .catch(() => setHeroes([]))
      .finally(() => setLoading(false));
  }, []);

  const handleToggleFavorite = hero => {
    const isFav = favorites.some(h => h.id === hero.id);
    setFavorites(isFav
      ? favorites.filter(h => h.id !== hero.id)
      : [...favorites, hero]
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#e4eaf0" }}>
      
      {screen === 'search' ? (
        <HeroSearchScreen
          heroes={heroes}
          favorites={favorites}
          search={search}
          setSearch={setSearch}
          onToggleFavorite={handleToggleFavorite}
          goToFavorites={() => setScreen('favorites')}
          loading={loading}
        />
      ) : (
        <FavoritesScreen
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          goBack={() => setScreen('search')}
        />
      )}
    </View>
  );
}