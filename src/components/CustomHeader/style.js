import { StyleSheet } from 'react-native';

export const styles = (isButtonLeft, isButtonRight, isButtonBack, isTitled) => {
  const titled = isTitled && !isButtonLeft && !isButtonBack && !isButtonRight;
  const titledWithLeftButton =
    isTitled && (isButtonLeft || isButtonBack) && !isButtonRight;

  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: titled ? 'center' : 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    titleContainer: {
      position: titledWithLeftButton ? 'absolute' : 'relative',
      width: titledWithLeftButton ? '100%' : 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      height: 44,
      zIndex: -1,
    },
    title: {
      fontFamily: 'Lato-Bold',
      fontSize: 20,
      textAlign: 'center',
    },
  });
};
