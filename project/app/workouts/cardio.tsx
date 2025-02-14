import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { useState } from 'react';
import { Link } from 'expo-router';

export default function CardioWorkoutScreen() {
    const [distance, setDistance] = useState(5);
    const [speed, setSpeed] = useState(6);
    const [goal, setGoal] = useState("5K");

    return (
        <View style={styles.container}>
            
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Image
            source={{ uri: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
            style={styles.bannerImage}
        />

                <View style={styles.padding20}>
                <View style={styles.header}>
                    <Text style={styles.title}>Cardio Workout</Text>
                    <Text style={styles.subtitle}>Adjust your workout settings</Text>
                </View>

                <View style={styles.titleSection}>
                    <Text style={styles.sectionTitle}>Select Distance Goal</Text>
                    <View style={styles.goalContainer}>
                        {["1K", "5K", "10K", "Half Marathon", "Marathon"].map((g, index) => (
                            <Pressable key={index} style={styles.goalButton} onPress={() => setGoal(g)}>
                                <Text style={[styles.goalText, goal === g && styles.selectedGoal]}>{g}</Text>
                            </Pressable>
                        ))}
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.centeredText}>Or</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Set Distance (km)</Text>
                    <Slider
                        style={styles.slider}
                        minimumValue={1}
                        maximumValue={42}
                        step={1}
                        value={distance}
                        onValueChange={(val) => setDistance(val)}
                        minimumTrackTintColor="#dbac00"
                        maximumTrackTintColor="#fff"
                    />
                    <Text style={styles.valueText}>{distance} km</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Set Speed (km/h)</Text>
                    <Slider
                        style={styles.slider}
                        minimumValue={3}
                        maximumValue={20}
                        step={0.5}
                        value={speed}
                        onValueChange={(val) => setSpeed(val)}
                        minimumTrackTintColor="#dbac00"
                        maximumTrackTintColor="#fff"
                    />
                    <Text style={styles.valueText}>{speed} km/h</Text>
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
    centeredText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
    },
    titleSection: {
        marginTop: 20,
        textAlign: 'center',
        backgroundColor: '#2c2d31',
        padding: 10,
        borderRadius: 12,
    },
    section: {
        marginTop: 20,
        textAlign: 'center',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 16,
        borderRadius: 12,
    },
    slider: {
        width: '100%',
        height: 40,
    },
    bannerImage: {
        width: '100%',
        height: 100,
        // marginBottom: 20,
    },
    valueText: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginTop: 10,
    },
    goalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    goalButton: {
        backgroundColor: '#43444a',
        borderRadius: 5,
        padding: 5,
        margin: 5,
    },
    goalText: {
        color: '#fff',
        fontSize: 16,
    },
    selectedGoal: {
        color: '#dbac00',
        fontWeight: 'bold',
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