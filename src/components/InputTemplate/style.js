import { StyleSheet, Platform } from 'react-native';

export const styles = (hasError) => {
    return StyleSheet.create({
        inputWrapper: {
            width: '100%',
            borderWidth: 2,
            borderColor: hasError ? '#ed6666' : '#BF87E3',
            borderRadius: 12,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'transparent',
            marginBottom: 12,
            height: 46
        },
        input: {
            paddingVertical: 10,
            paddingHorizontal: 16,
            paddingLeft: 14,
            fontSize: 16,
            lineHeight: Platform.OS === 'ios' ? 17 : 22,
            flex: 1,
            fontFamily: 'SFProDisplay-Regular',
            color: '#5D3478',
            backgroundColor: 'transparent',
            marginTop: Platform.OS === 'ios' ? 5 : 0
        },
        icon: {
            width: 16,
            height: 16,
            marginLeft: 20,
        },
        eyeIcon: {
            padding: 14
        },
        searchIcon: {
            backgroundColor: '#BF87E3',
            height: '100%',
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            width: 46,
            height: 46,
            justifyContent: 'center',
            alignItems: 'center'
        }
    });
}
