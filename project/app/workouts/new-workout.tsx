import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function NewWorkoutScreen() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>New Workout</Text>
                    <Text style={styles.subtitle}>Let's get started!</Text>
                </View>
        
                <View style={styles.section}>
                    <View style={styles.flexArea}>
                        <Text style={styles.sectionTitle}>Select a Workout</Text>
                        <View style={styles.workoutList}>
                            {[
                                { name: 'Upper Body', icon: 'barbell', link: './upper-body' },
                                { name: 'Lower Body', icon: 'walk', link: './lower-body' },
                                { name: 'Cardio', icon: 'fitness', link: './cardio' },
                                { name: 'Yoga', icon: 'body', link: './yoga' },
                            ].map((workout, index) => (
                                <Link key = {workout.name} href={workout.link} asChild>
                                <Pressable key={index} style={styles.workoutCard}>
                                    <View style={styles.workoutIcon}>
                                        <Ionicons name={workout.icon as any} size={24} color="#ffc800" />
                                    </View>
                                    <Text style={styles.workoutName}>{workout.name}</Text>
                                </Pressable>
                                </Link>
                            ))}
                        </View>
                        <Link href="./custom" asChild>
                        <Pressable style={styles.workoutCard}>
                            <View style={styles.workoutIcon}>
                                <Ionicons name="add" size={24} color="#ffc800" />
                            </View>
                            <Text style={styles.workoutName}>Custom...</Text>
                        </Pressable>
                        </Link>
                    </View>
                </View>
            </ScrollView>
            {/* <View style = {{marginBottom:30}}>
            <Pressable style={styles.actionButton}>
                <Text style={styles.actionButtonText}>New Workout</Text>
            </Pressable>
        </View> */}
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
        paddingBottom: 80, // Add some padding to avoid overlap with the button
    },
    header: {
        alignItems: 'center',
        padding: 20,
        paddingTop: 40,
        marginTop:60
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
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
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
    },
    workoutIcon: {
        marginBottom: 8,
    },
    workoutName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    actionButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: '#6366f1',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
    },
    actionButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },
});
