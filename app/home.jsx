import { View, Text, Button } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';

export default function home() {
  const { user, isSignedIn } = useUser();
  const router = useRouter();
  return (
    <View style={{ padding: 24 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Welcome to HealPaws!</Text>
      {user ? (
        <Text style={{ fontSize: 18, marginBottom: 20 }}>You are logged in as: {user.primaryEmailAddress?.emailAddress || user.username || user.id}</Text>
      ) : (
        <Text style={{ fontSize: 18, marginBottom: 20 }}>You are not logged in.</Text>
      )}
      {!isSignedIn && (
        <Button title="Login" onPress={() => router.push('/login')} color="#dd7973" />
      )}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, marginTop: 20 }}>Pages:</Text>
      <Link href="/helloworld" style={{ fontSize: 18, color: '#007AFF', marginBottom: 8 }}>Hello World</Link>
      <Link href="/about" style={{ fontSize: 18, color: '#007AFF', marginBottom: 8 }}>About</Link>
      <Link href="/profile" style={{ fontSize: 18, color: '#007AFF', marginBottom: 8 }}>Profile</Link>
      <Link href="/adopt" style={{ fontSize: 18, color: '#007AFF', marginBottom: 8 }}>Adopt</Link>
      <Link href="/favorites" style={{ fontSize: 18, color: '#007AFF', marginBottom: 8 }}>Favorites</Link>
    </View>
  )
}