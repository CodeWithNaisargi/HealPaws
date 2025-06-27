import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';

export default function About() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#f7fafc', alignItems: 'center', padding: 32 }}>
      <Image
        source={require('../assets/images/HealPawLogo.png')}
        style={{ width: 120, height: 120, borderRadius: 60, marginBottom: 16, backgroundColor: '#eee' }}
      />
      <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#dd7973', marginBottom: 8 }}>About HealPaws</Text>
      <Text style={{ fontSize: 18, color: '#555', marginBottom: 16, textAlign: 'center' }}>
        HealPaws is on a mission to connect loving families with dogs in need of a forever home. We believe every dog deserves a second chance and a happy life.
      </Text>
      <Text style={{ fontSize: 16, color: '#666', marginBottom: 12, textAlign: 'center' }}>
        Browse our list of adorable, adoptable dogs, learn about their personalities, and find your perfect match. With HealPaws, adopting a dog is easy, safe, and rewarding.
      </Text>
      <Text style={{ fontSize: 16, color: '#666', marginBottom: 12, textAlign: 'center' }}>
        Ready to make a difference? Start your adoption journey today and give a dog a loving home!
      </Text>
      <Text style={{ fontSize: 16, color: '#b6c5ca', marginTop: 20, textAlign: 'center' }}>
        🐶 Adopt. 🏡 Love. 💖 Repeat.
      </Text>
    </ScrollView>
  );
} 