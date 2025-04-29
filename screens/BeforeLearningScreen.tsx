import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { FONTS, SPACING, SHADOWS, BORDER_RADIUS } from '../styles/theme';
import { ThemeContext } from '../context/ThemeContext';

type BeforeLearningScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'BeforeLearning'>;

interface BeforeLearningScreenProps {
  navigation: BeforeLearningScreenNavigationProp;
}

const BeforeLearningScreen = ({ navigation }: BeforeLearningScreenProps) => {
  const { colors } = useContext(ThemeContext);

  const openLink = (url: string) => {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.primary, borderBottomColor: colors.border }]}>
        <Text style={[styles.title, { color: colors.textPrimary }]}>Before You Start</Text>
        <Text style={[styles.subtitle, { color: colors.textPrimary }]}>Setting up your React Native development environment</Text>
      </View>

      <View style={[styles.section, { backgroundColor: colors.cardBackground, borderColor: colors.border }]}>
        <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>System Requirements</Text>
        <View style={[styles.requirement, { backgroundColor: colors.primaryDark, borderColor: colors.border }]}>
          <Text style={[styles.requirementTitle, { color: colors.textPrimary }]}>Node.js</Text>
          <Text style={[styles.requirementText, { color: colors.textSecondary }]}>
            React Native requires Node.js version 14 or newer. We recommend using the LTS version.
          </Text>
          <TouchableOpacity
            style={[styles.linkButton, { borderColor: colors.accent }]}
            onPress={() => openLink('https://nodejs.org/')}
          >
            <Text style={[styles.linkButtonText, { color: colors.accent }]}>Download Node.js</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.requirement}>
          <Text style={styles.requirementTitle}>npm or Yarn</Text>
          <Text style={styles.requirementText}>
            npm is installed with Node.js. You can also use Yarn as an alternative package manager.
          </Text>
          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => openLink('https://yarnpkg.com/getting-started/install')}
          >
            <Text style={styles.linkButtonText}>Learn about Yarn</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.requirement}>
          <Text style={styles.requirementTitle}>Code Editor</Text>
          <Text style={styles.requirementText}>
            We recommend using Visual Studio Code for React Native development.
          </Text>
          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => openLink('https://code.visualstudio.com/')}
          >
            <Text style={styles.linkButtonText}>Download VS Code</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Installation Methods</Text>

        <View style={styles.method}>
          <Text style={styles.methodTitle}>Method 1: Using Expo (Recommended for beginners)</Text>
          <Text style={styles.methodText}>
            Expo is a framework and platform for React Native that helps you develop, build, and deploy apps quickly.
          </Text>
          <View style={styles.steps}>
            <Text style={styles.stepTitle}>Step 1: Install Expo CLI</Text>
            <View style={styles.codeBlock}>
              <Text style={styles.code}>npm install -g expo-cli</Text>
            </View>

            <Text style={styles.stepTitle}>Step 2: Create a new project</Text>
            <View style={styles.codeBlock}>
              <Text style={styles.code}>npx create-expo-app MyFirstApp</Text>
              <Text style={styles.code}>cd MyFirstApp</Text>
            </View>

            <Text style={styles.stepTitle}>Step 3: Start the development server</Text>
            <View style={styles.codeBlock}>
              <Text style={styles.code}>npx expo start</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => openLink('https://docs.expo.dev/get-started/installation/')}
          >
            <Text style={styles.linkButtonText}>Expo Documentation</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.method}>
          <Text style={styles.methodTitle}>Method 2: React Native CLI</Text>
          <Text style={styles.methodText}>
            For more control over native modules and configurations, you can use the React Native CLI.
          </Text>
          <View style={styles.steps}>
            <Text style={styles.stepTitle}>Step 1: Install React Native CLI</Text>
            <View style={styles.codeBlock}>
              <Text style={styles.code}>npm install -g react-native-cli</Text>
            </View>

            <Text style={styles.stepTitle}>Step 2: Create a new project</Text>
            <View style={styles.codeBlock}>
              <Text style={styles.code}>npx react-native init MyFirstApp</Text>
              <Text style={styles.code}>cd MyFirstApp</Text>
            </View>

            <Text style={styles.stepTitle}>Step 3: Start the development server</Text>
            <View style={styles.codeBlock}>
              <Text style={styles.code}>npx react-native start</Text>
            </View>

            <Text style={styles.stepTitle}>Step 4: Run on Android or iOS</Text>
            <View style={styles.codeBlock}>
              <Text style={styles.code}>npx react-native run-android</Text>
              <Text style={styles.code}>// or</Text>
              <Text style={styles.code}>npx react-native run-ios</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => openLink('https://reactnative.dev/docs/environment-setup')}
          >
            <Text style={styles.linkButtonText}>React Native CLI Setup Guide</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Platform-Specific Requirements</Text>

        <View style={styles.platform}>
          <Text style={styles.platformTitle}>Android Development</Text>
          <Text style={styles.platformText}>
            To develop for Android, you'll need:
          </Text>
          <View style={styles.platformList}>
            <Text style={styles.platformItem}>• Java Development Kit (JDK)</Text>
            <Text style={styles.platformItem}>• Android Studio</Text>
            <Text style={styles.platformItem}>• Android SDK</Text>
            <Text style={styles.platformItem}>• An Android emulator or physical device</Text>
          </View>
          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => openLink('https://developer.android.com/studio')}
          >
            <Text style={styles.linkButtonText}>Download Android Studio</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.platform}>
          <Text style={styles.platformTitle}>iOS Development (Mac only)</Text>
          <Text style={styles.platformText}>
            To develop for iOS, you'll need:
          </Text>
          <View style={styles.platformList}>
            <Text style={styles.platformItem}>• macOS</Text>
            <Text style={styles.platformItem}>• Xcode</Text>
            <Text style={styles.platformItem}>• CocoaPods</Text>
            <Text style={styles.platformItem}>• An iOS simulator or physical device</Text>
          </View>
          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => openLink('https://apps.apple.com/us/app/xcode/id497799835')}
          >
            <Text style={styles.linkButtonText}>Download Xcode</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Troubleshooting Tips</Text>
        <Text style={styles.troubleshootingText}>
          • Make sure your Node.js version is compatible with React Native
        </Text>
        <Text style={styles.troubleshootingText}>
          • Check that environment variables are set correctly (ANDROID_HOME, JAVA_HOME)
        </Text>
        <Text style={styles.troubleshootingText}>
          • For iOS issues, try cleaning the build folder with "cd ios && pod install"
        </Text>
        <Text style={styles.troubleshootingText}>
          • For Android issues, make sure the Android SDK is properly installed
        </Text>
        <Text style={styles.troubleshootingText}>
          • When in doubt, the React Native community is very helpful!
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary, borderColor: colors.border }]}
        onPress={() => navigation.navigate('Lessons')}
      >
        <Text style={[styles.buttonText, { color: colors.textPrimary }]}>I'm Ready to Start Learning</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    textAlign: 'center',
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
  requirement: {
    marginBottom: SPACING.large,
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.small,
    borderWidth: 1,
  },
  requirementTitle: {
    fontSize: FONTS.sizes.large,
    fontWeight: 'bold',
    marginBottom: SPACING.small,
  },
  requirementText: {
    fontSize: FONTS.sizes.medium,
    marginBottom: SPACING.medium,
  },
  method: {
    marginBottom: SPACING.large,
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.small,
    borderWidth: 1,
  },
  methodTitle: {
    fontSize: FONTS.sizes.large,
    fontWeight: 'bold',
    marginBottom: SPACING.small,
  },
  methodText: {
    fontSize: FONTS.sizes.medium,
    marginBottom: SPACING.medium,
  },
  steps: {
    marginBottom: SPACING.medium,
  },
  stepTitle: {
    fontSize: FONTS.sizes.medium,
    fontWeight: 'bold',
    marginBottom: SPACING.small,
    marginTop: SPACING.medium,
  },
  codeBlock: {
    backgroundColor: '#1A1A1A',
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.small,
    borderWidth: 1,
    borderColor: '#333333', // Fixed border color
  },
  code: {
    fontFamily: 'monospace',
    fontSize: FONTS.sizes.small,
    color: '#FFFFFF', // Keep code text white for readability
  },
  platform: {
    marginBottom: SPACING.large,
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.small,
    borderWidth: 1,
  },
  platformTitle: {
    fontSize: FONTS.sizes.large,
    fontWeight: 'bold',
    marginBottom: SPACING.small,
  },
  platformText: {
    fontSize: FONTS.sizes.medium,
    marginBottom: SPACING.small,
  },
  platformList: {
    marginBottom: SPACING.medium,
  },
  platformItem: {
    fontSize: FONTS.sizes.medium,
    marginBottom: SPACING.xs,
  },
  troubleshootingText: {
    fontSize: FONTS.sizes.medium,
    marginBottom: SPACING.small,
  },
  linkButton: {
    backgroundColor: 'transparent',
    padding: SPACING.small,
    borderRadius: BORDER_RADIUS.small,
    borderWidth: 1,
    alignSelf: 'flex-start',
  },
  linkButtonText: {
    fontSize: FONTS.sizes.small,
    fontWeight: 'bold',
  },
  button: {
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.medium,
    margin: SPACING.large,
    alignItems: 'center',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: FONTS.sizes.large,
    fontWeight: 'bold',
  },
});

export default BeforeLearningScreen;
