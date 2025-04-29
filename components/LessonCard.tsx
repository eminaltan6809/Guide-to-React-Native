import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Lesson } from '../data/lessons';
import { FONTS, SPACING, SHADOWS, BORDER_RADIUS } from '../styles/theme';
import { ThemeContext } from '../context/ThemeContext';

interface LessonCardProps {
  lesson: Lesson;
  onPress: () => void;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson, onPress }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.card, {
        backgroundColor: colors.cardBackground,
        borderColor: colors.border
      }]}
    >
      <View style={styles.cardContent}>
        <Text style={[styles.title, { color: colors.textPrimary }]}>{lesson.title}</Text>
        <Text style={[styles.description, { color: colors.textSecondary }]}>{lesson.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: BORDER_RADIUS.medium,
    borderWidth: 1,
    ...SHADOWS.medium,
    marginBottom: SPACING.medium,
    overflow: 'hidden',
  },
  cardContent: {
    padding: SPACING.medium,
  },
  title: {
    fontSize: FONTS.sizes.large,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
  },
  description: {
    fontSize: FONTS.sizes.small,
  },
});

export default LessonCard;
