import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Welcome back, Athlete! 💪</Text>
        <Text style={styles.subtitle}>Ready for today's workout?</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Workouts</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statLabel}>Active Challenges</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Records</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActions}>
          <Link href="/workouts/new-workout" asChild>
            <Pressable style={styles.actionButton}>
              <Ionicons name="add-circle" size={24} color="#ffc800" />
              <Text style={styles.actionButtonText}>New Workout</Text>
            </Pressable>
          </Link>
          <Link href="/challenges" asChild>
            <Pressable style={styles.actionButton}>
              <Ionicons name="trophy" size={24} color="#ffc800" />
              <Text style={styles.actionButtonText}>Join Challenge</Text>
            </Pressable>
          </Link>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityList}>
          {[1, 2, 3].map((_, index) => (
            <Link key={index} href={'/workouts/recent-workout'} asChild>
              <Pressable key={index} style={styles.activityItem}>
                <View style={styles.activityIcon}>
                  <Ionicons name="barbell" size={24} color="#ffc800" />
                </View>
                <View style={styles.activityContent}>
                  <Text style={styles.activityTitle}>Upper Body Workout</Text>
                  <Text style={styles.activityMeta}>2 days ago • 45 min</Text>
                </View>
                <Ionicons name="chevron-forward" size={24} color="#6b7280" />
              </Pressable>
            </Link>
          //   <Link key = {index} href="/workouts/recent-workout" asChild>
          //   <Pressable style={styles.actionButton}>
          //     <Ionicons name="add-circle" size={24} color="#ffc800" />
          //     <Text style={styles.actionButtonText}>New Workout</Text>
          //   </Pressable>
          // </Link>
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
    padding: 20,
    paddingTop: 40,
    marginTop: 60,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#9ca3af',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#2c2d31',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#9ca3af',
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
  quickActions: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#2c2d31',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  activityList: {
    gap: 12,
  },
  activityItem: {
    backgroundColor: '#2c2d31',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#374151',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    marginBottom: 4,
  },
  activityMeta: {
    fontSize: 14,
    color: '#9ca3af',
  },
});
