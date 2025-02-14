import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const workoutCategories = [
  { name: 'Strength', icon: 'barbell' },
  { name: 'Cardio', icon: 'heart' },
  { name: 'HIIT', icon: 'timer' },
  { name: 'Yoga', icon: 'body' },
];

export default function WorkoutsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Workouts</Text>
        <Link href="/workouts/new" asChild>
          <Pressable style={styles.addButton}>
            <Ionicons name="add" size={24} color="#fff" />
          </Pressable>
        </Link>
      </View>

      <View style={styles.categories}>
        {workoutCategories.map((category) => (
          <Pressable key={category.name} style={styles.categoryCard}>
            <View style={styles.categoryIcon}>
              <Ionicons name={category.icon as any} size={24} color="#6366f1" />
            </View>
            <Text style={styles.categoryName}>{category.name}</Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Workouts</Text>
        <View style={styles.workoutList}>
          {[1, 2, 3, 4].map((_, index) => (
            <Pressable key={index} style={styles.workoutCard}>
              <View style={styles.workoutHeader}>
                <View style={styles.workoutIcon}>
                  <Ionicons name="barbell" size={20} color="#6366f1" />
                </View>
                <View style={styles.workoutInfo}>
                  <Text style={styles.workoutName}>Full Body Workout</Text>
                  <Text style={styles.workoutMeta}>45 min • Advanced</Text>
                </View>
                <Ionicons name="chevron-forward" size={24} color="#6b7280" />
              </View>
              <View style={styles.workoutStats}>
                <View style={styles.stat}>
                  <Text style={styles.statLabel}>Exercises</Text>
                  <Text style={styles.statValue}>12</Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statLabel}>Sets</Text>
                  <Text style={styles.statValue}>36</Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statLabel}>PR's</Text>
                  <Text style={styles.statValue}>3</Text>
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1b1e',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
    marginTop:60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#6366f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    gap: 12,
  },
  categoryCard: {
    width: '47%',
    backgroundColor: '#2c2d31',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    gap: 8,
  },
  categoryIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#374151',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  workoutList: {
    gap: 12,
  },
  workoutCard: {
    backgroundColor: '#2c2d31',
    borderRadius: 12,
    padding: 16,
  },
  workoutHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  workoutIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#374151',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  workoutInfo: {
    flex: 1,
  },
  workoutName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    marginBottom: 4,
  },
  workoutMeta: {
    fontSize: 14,
    color: '#9ca3af',
  },
  workoutStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#374151',
    paddingTop: 16,
  },
  stat: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 12,
    color: '#9ca3af',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});