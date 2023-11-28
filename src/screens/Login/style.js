import { StyleSheet, Platform } from 'react-native';

export const styles = () => {
    return StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
        },
        form: {
            width: '100%',
            paddingHorizontal: '6%',
            position: 'relative'
        },
        logo: {
            marginBottom: '10%'
        },
        buttonLink: {
            marginTop: '6%'
        },
        bottomLink: {
            position: 'absolute',
            bottom: Platform.OS === 'ios' ? 30 : 70,
            left: 0,
            width: '100%',
        },
        errorContainer: {
            position: 'absolute',
            bottom: '32%',
            left: 0,
            right: 0
        }
    });
}
