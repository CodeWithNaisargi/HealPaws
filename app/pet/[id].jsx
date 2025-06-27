import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';

const pets = [
  {
    id: 'dog-buddy',
    name: 'Buddy',
    type: 'Dog',
    breed: 'Golden Retriever',
    age: '2 years',
    image: require('../../assets/images/HealPawLogo.png'),
    description: 'Friendly, playful, and loves belly rubs!'
  },
  {
    id: 'dog-luna',
    name: 'Luna',
    type: 'Dog',
    breed: 'Labrador',
    age: '1 year',
    image: require('../../assets/images/HealPawLogo.png'),
    description: 'Energetic, smart, and loves to fetch.'
  },
  {
    id: 'cat-milo',
    name: 'Milo',
    type: 'Cat',
    breed: 'Siamese',
    age: '3 years',
    image: require('../../assets/images/HealPawLogo.png'),
    description: 'Curious, cuddly, and loves to nap in the sun.'
  },
  {
    id: 'cat-lily',
    name: 'Lily',
    type: 'Cat',
    breed: 'Persian',
    age: '2 years',
    image: require('../../assets/images/HealPawLogo.png'),
    description: 'Gentle, fluffy, and loves attention.'
  }
];

export default function PetDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const pet = pets.find((p) => p.id === id);

  if (!pet) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f7fafc' }}>
        <Text style={{ fontSize: 22, color: '#dd7973' }}>Pet not found.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#f7fafc', alignItems: 'center', padding: 24 }}>
      <TouchableOpacity onPress={() => router.replace('/adopt')} style={{ alignSelf: 'flex-start', marginBottom: 16 }}>
        <Text style={{ color: '#dd7973', fontSize: 16 }}>{'< Back to Adopt List'}</Text>
      </TouchableOpacity>
      <View style={{ backgroundColor: '#fff', borderRadius: 28, padding: 28, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 12, elevation: 4, width: '100%', maxWidth: 400 }}>
        <Image source={pet.image} style={{ width: 140, height: 140, borderRadius: 70, marginBottom: 16, backgroundColor: '#eee', borderWidth: 4, borderColor: pet.type === 'Dog' ? '#b6c5ca' : '#f7b2d9' }} />
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#dd7973', marginRight: 8 }}>{pet.name}</Text>
          <Text style={{ fontSize: 22 }}>{pet.type === 'Dog' ? '🐶' : '🐱'}</Text>
          <Text style={{ fontSize: 22, marginLeft: 8 }}>❤️</Text>
        </View>
        <Text style={{ fontSize: 18, color: '#555', marginBottom: 4 }}>{pet.breed}</Text>
        <Text style={{ fontSize: 16, color: '#888', marginBottom: 12 }}>{pet.age}</Text>
        <Text style={{ fontSize: 16, color: '#666', marginBottom: 24, textAlign: 'center' }}>{pet.description}</Text>
        <TouchableOpacity
          onPress={() => alert('Thank you for your interest!')}
          style={{ backgroundColor: '#dd7973', borderRadius: 12, paddingVertical: 14, paddingHorizontal: 36, marginTop: 8 }}
          activeOpacity={0.85}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Adopt {pet.name}!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 