import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  fullScreen: {
    width: windowWidth,
    height: windowHeight,
  },
  textAreaContainer: {
    backgroundColor: '#fff',
    borderColor: Colors.grey20,
    borderRadius: 8,
    borderWidth: 1,
    padding: 5,
    marginBottom: 20,
  },
  textArea: {
    height: 150,
    justifyContent: 'flex-start',
  },
  mesLenSettContainer: {
    flexDirection: 'row',
  },
  mesLenSettInputWrapper: {
    width: 60,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Colors.grey20,
    borderRadius: 8,
  },
  mesLenSettInput: {
    textAlign: 'center',
    height: 60,
    width: 60,
    justifyContent: 'center',
    fontSize: 22,
  },
  mesLenSettTitleWrapper: {
    width: 220,
    height: 100,
    borderWidth: 1,
    borderColor: Colors.grey20,
  },
  mesLenSettTitle: {
    height: 60,
    width: 220,
    borderWidth: 1,
    borderColor: Colors.grey20,
  },
});

export const fullScreenStyle = styles.fullScreen;
export const textAreaContainerStyles = styles.textAreaContainer;
export const textAreaStyles = styles.textArea;
export const mesLenSettContainerStyle = styles.mesLenSettContainer;
export const mesLenSettInputWrapperStyle = styles.mesLenSettInputWrapper;
export const mesLenSettInputStyles = styles.mesLenSettInput;
export const mesLenSettTitleWrapperStyles = styles.mesLenSettTitleWrapper;
export const mesLenSettTitleStyles = styles.mesLenSettTitle;
