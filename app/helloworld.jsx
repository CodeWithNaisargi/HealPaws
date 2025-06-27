import { View, Text, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useAuth, useUser } from '@clerk/clerk-expo';
import { useRouter, Link } from 'expo-router';

const featuredDog = {
  name: 'Buddy',
  breed: 'Golden Retriever',
  age: '2 years',
  image: require('../assets/images/HealPawLogo.png'), // Replace with a real dog image if available
  description: 'Friendly, playful, and loves belly rubs! Looking for a forever home.'
};

export default function Dashboard() {
  const { signOut } = useAuth();
  const { user } = useUser();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.replace('/home');
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#f7fafc', padding: 24 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#dd7973', marginBottom: 8 }}>
        🐾 Welcome{user ? `, ${user.firstName || user.username || user.id}` : ''}!
      </Text>
      <Text style={{ fontSize: 18, color: '#555', marginBottom: 20 }}>
        Find your new best friend and give a dog a loving home.
      </Text>

      {/* Quick Actions */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 }}>
        <TouchableOpacity onPress={() => router.push('/about')} style={{ backgroundColor: '#b6c5ca', borderRadius: 12, padding: 16, flex: 1, marginRight: 8 }}>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/profile')} style={{ backgroundColor: '#8F8e8d', borderRadius: 12, padding: 16, flex: 1, marginLeft: 8 }}>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Featured Dog */}
      <View style={{ backgroundColor: '#fff', borderRadius: 18, padding: 20, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 8, marginBottom: 24 }}>
        <Image source={featuredDog.image} style={{ width: 120, height: 120, borderRadius: 60, marginBottom: 12, backgroundColor: '#eee' }} />
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#dd7973' }}>{featuredDog.name}</Text>
        <Text style={{ fontSize: 16, color: '#555', marginBottom: 4 }}>{featuredDog.breed} • {featuredDog.age}</Text>
        <Text style={{ fontSize: 15, color: '#666', textAlign: 'center', marginBottom: 10 }}>{featuredDog.description}</Text>
        <Button title="Adopt Me!" color="#dd7973" onPress={() => router.push('/about')} />
      </View>

      {/* User Activity (placeholder) */}
      <View style={{ backgroundColor: '#b6c5ca', borderRadius: 18, padding: 18, marginBottom: 24 }}>
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18, marginBottom: 6 }}>Your Activity</Text>
        <Text style={{ color: '#fff', fontSize: 15 }}>Dogs Adopted: 0</Text>
        <Text style={{ color: '#fff', fontSize: 15 }}>Favorites: 0</Text>
      </View>

      {/* Navigation */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 }}>
        <TouchableOpacity onPress={() => router.push('/about')} style={{ backgroundColor: '#dd7973', borderRadius: 12, padding: 16, flex: 1, marginRight: 8 }}>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Adopt</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/profile')} style={{ backgroundColor: '#b6c5ca', borderRadius: 12, padding: 16, flex: 1, marginLeft: 8 }}>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Favorites</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => router.push('/adopt')} style={{ backgroundColor: '#dd7973', borderRadius: 12, padding: 18, marginBottom: 24, alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Adopt a Pet</Text>
      </TouchableOpacity>

      <Button title="Sign Out" onPress={handleSignOut} color="#8F8e8d" />
    </ScrollView>
  );
} 