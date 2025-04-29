import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { lessons } from '../data/lessons';
import CodeBlock from '../components/CodeBlock';
import { FONTS, SPACING, SHADOWS, BORDER_RADIUS } from '../styles/theme';
import { ThemeContext } from '../context/ThemeContext';

type LessonDetailScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'LessonDetail'>;
type LessonDetailScreenRouteProp = RouteProp<RootStackParamList, 'LessonDetail'>;

interface LessonDetailScreenProps {
  navigation: LessonDetailScreenNavigationProp;
  route: LessonDetailScreenRouteProp;
}

const LessonDetailScreen = ({ navigation, route }: LessonDetailScreenProps) => {
  const { colors } = useContext(ThemeContext);
  const { lessonId } = route.params;
  const lesson = lessons.find(l => l.id === lessonId);

  if (!lesson) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={{ color: colors.textPrimary }}>Lesson not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.primary, borderBottomColor: colors.border }]}>
        <Text style={[styles.title, { color: colors.textPrimary }]}>{lesson.title}</Text>
      </View>

      <View style={styles.content}>
        <Text style={[styles.contentText, { color: colors.textPrimary }]}>{lesson.content}</Text>
      </View>

      {lesson.codeExample && (
        <View style={[styles.codeSection, { backgroundColor: colors.cardBackground, borderColor: colors.border }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Code Example</Text>
          <CodeBlock code={lesson.codeExample} />

          <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.primary, borderColor: colors.border }]}
            onPress={() => navigation.navigate('CodePlayground', { code: lesson.codeExample || '' })}
          >
            <Text style={[styles.buttonText, { color: colors.textPrimary }]}>Try it yourself</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.navigation}>
        <TouchableOpacity
          style={[styles.navButton, { borderColor: colors.primary }]}
          onPress={() => navigation.goBack()}
        >
          <Text style={[styles.navButtonText, { color: colors.primary }]}>Back to Lessons</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navButton, styles.nextButton, { backgroundColor: colors.primary, borderColor: colors.primary }]}
          onPress={() => {
            const nextLessonId = String(Number(lessonId) + 1);
            const nextLesson = lessons.find(l => l.id === nextLessonId);
            if (nextLesson) {
              navigation.navigate('LessonDetail', { lessonId: nextLessonId });
            }
          }}
        >
          <Text style={[styles.navButtonText, { color: colors.textPrimary }]}>Next Lesson</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: SPACING.large,
    paddingTop: 40,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: FONTS.sizes.xxl,
    fontWeight: 'bold',
  },
  content: {
    padding: SPACING.large,
  },
  contentText: {
    fontSize: FONTS.sizes.medium,
    lineHeight: 24,
  },
  codeSection: {
    padding: SPACING.large,
    margin: SPACING.medium,
    borderRadius: BORDER_RADIUS.medium,
    borderWidth: 1,
    ...SHADOWS.medium,
  },
  sectionTitle: {
    fontSize: FONTS.sizes.large,
    fontWeight: 'bold',
    marginBottom: SPACING.small,
  },
  button: {
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.medium,
    marginTop: SPACING.medium,
    alignItems: 'center',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: FONTS.sizes.medium,
    fontWeight: 'bold',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SPACING.medium,
    marginBottom: SPACING.xl,
  },
  navButton: {
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.medium,
    borderWidth: 1,
    flex: 1,
    marginHorizontal: SPACING.xs,
    alignItems: 'center',
  },
  nextButton: {
  },
  navButtonText: {
    fontWeight: 'bold',
  },
});

export default LessonDetailScreen;
