import React from 'react';
import { ImageBackground } from 'react-native';
import styles from '../styles/heroStyles';
const image = { uri: "https://wallpapercat.com/w/full/e/1/4/46074-1920x1080-desktop-1080p-invincible-wallpaper.jpg" };

export default function Background({ children }) {
    return (
        <ImageBackground source={image} style={styles.background} resizeMode="cover">
            {children}
        </ImageBackground>
    );
};