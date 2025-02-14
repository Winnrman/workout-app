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

export default function UpperBodyWorkoutScreen() {
  const [weight, setWeight] = useState(50);
  const [reps, setReps] = useState(10);
  const [exercise, setExercise] = useState('Bench Press');

  return (
    <View style={styles.container}>
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        style={styles.bannerImage}
      />
      <View style={styles.padding20}>
        <View style={styles.header}>
          <Text style={styles.title}>Upper Body Workout</Text>
          <Text style={styles.subtitle}>Adjust your workout settings</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Exercise</Text>
          <View style={styles.workoutList}>
            {[
              'Bench Press',
              'Shoulder Press',
              'Bicep Curls',
              'Tricep Extensions',
            ].map((exercise, index) => (
              <Pressable key={index} style={styles.workoutCard}>
                <Text style={styles.workoutCardText}>{exercise}</Text>
              </Pressable>
            ))}
          </View>
          <View>
            <Pressable style={styles.workoutCardFull}>
              <Text style={styles.workoutCardText}>Custom...</Text>
            </Pressable>
        </View>
            
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Weight (lbs)</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={200}
            step={5}
            value={weight}
            onValueChange={(val) => setWeight(val)}
            minimumTrackTintColor="#ffc800"
            maximumTrackTintColor="#fff"
          />
          <Text style={styles.valueText}>{weight} lbs</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Reps</Text>
          <Slider
            style={styles.slider}
            minimumValue={1}
            maximumValue={20}
            step={1}
            value={reps}
            onValueChange={(val) => setReps(val)}
            minimumTrackTintColor="#dbac00"
            maximumTrackTintColor="#fff"
          />
          <Text style={styles.valueText}>{reps} reps</Text>
        </View>
        </View>

      </ScrollView>

      <View style={{ marginBottom: 30 }}>
        <Pressable style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Start Workout</Text>
        </Pressable>
      </View>
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
