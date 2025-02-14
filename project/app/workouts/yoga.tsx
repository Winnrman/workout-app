import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { useState } from 'react';
import Slider from '@react-native-community/slider';

export default function YogaWorkoutScreen() {
    const [duration, setDuration] = useState(30);
    const [intensity, setIntensity] = useState("Beginner");
    
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=2070&auto=format&fit=crop' }}
                    style={styles.bannerImage}
                />
                
                <View style={styles.padding20}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Yoga Session</Text>
                        <Text style={styles.subtitle}>Find your inner peace</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Select Yoga Pose</Text>
                        <View style={styles.poseContainer}>
                            {["Downward Dog", "Warrior Pose", "Tree Pose", "Child's Pose"].map((pose, index) => (
                                <Pressable key={index} style={styles.poseButton}>
                                    <Text style={styles.poseText}>{pose}</Text>
                                </Pressable>
                            ))}
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Select Duration (mins)</Text>
                        <Slider
                            style={styles.slider}
                            minimumValue={5}
                            maximumValue={90}
                            step={5}
                            value={duration}
                            onValueChange={(val) => setDuration(val)}
                            minimumTrackTintColor="#dbac00"
                            maximumTrackTintColor="#fff"
                        />
                        <Text style={styles.valueText}>{duration} mins</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Select Intensity</Text>
                        <View style={styles.intensityContainer}>
                            {["Beginner", "Intermediate", "Advanced"].map((level, index) => (
                                <Pressable key={index} style={styles.intensityButton} onPress={() => setIntensity(level)}>
                                    <Text style={[styles.intensityText, intensity === level && styles.selectedIntensity]}>{level}</Text>
                                </Pressable>
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View style={{ marginBottom: 30 }}>
                <Pressable style={styles.actionButton}>
                    <Text style={styles.actionButtonText}>Start Yoga</Text>
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
    poseContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    poseButton: {
        backgroundColor: '#43444a',
        borderRadius: 5,
        padding: 10,
        margin: 5,
    },
    poseText: {
        color: '#fff',
        fontSize: 16,
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
    intensityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    intensityButton: {
        backgroundColor: '#43444a',
        borderRadius: 5,
        padding: 10,
        margin: 5,
    },
    intensityText: {
        color: '#fff',
        fontSize: 16,
    },
    selectedIntensity: {
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
    bannerImage: {
        width: '100%',
        height: 100,
    },
});