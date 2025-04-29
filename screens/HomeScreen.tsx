import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { FONTS, SPACING, SHADOWS, BORDER_RADIUS } from '../styles/theme';
import { ThemeContext } from '../context/ThemeContext';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { colors, theme } = useContext(ThemeContext);
  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.primary, borderBottomColor: colors.border }]}>
        <Text style={[styles.title, { color: colors.textPrimary }]}>Learn React Native</Text>
        <Text style={[styles.subtitle, { color: colors.textPrimary }]}>Master mobile app development</Text>
      </View>

      <View style={[styles.section, { backgroundColor: colors.cardBackground, borderColor: colors.border }]}>
        <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>What is React Native?</Text>
        <Text style={[styles.text, { color: colors.textSecondary }]}>
          React Native is a popular JavaScript framework that lets you build mobile apps for iOS and Android using a single codebase.
          It was created by Facebook and is based on React, their JavaScript library for building user interfaces.
        </Text>
      </View>

      <View style={[styles.section, { backgroundColor: colors.cardBackground, borderColor: colors.border }]}>
        <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Why Learn React Native?</Text>
        <View style={styles.reasonContainer}>
          <View style={[styles.reason, {
            backgroundColor: theme === 'light' ? '#F5F5F5' : colors.primaryDark,
            borderColor: colors.border
          }]}>
            <Text style={[styles.reasonTitle, { color: colors.accent }]}>Cross-Platform</Text>
            <Text style={[styles.reasonText, { color: colors.textSecondary }]}>Build for iOS and Android from a single codebase</Text>
          </View>
          <View style={[styles.reason, {
            backgroundColor: theme === 'light' ? '#F5F5F5' : colors.primaryDark,
            borderColor: colors.border
          }]}>
            <Text style={[styles.reasonTitle, { color: colors.accent }]}>JavaScript</Text>
            <Text style={[styles.reasonText, { color: colors.textSecondary }]}>Use familiar web technologies</Text>
          </View>
          <View style={[styles.reason, {
            backgroundColor: theme === 'light' ? '#F5F5F5' : colors.primaryDark,
            borderColor: colors.border
          }]}>
            <Text style={[styles.reasonTitle, { color: colors.accent }]}>Native Performance</Text>
            <Text style={[styles.reasonText, { color: colors.textSecondary }]}>Get near-native performance with real native UI</Text>
          </View>
          <View style={[styles.reason, {
            backgroundColor: theme === 'light' ? '#F5F5F5' : colors.primaryDark,
            borderColor: colors.border
          }]}>
            <Text style={[styles.reasonTitle, { color: colors.accent }]}>Hot Reloading</Text>
            <Text style={[styles.reasonText, { color: colors.textSecondary }]}>See changes instantly during development</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary, borderColor: colors.border }]}
        onPress={() => navigation.navigate('Lessons')}
      >
        <Text style={[styles.buttonText, { color: colors.textPrimary }]}>Start Learning</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.secondaryButton, { backgroundColor: colors.primaryDark, borderColor: colors.border }]}
        onPress={() => navigation.navigate('BeforeLearning')}
      >
        <Text style={[styles.buttonText, { color: colors.textPrimary }]}>Before Learning</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, {
          backgroundColor: theme === 'light' ? '#4CAF50' : '#1B5E20',
          borderColor: colors.border,
          marginTop: SPACING.small,
          marginBottom: SPACING.large,
        }]}
        onPress={() => navigation.navigate('Quiz')}
      >
        <Text style={[styles.buttonText, { color: colors.textPrimary }]}>Test Your Knowledge</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // Note: We're using static styles here, but dynamic colors are applied inline
  container: {
    flex: 1,
  },
  header: {
    padding: SPACING.large,
    paddingTop: 60,
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: FONTS.sizes.xxxl,
    fontWeight: 'bold',
    marginBottom: SPACING.small,
  },
  subtitle: {
    fontSize: FONTS.sizes.medium,
    opacity: 0.8,
  },
  section: {
    padding: SPACING.large,
    marginBottom: SPACING.medium,
    borderRadius: BORDER_RADIUS.medium,
    marginHorizontal: SPACING.medium,
    marginTop: SPACING.medium,
    borderWidth: 1,
    ...SHADOWS.medium,
  },
  sectionTitle: {
    fontSize: FONTS.sizes.xl,
    fontWeight: 'bold',
    marginBottom: SPACING.medium,
  },
  text: {
    fontSize: FONTS.sizes.medium,
    lineHeight: 24,
  },
  reasonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  reason: {
    width: '48%',
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.small,
    marginBottom: SPACING.small,
    borderWidth: 1,
  },
  reasonTitle: {
    fontSize: FONTS.sizes.medium,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
  },
  reasonText: {
    fontSize: FONTS.sizes.small,
  },
  button: {
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.medium,
    marginHorizontal: SPACING.large,
    marginTop: SPACING.large,
    marginBottom: SPACING.small,
    alignItems: 'center',
    borderWidth: 1,
  },
  secondaryButton: {
    marginTop: SPACING.small,
    marginBottom: SPACING.large,
  },
  buttonText: {
    fontSize: FONTS.sizes.large,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
