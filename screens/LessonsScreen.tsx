import React, { useContext } from 'react';
import { FlatList, StyleSheet, SafeAreaView, TouchableOpacity, Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import LessonCard from '../components/LessonCard';
import { lessons } from '../data/lessons';
import { SPACING, FONTS, BORDER_RADIUS, SHADOWS } from '../styles/theme';
import { ThemeContext } from '../context/ThemeContext';

type LessonsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Lessons'>;

interface LessonsScreenProps {
  navigation: LessonsScreenNavigationProp;
}

const LessonsScreen = ({ navigation }: LessonsScreenProps) => {
  const { colors } = useContext(ThemeContext);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.quizButtonContainer}>
        <TouchableOpacity
          style={[styles.quizButton, { backgroundColor: colors.primary, borderColor: colors.border }]}
          onPress={() => navigation.navigate('Quiz')}
        >
          <Text style={[styles.quizButtonText, { color: colors.textPrimary }]}>
            Bilgini Test Et
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={lessons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <LessonCard
            lesson={item}
            onPress={() => navigation.navigate('LessonDetail', { lessonId: item.id })}
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: SPACING.medium,
  },
  quizButtonContainer: {
    padding: SPACING.medium,
    paddingBottom: 0,
  },
  quizButton: {
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.medium,
    alignItems: 'center',
    borderWidth: 1,
    ...SHADOWS.medium,
  },
  quizButtonText: {
    fontSize: FONTS.sizes.medium,
    fontWeight: 'bold',
  },
});

export default LessonsScreen;
