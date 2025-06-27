import { View, Text, Image } from 'react-native';
import React from 'react';

export default function Favorites() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f7fafc', alignItems: 'center', padding: 32 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#dd7973', marginBottom: 8 }}>Your Favorites</Text>
      <Text style={{ fontSize: 18, color: '#555', marginBottom: 16, textAlign: 'center' }}>
        You haven't added any favorite dogs yet. Start exploring and add your favorites!
      </Text>
      <Image
        source={require('../assets/images/HealPawLogo.png')}
        style={{ width: 120, height: 120, borderRadius: 60, marginBottom: 16, backgroundColor: '#eee' }}
      />
    </View>
  );
} 