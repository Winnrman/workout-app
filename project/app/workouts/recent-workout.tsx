import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { Link } from 'expo-router';

export default function RecentWorkoutScreen() {
  const [weight, setWeight] = useState(50);
  const [reps, setReps] = useState(10);
  const [exercise, setExercise] = useState('Bench Press');

  return (
    <View style={styles.container}>
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      
      <View style={styles.padding20}>
        <View style={styles.header}>
        <Text style={styles.subheader}>Recent Workout</Text>
          <Text style={styles.title}>Upper Body Workout</Text>
          <Text style={styles.subtitle}>Feb 12, 2025</Text>
        </View>

        <View style={styles.section}>
          
            
        </View>

        <View style={styles.section}>
          
        </View>

        
        </View>

      </ScrollView>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1b1e',
  },
  scrollContainer: {
    // padding: 20,
    paddingBottom: 80,
  },
  padding20: {
    padding: 20,
  },
  header: {
    paddingTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#9ca3af',
  },
  subheader: {
    fontSize: 16,
    color: '#ffcc12',
    paddingBottom:2,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  workoutList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  workoutCard: {
    width: '48%',
    backgroundColor: '#2c2d31',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  workoutCardFull: {
    width: '100%',
    backgroundColor: '#2c2d31',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  workoutCardText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  valueText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  actionButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#dbac00',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  bannerImage: {
    width: '100%',
    height: 100,
    // marginBottom: 20,
  },
});
