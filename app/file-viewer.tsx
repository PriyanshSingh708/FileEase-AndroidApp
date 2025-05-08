import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Dimensions, Alert } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { Image } from 'expo-image';
import { WebView } from 'react-native-webview';
import { useSettingsStore } from '../store/settingsStore';
import { useFileStore } from '../store/fileStore';
import colors from '../constants/colors';
import { Platform } from 'react-native';
import { Share2 } from 'lucide-react-native';
import { shareFile } from '../utils/fileUtils';

const { width, height } = Dimensions.get('window');

export default function FileViewerScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const darkMode = useSettingsStore(state => state.darkMode);
  const theme = darkMode ? colors.dark : colors.light;
  const files = useFileStore(state => state.files);
  const file = files.find(f => f.id === id);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!file) {
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.errorText, { color: theme.text }]}>File not found</Text>
      </View>
    );
  }
  
  const handleShare = () => {
    if (file.uri) {
      shareFile(file.uri);
    } else {
      Alert.alert('Error', 'Cannot share this file');
    }
  };
  
  const renderContent = () => {
    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={theme.primary} />
          <Text style={[styles.loadingText, { color: theme.text }]}>Loading file...</Text>
        </View>
      );
    }
    
    // Render content based on file type
    switch (file.type) {
      case 'image':
        return (
          <Image
            source={{ uri: file.uri || file.thumbnail || 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' }}
            style={styles.imageViewer}
            contentFit="contain"
          />
        );
      case 'video':
        // Since expo-av is not available, we'll show a placeholder for videos
        return (
          <View style={styles.unsupportedContainer}>
            <Text style={[styles.unsupportedText, { color: theme.text }]}>
              Video preview not available
            </Text>
          </View>
        );
      case 'document':
        // For PDF and documents, we'll use a WebView with a PDF viewer
        if (file.uri && file.uri.endsWith('.pdf')) {
          return (
            <WebView
              source={{ uri: `https://docs.google.com/viewer?embedded=true&url=${encodeURIComponent(file.uri)}` }}
              style={styles.webViewer}
            />
          );
        } else {
          // For other document types
          return (
            <View style={styles.unsupportedContainer}>
              <Text style={[styles.unsupportedText, { color: theme.text }]}>
                Preview not available for this document type.
              </Text>
            </View>
          );
        }
      default:
        return (
          <View style={styles.unsupportedContainer}>
            <Text style={[styles.unsupportedText, { color: theme.text }]}>
              Preview not available for this file type
            </Text>
          </View>
        );
    }
  };
  
  return (
    <>
      <Stack.Screen 
        options={{
          title: file.name,
          headerRight: () => (
            <Share2 
              size={24} 
              color={theme.text} 
              style={{ marginRight: 16 }}
              onPress={handleShare}
            />
          ),
        }} 
      />
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        {renderContent()}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
  },
  imageViewer: {
    flex: 1,
    width: width,
    height: height * 0.7,
  },
  videoPlayer: {
    flex: 1,
    width: width,
    height: height * 0.7,
  },
  webViewer: {
    flex: 1,
  },
  unsupportedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  unsupportedText: {
    fontSize: 16,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  webFallback: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    fontSize: 16,
  },
});