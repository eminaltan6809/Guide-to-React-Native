import React, { useState, useContext, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView,
  SafeAreaView,
  Alert
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { FONTS, SPACING, SHADOWS, BORDER_RADIUS } from '../styles/theme';
import { ThemeContext } from '../context/ThemeContext';
import { quizQuestions, QuizQuestion } from '../data/quiz';

type QuizScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Quiz'>;
};

const QuizScreen: React.FC<QuizScreenProps> = ({ navigation }) => {
  const { colors, theme } = useContext(ThemeContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [filteredQuestions, setFilteredQuestions] = useState<QuizQuestion[]>([]);
  const [difficulty, setDifficulty] = useState<'kolay' | 'orta' | 'zor' | null>(null);

  useEffect(() => {
    if (difficulty) {
      const questions = quizQuestions.filter(q => q.difficulty === difficulty);
      setFilteredQuestions(questions);
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setIsAnswerChecked(false);
      setScore(0);
      setShowResults(false);
    }
  }, [difficulty]);

  const currentQuestion = filteredQuestions[currentQuestionIndex];

  const handleSelectAnswer = (answer: string) => {
    if (!isAnswerChecked) {
      setSelectedAnswer(answer);
    }
  };

  const handleCheckAnswer = () => {
    if (!selectedAnswer) {
      Alert.alert('Uyarı', 'Lütfen bir cevap seçin.');
      return;
    }

    setIsAnswerChecked(true);
    
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswerChecked(false);
    } else {
      setShowResults(true);
    }
  };

  const handleRestartQuiz = () => {
    setDifficulty(null);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswerChecked(false);
    setScore(0);
    setShowResults(false);
  };

  const renderDifficultySelection = () => {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={[styles.title, { color: colors.textPrimary }]}>
          React Native Quiz
        </Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          Zorluk seviyesi seçin:
        </Text>
        
        <TouchableOpacity 
          style={[styles.difficultyButton, { backgroundColor: colors.primary, borderColor: colors.border }]}
          onPress={() => setDifficulty('kolay')}
        >
          <Text style={[styles.difficultyButtonText, { color: colors.textPrimary }]}>Kolay</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.difficultyButton, { backgroundColor: colors.primary, borderColor: colors.border }]}
          onPress={() => setDifficulty('orta')}
        >
          <Text style={[styles.difficultyButtonText, { color: colors.textPrimary }]}>Orta</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.difficultyButton, { backgroundColor: colors.primary, borderColor: colors.border }]}
          onPress={() => setDifficulty('zor')}
        >
          <Text style={[styles.difficultyButtonText, { color: colors.textPrimary }]}>Zor</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.backButton, { borderColor: colors.primary }]}
          onPress={() => navigation.goBack()}
        >
          <Text style={[styles.backButtonText, { color: colors.primary }]}>Derslere Dön</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderResults = () => {
    const percentage = (score / filteredQuestions.length) * 100;
    let resultMessage = '';
    
    if (percentage >= 80) {
      resultMessage = 'Harika! React Native konularına çok iyi hakimsiniz.';
    } else if (percentage >= 60) {
      resultMessage = 'İyi iş! Temel React Native konularını anlamışsınız.';
    } else {
      resultMessage = 'Daha fazla pratik yapmanız gerekiyor. Derslere geri dönüp tekrar çalışabilirsiniz.';
    }
    
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={[styles.title, { color: colors.textPrimary }]}>
          Quiz Sonuçları
        </Text>
        
        <View style={[styles.resultCard, { backgroundColor: colors.cardBackground, borderColor: colors.border }]}>
          <Text style={[styles.scoreText, { color: colors.textPrimary }]}>
            Skorunuz: {score}/{filteredQuestions.length} ({percentage.toFixed(0)}%)
          </Text>
          
          <Text style={[styles.resultMessage, { color: colors.textSecondary }]}>
            {resultMessage}
          </Text>
        </View>
        
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: colors.primary, borderColor: colors.border }]}
          onPress={handleRestartQuiz}
        >
          <Text style={[styles.buttonText, { color: colors.textPrimary }]}>Yeni Quiz Başlat</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.backButton, { borderColor: colors.primary }]}
          onPress={() => navigation.goBack()}
        >
          <Text style={[styles.backButtonText, { color: colors.primary }]}>Derslere Dön</Text>
        </TouchableOpacity>
      </View>
    );
  };

  if (!difficulty) {
    return renderDifficultySelection();
  }

  if (showResults) {
    return renderResults();
  }

  if (!currentQuestion) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={[styles.title, { color: colors.textPrimary }]}>Yükleniyor...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.progressContainer}>
          <Text style={[styles.progressText, { color: colors.textSecondary }]}>
            Soru {currentQuestionIndex + 1}/{filteredQuestions.length}
          </Text>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { 
                  width: `${((currentQuestionIndex + 1) / filteredQuestions.length) * 100}%`,
                  backgroundColor: colors.primary 
                }
              ]} 
            />
          </View>
        </View>

        <View style={[styles.questionCard, { backgroundColor: colors.cardBackground, borderColor: colors.border }]}>
          <Text style={[styles.questionText, { color: colors.textPrimary }]}>
            {currentQuestion.question}
          </Text>

          {currentQuestion.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                { 
                  backgroundColor: selectedAnswer === option 
                    ? isAnswerChecked 
                      ? option === currentQuestion.correctAnswer 
                        ? '#4CAF50' // Doğru cevap yeşil
                        : '#F44336' // Yanlış cevap kırmızı
                      : theme === 'light' ? '#E3F2FD' : colors.primaryDark // Seçili ama henüz kontrol edilmemiş
                    : theme === 'light' ? '#F5F5F5' : colors.cardBackground, // Seçili değil
                  borderColor: colors.border
                }
              ]}
              onPress={() => handleSelectAnswer(option)}
              disabled={isAnswerChecked}
            >
              <Text 
                style={[
                  styles.optionText, 
                  { 
                    color: selectedAnswer === option && isAnswerChecked
                      ? '#FFFFFF' // Seçili ve kontrol edilmiş cevaplar için beyaz metin
                      : colors.textPrimary 
                  }
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}

          {isAnswerChecked && (
            <View style={[styles.explanationContainer, { backgroundColor: theme === 'light' ? '#E8F5E9' : '#1B5E20', borderColor: colors.border }]}>
              <Text style={[styles.explanationTitle, { color: colors.textPrimary }]}>Açıklama:</Text>
              <Text style={[styles.explanationText, { color: colors.textSecondary }]}>
                {currentQuestion.explanation}
              </Text>
            </View>
          )}
        </View>

        {!isAnswerChecked ? (
          <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.primary, borderColor: colors.border }]}
            onPress={handleCheckAnswer}
          >
            <Text style={[styles.buttonText, { color: colors.textPrimary }]}>Cevabı Kontrol Et</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.primary, borderColor: colors.border }]}
            onPress={handleNextQuestion}
          >
            <Text style={[styles.buttonText, { color: colors.textPrimary }]}>
              {currentQuestionIndex < filteredQuestions.length - 1 ? 'Sonraki Soru' : 'Sonuçları Gör'}
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: SPACING.medium,
    paddingBottom: SPACING.xl,
  },
  title: {
    fontSize: FONTS.sizes.xxl,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: SPACING.large,
  },
  subtitle: {
    fontSize: FONTS.sizes.large,
    textAlign: 'center',
    marginBottom: SPACING.large,
  },
  progressContainer: {
    marginBottom: SPACING.medium,
  },
  progressText: {
    fontSize: FONTS.sizes.small,
    marginBottom: SPACING.xs,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
  },
  questionCard: {
    padding: SPACING.large,
    borderRadius: BORDER_RADIUS.medium,
    borderWidth: 1,
    marginBottom: SPACING.medium,
    ...SHADOWS.medium,
  },
  questionText: {
    fontSize: FONTS.sizes.large,
    fontWeight: 'bold',
    marginBottom: SPACING.medium,
  },
  optionButton: {
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.small,
    borderWidth: 1,
    marginBottom: SPACING.small,
  },
  optionText: {
    fontSize: FONTS.sizes.medium,
  },
  explanationContainer: {
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.small,
    borderWidth: 1,
    marginTop: SPACING.medium,
  },
  explanationTitle: {
    fontSize: FONTS.sizes.medium,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
  },
  explanationText: {
    fontSize: FONTS.sizes.small,
  },
  button: {
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.medium,
    alignItems: 'center',
    borderWidth: 1,
    marginTop: SPACING.small,
  },
  buttonText: {
    fontSize: FONTS.sizes.medium,
    fontWeight: 'bold',
  },
  resultCard: {
    padding: SPACING.large,
    borderRadius: BORDER_RADIUS.medium,
    borderWidth: 1,
    marginVertical: SPACING.large,
    ...SHADOWS.medium,
  },
  scoreText: {
    fontSize: FONTS.sizes.xl,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: SPACING.medium,
  },
  resultMessage: {
    fontSize: FONTS.sizes.medium,
    textAlign: 'center',
    lineHeight: 24,
  },
  difficultyButton: {
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.medium,
    alignItems: 'center',
    borderWidth: 1,
    marginBottom: SPACING.medium,
  },
  difficultyButtonText: {
    fontSize: FONTS.sizes.large,
    fontWeight: 'bold',
  },
  backButton: {
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.medium,
    alignItems: 'center',
    borderWidth: 1,
    marginTop: SPACING.large,
  },
  backButtonText: {
    fontSize: FONTS.sizes.medium,
    fontWeight: 'bold',
  },
});

export default QuizScreen;
