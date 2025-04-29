import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FONTS, SPACING, BORDER_RADIUS } from '../styles/theme';
import { ThemeContext } from '../context/ThemeContext';

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const { colors, theme } = useContext(ThemeContext);
  const isDarkTheme = theme === 'dark' || theme === 'redBlack';

  return (
    <View style={[styles.container, { borderColor: colors.border }]}>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        <ScrollView
          style={[styles.codeContainer, {
            backgroundColor: isDarkTheme ? '#1A1A1A' : '#F5F5F5'
          }]}
          showsVerticalScrollIndicator={true}
        >
          <Text style={[styles.code, {
            color: isDarkTheme ? '#FFFFFF' : '#212121'
          }]}>{code}</Text>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: SPACING.small,
    borderRadius: BORDER_RADIUS.small,
    overflow: 'hidden',
    borderWidth: 1,
  },
  codeContainer: {
    padding: SPACING.small,
    maxHeight: 300,
  },
  code: {
    fontFamily: 'monospace',
    fontSize: FONTS.sizes.small,
  },
});

export default CodeBlock;
