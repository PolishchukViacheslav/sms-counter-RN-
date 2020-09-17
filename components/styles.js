import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  fullScreen: {
    width: windowWidth,
    height: windowHeight,
    alignItems: 'center',
  },
  textAreaContainer: {
    backgroundColor: '#fff',
    borderColor: Colors.grey20,
    borderRadius: 8,
    borderWidth: 1,
    padding: 5,
    marginVertical: 20,
  },
  textArea: {
    height: 150,
    width: windowWidth * 0.9,
    justifyContent: 'flex-start',
    fontSize: 18,
  },
  mesLenSettContainer: {
    flexDirection: 'row',
    width: windowWidth * 0.9,
    marginBottom: 60,
  },
  mesLenSettInputWrapper: {
    width: 60,
    height: 60,
    marginRight: 60,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
  },
  mesLenSettInput: {
    textAlign: 'center',
    height: 60,
    width: 60,
    fontSize: 22,
  },
  mesLenSettTitleWrapper: {
    width: 220,
    height: 60,
    justifyContent: 'center',
  },
  mesLenSettTitle: {
    textAlign: 'center',
    width: 220,
    fontSize: 26,
  },
  counterButtonContainer: {
    width: windowWidth * 0.8,
    height: 100,
    paddingHorizontal: 20,
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: '#6761fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterButtonTouch: {
    width: windowWidth * 0.8,
    marginBottom: 60,
  },
  counterButtonTitle: {
    color: '#fff',
    fontSize: 26,
    textAlign: 'center',
  },
  countResultContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  countResultTitle: {
    marginRight: 40,
    fontSize: 22,
  },
  countResultValue: {
    marginRight: 40,
    fontSize: 22,
    fontWeight: 'bold',
  },
  overFlowContainer: {
    height: 100,
    borderColor: 'red',
    borderRadius: 8,
    borderWidth: 1,
  },
  overFlow: {
    width: 220,
    paddingHorizontal: 10,
  },
  overFlowTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
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
export const counterButtonContainerStyle = styles.counterButtonContainer;
export const counterButtonTouchStyle = styles.counterButtonTouch;
export const counterButtonTitleStyle = styles.counterButtonTitle;
export const countResultContainerStyle = styles.countResultContainer;
export const countResultTitleWrapperStyle = styles.countResultTitleWrapper;
export const countResultTitleStyle = styles.countResultTitle;
export const countResultValueStyle = styles.countResultValue;
export const overFlowStyle = styles.overFlow;
export const overFlowTitleStyle = styles.overFlowTitle;
export const overFlowContainerStyle = styles.overFlowContainer;
