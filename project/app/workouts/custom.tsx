import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Pressable,
  } from 'react-native';
  import { useState } from 'react';
  import Slider from '@react-native-community/slider';
  import { Ionicons } from '@expo/vector-icons';
  
  const exercisesList = [
    'Bench Press',
    'Squats',
    'Deadlifts',
    'Pull-Ups',
    'Lunges',
    'Bicep Curls',
    'Tricep Dips',
  ];
  
  export default function CustomWorkoutScreen() {
    const [selectedExercises, setSelectedExercises] = useState([]);
    const [restTime, setRestTime] = useState(30);
  
    const toggleExercise = (exercise) => {
      setSelectedExercises((prev) =>
        prev.includes(exercise)
          ? prev.filter((e) => e !== exercise)
          : [...prev, exercise]
      );
    };
  
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1974&auto=format&fit=crop',
            }}
            style={styles.bannerImage}
          />
  
          <View style={styles.padding20}>
            <Text style={styles.title}>Custom Workout</Text>
            <Text style={styles.subtitle}>Create your ideal session</Text>
  
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Select Exercises</Text>
              <View style={styles.workoutList}>
                {exercisesList.map((exercise, index) => (
                  <Pressable
                    key={index}
                    style={selectedExercises.includes(exercise) ? styles.workoutCardSelected : styles.workoutCard}
                    onPress={() => toggleExercise(exercise)}
                  >
                    <Text style={styles.workoutCardText}>{exercise}</Text>
                  </Pressable>
                ))}
              </View>
            </View>
  
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Rest Time (seconds)</Text>
              <Slider
                style={styles.slider}
                minimumValue={15}
                maximumValue={120}
                step={5}
                value={restTime}
                onValueChange={(val) => setRestTime(val)}
                minimumTrackTintColor="#ffc800"
                maximumTrackTintColor="#fff"
              />
              <Text style={styles.valueText}>{restTime} sec</Text>
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
      paddingBottom: 80,
    },
    padding20: {
      padding: 20,
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
    workoutCardSelected: {
      width: '48%',
      backgroundColor: '#6366f1',
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
    },
  });
  