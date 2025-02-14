import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { useState } from 'react';

export default function LowerBodyWorkoutScreen() {
    const [weight, setWeight] = useState(50);
    const [reps, setReps] = useState(10);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>Lower Body Workout</Text>
                    <Text style={styles.subtitle}>Adjust your workout settings</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Select Exercise</Text>
                    <View style={styles.workoutList}>
                        {[ 'Squats', 'Lunges', 'Deadlifts', 'Leg Press' ].map((exercise, index) => (
                            <Pressable key={index} style={styles.workoutCard}>
                                <Text style={styles.workoutCardText}>{exercise}</Text>
                            </Pressable>
                        ))}
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Select Weight (lbs)</Text>
                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={300}
                        step={5}
                        value={weight}
                        onValueChange={(val) => setWeight(val)}
                        minimumTrackTintColor="#dbac00"
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
        padding: 20,
        paddingBottom: 80,
    },
    header: {
        paddingTop: 40,
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
});
