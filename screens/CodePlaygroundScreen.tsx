import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { FONTS, SPACING, SHADOWS, BORDER_RADIUS } from '../styles/theme';
import { ThemeContext } from '../context/ThemeContext';

type CodePlaygroundScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'CodePlayground'>;
type CodePlaygroundScreenRouteProp = RouteProp<RootStackParamList, 'CodePlayground'>;

interface CodePlaygroundScreenProps {
  navigation: CodePlaygroundScreenNavigationProp;
  route: CodePlaygroundScreenRouteProp;
}

const CodePlaygroundScreen = ({ navigation, route }: CodePlaygroundScreenProps) => {
  const { colors, theme } = useContext(ThemeContext);
  const { code } = route.params;
  const [codeValue, setCodeValue] = useState(code);
  const isDarkTheme = theme === 'dark' || theme === 'redBlack';

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.primary, borderBottomColor: colors.border }]}>
        <Text style={[styles.title, { color: colors.textPrimary }]}>Code Playground</Text>
        <Text style={[styles.subtitle, { color: colors.textPrimary }]}>Edit the code below to experiment</Text>
      </View>

      <View style={[styles.editorContainer, { backgroundColor: colors.cardBackground, borderColor: colors.border }]}>
        <ScrollView style={[styles.editor, { backgroundColor: isDarkTheme ? '#1A1A1A' : '#F5F5F5' }]}>
          <TextInput
            style={[styles.codeInput, { color: isDarkTheme ? '#FFFFFF' : '#212121' }]}
            value={codeValue}
            onChangeText={setCodeValue}
            multiline
            autoCapitalize="none"
            autoCorrect={false}
          />
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary, borderColor: colors.border }]}
          onPress={() => navigation.goBack()}
        >
          <Text style={[styles.buttonText, { color: colors.textPrimary }]}>Back to Lesson</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.resetButton, { backgroundColor: colors.error, borderColor: colors.border }]}
          onPress={() => setCodeValue(code)}
        >
          <Text style={[styles.buttonText, { color: colors.textPrimary }]}>Reset Code</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  subtitle: {
    fontSize: FONTS.sizes.medium,
    opacity: 0.8,
  },
  editorContainer: {
    flex: 1,
    margin: SPACING.medium,
    borderRadius: BORDER_RADIUS.medium,
    borderWidth: 1,
    ...SHADOWS.medium,
    overflow: 'hidden',
  },
  editor: {
    flex: 1,
    padding: SPACING.medium,
  },
  codeInput: {
    fontFamily: 'monospace',
    fontSize: FONTS.sizes.small,
    minHeight: '100%',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SPACING.medium,
  },
  button: {
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.medium,
    flex: 1,
    marginHorizontal: SPACING.xs,
    alignItems: 'center',
    borderWidth: 1,
  },
  resetButton: {
  },
  buttonText: {
    fontSize: FONTS.sizes.medium,
    fontWeight: 'bold',
  },
});

export default CodePlaygroundScreen;
