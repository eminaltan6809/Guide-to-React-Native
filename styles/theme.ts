// Theme colors and styling constants for the app
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

// This is a hook to get the current theme colors
export const useThemeColors = () => {
  const { colors } = useContext(ThemeContext);
  return colors;
};

// Default colors (will be replaced by the theme context)
export const COLORS = {
  // Primary colors
  primary: '#8B0000', // Dark red
  primaryLight: '#B22222', // Lighter red for highlights
  primaryDark: '#660000', // Darker red for pressed states

  // Background colors
  background: '#121212', // Dark background
  cardBackground: '#1E1E1E', // Slightly lighter for cards

  // Text colors
  textPrimary: '#FFFFFF', // White text for dark backgrounds
  textSecondary: '#CCCCCC', // Light gray for secondary text
  textMuted: '#999999', // Muted text

  // Accent colors
  accent: '#FFD700', // Gold for accents

  // Border colors
  border: '#000000', // Black for outlines

  // Status colors
  success: '#4CAF50', // Green
  error: '#F44336', // Red
  warning: '#FFC107', // Amber
};

export const FONTS = {
  regular: {
    fontFamily: 'System',
    fontWeight: 'normal',
  },
  medium: {
    fontFamily: 'System',
    fontWeight: '500',
  },
  bold: {
    fontFamily: 'System',
    fontWeight: 'bold',
  },
  sizes: {
    xs: 12,
    small: 14,
    medium: 16,
    large: 18,
    xl: 20,
    xxl: 24,
    xxxl: 30,
  },
};

export const SPACING = {
  xs: 4,
  small: 8,
  medium: 16,
  large: 24,
  xl: 32,
  xxl: 40,
};

export const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 6,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
};

export const BORDER_RADIUS = {
  small: 4,
  medium: 8,
  large: 12,
  xl: 20,
  round: 999,
};
