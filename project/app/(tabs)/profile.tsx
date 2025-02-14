import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&q=80' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.bio}>Fitness enthusiast | 💪 Getting stronger every day</Text>
        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>156</Text>
            <Text style={styles.statLabel}>Workouts</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.stat}>
            <Text style={styles.statNumber}>23</Text>
            <Text style={styles.statLabel}>Challenges</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.stat}>
            <Text style={styles.statNumber}>1.2k</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Achievements</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.achievementsScroll}>
          {[1, 2, 3, 4].map((_, index) => (
            <View key={index} style={styles.achievementCard}>
              <View style={styles.achievementIcon}>
                <Ionicons name="trophy" size={24} color="#fff" />
              </View>
              <Text style={styles.achievementTitle}>30 Day Streak</Text>
              <Text style={styles.achievementDate}>Earned Dec 2023</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Records</Text>
        <View style={styles.recordsList}>
          {[
            { name: 'Bench Press', value: '225 lbs', icon: 'barbell' },
            { name: '5K Run', value: '22:45', icon: 'walk' },
            { name: 'Deadlift', value: '315 lbs', icon: 'fitness' },
          ].map((record, index) => (
            <View key={index} style={styles.recordCard}>
              <View style={styles.recordIcon}>
                <Ionicons name={record.icon as any} size={24} color="#fff" />
              </View>
              <View style={styles.recordInfo}>
                <Text style={styles.recordName}>{record.name}</Text>
                <Text style={styles.recordValue}>{record.value}</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#6b7280" />
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <View style={styles.settingsList}>
          {[
            { name: 'Edit Profile', icon: 'person' },
            { name: 'Notifications', icon: 'notifications' },
            { name: 'Privacy', icon: 'lock-closed' },
            { name: 'Help & Support', icon: 'help-circle' },
          ].map((setting, index) => (
            <Pressable key={index} style={styles.settingItem}>
              <View style={styles.settingIcon}>
                <Ionicons name={setting.icon as any} size={20} color="#6366f1" />
              </View>
              <Text style={styles.settingName}>{setting.name}</Text>
              <Ionicons name="chevron-forward" size={20} color="#6b7280" />
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
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    color: '#9ca3af',
    marginBottom: 24,
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2c2d31',
    borderRadius: 12,
    padding: 16,
  },
  stat: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#9ca3af',
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#374151',
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
  achievementsScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  achievementCard: {
    backgroundColor: '#2c2d31',
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    alignItems: 'center',
    width: 120,
  },
  achievementIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#374151',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  achievementTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    marginBottom: 4,
    textAlign: 'center',
  },
  achievementDate: {
    fontSize: 12,
    color: '#9ca3af',
  },
  recordsList: {
    gap: 12,
  },
  recordCard: {
    backgroundColor: '#2c2d31',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  recordIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#374151',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  recordInfo: {
    flex: 1,
  },
  recordName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    marginBottom: 4,
  },
  recordValue: {
    fontSize: 14,
    color: '#9ca3af',
  },
  settingsList: {
    backgroundColor: '#2c2d31',
    borderRadius: 12,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
  },
  settingIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#374151',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  settingName: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
  },
});