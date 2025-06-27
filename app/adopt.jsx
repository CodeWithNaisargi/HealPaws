import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const pets = [
  {
    id: 'dog-buddy',
    name: 'Buddy',
    type: 'Dog',
    breed: 'Golden Retriever',
    age: '2 years',
    image: require('../assets/images/HealPawLogo.png'),
    description: 'Friendly, playful, and loves belly rubs!'
  },
  {
    id: 'dog-luna',
    name: 'Luna',
    type: 'Dog',
    breed: 'Labrador',
    age: '1 year',
    image: require('../assets/images/HealPawLogo.png'),
    description: 'Energetic, smart, and loves to fetch.'
  },
  {
    id: 'cat-milo',
    name: 'Milo',
    type: 'Cat',
    breed: 'Siamese',
    age: '3 years',
    image: require('../assets/images/HealPawLogo.png'),
    description: 'Curious, cuddly, and loves to nap in the sun.'
  },
  {
    id: 'cat-lily',
    name: 'Lily',
    type: 'Cat',
    breed: 'Persian',
    age: '2 years',
    image: require('../assets/images/HealPawLogo.png'),
    description: 'Gentle, fluffy, and loves attention.'
  }
];

export default function Adopt() {
  const router = useRouter();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f7fafc' }} contentContainerStyle={{ padding: 24, paddingBottom: 40 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#dd7973', marginBottom: 8, textAlign: 'center' }}>Adopt a Pet</Text>
      <Text style={{ fontSize: 18, color: '#555', marginBottom: 24, textAlign: 'center' }}>
        Meet our adorable, adoptable dogs and cats!
      </Text>
      {pets.map((pet) => (
        <View
          key={pet.id}
          style={{
            backgroundColor: '#fff',
            borderRadius: 22,
            padding: 20,
            marginBottom: 24,
            shadowColor: '#000',
            shadowOpacity: 0.07,
            shadowRadius: 10,
            elevation: 3,
            alignItems: 'center',
            flexDirection: 'row',
            gap: 18
          }}
        >
          <Image
            source={pet.image}
            style={{ width: 90, height: 90, borderRadius: 45, backgroundColor: '#eee', marginRight: 18 }}
          />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#dd7973', marginBottom: 2 }}>{pet.name} <Text style={{ fontSize: 16, color: pet.type === 'Dog' ? '#b6c5ca' : '#f7b2d9' }}>{pet.type === 'Dog' ? '🐶' : '🐱'}</Text></Text>
            <Text style={{ fontSize: 15, color: '#555', marginBottom: 2 }}>{pet.breed} • {pet.age}</Text>
            <Text style={{ fontSize: 14, color: '#888', marginBottom: 8 }}>{pet.description}</Text>
            <TouchableOpacity
              onPress={() => router.push(`/pet/${pet.id}`)}
              style={{ backgroundColor: '#dd7973', borderRadius: 8, paddingVertical: 8, paddingHorizontal: 18, alignSelf: 'flex-start' }}
              activeOpacity={0.85}
            >
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15 }}>View Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
} 