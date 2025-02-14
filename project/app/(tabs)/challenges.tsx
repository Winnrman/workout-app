import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const challenges = [
  {
    id: 1,
    title: '30 Days of Strength',
    participants: 245,
    daysLeft: 12,
    progress: 60,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80',
  },
  {
    id: 2,
    title: '10K Steps Daily',
    participants: 1893,
    daysLeft: 5,
    progress: 85,
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=500&q=80',
  },
  {
    id: 3,
    title: 'Yoga Challenge',
    participants: 567,
    daysLeft: 20,
    progress: 30,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80',
  },
];

export default function ChallengesScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Challenges</Text>
        <Pressable style={styles.filterButton}>
          <Ionicons name="filter" size={24} color="#fff" />
        </Pressable>
      </View>

      <View style={styles.featuredChallenge}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80' }}
          style={styles.featuredImage}
        />
        <View style={styles.featuredContent}>
          <View style={styles.featuredBadge}>
            <Text style={styles.featuredBadgeText}>Featured</Text>
          </View>
          <Text style={styles.featuredTitle}>Summer Fitness Challenge</Text>
          <Text style={styles.featuredDescription}>
            Join 5,000+ people in this 8-week transformation challenge
          </Text>
          <Pressable style={styles.joinButton}>
            <Text style={styles.joinButtonText}>Join Challenge</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Active Challenges</Text>
        <View style={styles.challengeList}>
          {challenges.map((challenge) => (
            <View key={challenge.id} style={styles.challengeCard}>
              <Image source={{ uri: challenge.image }} style={styles.challengeImage} />
              <View style={styles.challengeContent}>
                <Text style={styles.challengeTitle}>{challenge.title}</Text>
                <View style={styles.challengeMeta}>
                  <View style={styles.metaItem}>
                    <Ionicons name="people" size={16} color="#9ca3af" />
                    <Text style={styles.metaText}>{challenge.participants}</Text>
                  </View>
                  <View style={styles.metaItem}>
                    <Ionicons name="time" size={16} color="#9ca3af" />
                    <Text style={styles.metaText}>{challenge.daysLeft} days left</Text>
                  </View>
                </View>
                <View style={styles.progressContainer}>
                  <View style={[styles.progressBar, { width: `${challenge.progress}%` }]} />
                </View>
              </View>
            </View>
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
  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2c2d31',
    alignItems: 'center',
    justifyContent: 'center',
  },
  featuredChallenge: {
    margin: 20,
    backgroundColor: '#2c2d31',
    borderRadius: 16,
    overflow: 'hidden',
  },
  featuredImage: {
    width: '100%',
    height: 200,
  },
  featuredContent: {
    padding: 20,
  },
  featuredBadge: {
    backgroundColor: '#6366f1',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  featuredBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  featuredTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  featuredDescription: {
    fontSize: 16,
    color: '#9ca3af',
    marginBottom: 20,
  },
  joinButton: {
    backgroundColor: '#6366f1',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  joinButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
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
  challengeList: {
    gap: 16,
  },
  challengeCard: {
    backgroundColor: '#2c2d31',
    borderRadius: 12,
    overflow: 'hidden',
  },
  challengeImage: {
    width: '100%',
    height: 150,
  },
  challengeContent: {
    padding: 16,
  },
  challengeTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  challengeMeta: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 12,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    color: '#9ca3af',
    fontSize: 14,
  },
  progressContainer: {
    height: 4,
    backgroundColor: '#374151',
    borderRadius: 2,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#6366f1',
    borderRadius: 2,
  },
});