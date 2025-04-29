import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { FONTS, SPACING, BORDER_RADIUS, SHADOWS } from '../styles/theme';
import { ThemeContext } from '../context/ThemeContext';

type SettingsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Settings'>;

interface SettingsScreenProps {
  navigation: SettingsScreenNavigationProp;
}

const SettingsScreen = ({ navigation }: SettingsScreenProps) => {
  const { theme, setTheme, colors } = useContext(ThemeContext);

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.section, { backgroundColor: colors.cardBackground, borderColor: colors.border }]}>
        <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Tema Seçenekleri</Text>
        <Text style={[styles.sectionDescription, { color: colors.textSecondary }]}>
          Uygulamanın görünümünü değiştirmek için bir tema seçin
        </Text>

        <TouchableOpacity
          style={[
            styles.themeOption,
            theme === 'redBlack' && styles.selectedTheme,
            { backgroundColor: '#8B0000', borderColor: colors.border }
          ]}
          onPress={() => setTheme('redBlack')}
        >
          <View style={styles.themeColorPreview}>
            <View style={[styles.colorSample, { backgroundColor: '#8B0000', borderColor: colors.border }]} />
            <View style={[styles.colorSample, { backgroundColor: '#121212', borderColor: colors.border }]} />
          </View>
          <View style={styles.themeTextContainer}>
            <Text style={[styles.themeTitle, { color: '#FFFFFF' }]}>Kırmızı Siyah</Text>
            <Text style={[styles.themeDescription, { color: '#CCCCCC' }]}>Koyu kırmızı arka plan ve siyah kenarlıklar</Text>
          </View>
          {theme === 'redBlack' && (
            <View style={[styles.selectedIndicator, { backgroundColor: colors.accent }]}>
              <Text style={styles.selectedText}>✓</Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.themeOption,
            theme === 'light' && styles.selectedTheme,
            { backgroundColor: '#FFFFFF', borderColor: colors.border }
          ]}
          onPress={() => setTheme('light')}
        >
          <View style={styles.themeColorPreview}>
            <View style={[styles.colorSample, { backgroundColor: '#FFFFFF', borderColor: colors.border }]} />
            <View style={[styles.colorSample, { backgroundColor: '#F0F0F0', borderColor: colors.border }]} />
          </View>
          <View style={styles.themeTextContainer}>
            <Text style={[styles.themeTitle, { color: '#333333' }]}>Beyaz Tema</Text>
            <Text style={[styles.themeDescription, { color: '#666666' }]}>Beyaz arka plan ve açık renkli bileşenler</Text>
          </View>
          {theme === 'light' && (
            <View style={[styles.selectedIndicator, { backgroundColor: '#4a90e2' }]}>
              <Text style={styles.selectedText}>✓</Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.themeOption,
            theme === 'dark' && styles.selectedTheme,
            { backgroundColor: '#121212', borderColor: colors.border }
          ]}
          onPress={() => setTheme('dark')}
        >
          <View style={styles.themeColorPreview}>
            <View style={[styles.colorSample, { backgroundColor: '#121212', borderColor: colors.border }]} />
            <View style={[styles.colorSample, { backgroundColor: '#333333', borderColor: colors.border }]} />
          </View>
          <View style={styles.themeTextContainer}>
            <Text style={[styles.themeTitle, { color: '#FFFFFF' }]}>Koyu Tema</Text>
            <Text style={[styles.themeDescription, { color: '#B0B0B0' }]}>Siyah arka plan ve koyu renkli bileşenler</Text>
          </View>
          {theme === 'dark' && (
            <View style={[styles.selectedIndicator, { backgroundColor: '#7C4DFF' }]}>
              <Text style={styles.selectedText}>✓</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <View style={[styles.section, { backgroundColor: colors.cardBackground, borderColor: colors.border }]}>
        <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Hakkında</Text>
        <Text style={[styles.aboutText, { color: colors.textSecondary }]}>
          GuidetoReactNative, React Native öğrenmek isteyenler için tasarlanmış kapsamlı bir eğitim uygulamasıdır.
        </Text>
        <Text style={[styles.versionText, { color: colors.textMuted }]}>Versiyon 1.0.0</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // Note: We're using static styles here, but dynamic colors are applied inline
  container: {
    flex: 1,
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
    marginBottom: SPACING.small,
  },
  sectionDescription: {
    fontSize: FONTS.sizes.medium,
    marginBottom: SPACING.large,
  },
  themeOption: {
    flexDirection: 'row',
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.medium,
    marginBottom: SPACING.medium,
    borderWidth: 1,
    alignItems: 'center',
  },
  selectedTheme: {
    borderWidth: 2,
  },
  themeColorPreview: {
    flexDirection: 'row',
    marginRight: SPACING.medium,
  },
  colorSample: {
    width: 20,
    height: 40,
    marginRight: 2,
    borderWidth: 1,
  },
  themeTextContainer: {
    flex: 1,
  },
  themeTitle: {
    fontSize: FONTS.sizes.medium,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  themeDescription: {
    fontSize: FONTS.sizes.small,
  },
  selectedIndicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  aboutText: {
    fontSize: FONTS.sizes.medium,
    marginBottom: SPACING.medium,
    lineHeight: 22,
  },
  versionText: {
    fontSize: FONTS.sizes.small,
  },
});

export default SettingsScreen;
