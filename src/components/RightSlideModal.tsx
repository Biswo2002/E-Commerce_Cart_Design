import { Box } from 'native-base';
import React, { useRef, useEffect } from 'react';
import {
    StyleSheet,
    Animated,
    Easing,
} from 'react-native';

interface Props {
    isVisible: boolean;

    children: any
}


const RightSlideModal: React.FC<Props> = ({ isVisible, children }) => {
    const slideAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (isVisible) {
            Animated.timing(slideAnim, {
                toValue: 1,
                duration: 300,
                easing: Easing.ease,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 300,
                easing: Easing.ease,
                useNativeDriver: true,
            }).start();
        }
    }, [isVisible]);

    // const handleModalClose = () => {
    //     Animated.timing(slideAnim, {
    //         toValue: 0,
    //         duration: 300,
    //         easing: Easing.ease,0
    //         useNativeDriver: true,
    //     }).start(() => {
    //         onClose();
    //     });
    // };

    const slideRight = slideAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [350, 0],
    });

    return (
        <Animated.View
            style={[
                styles.modalContainer,
                { transform: [{ translateX: slideRight }] },
            ]}
        >
            <Box
                p={2}
            >{children}</Box>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        // width: Dimensions.get('window').width / 1.5,
        width: 350,
        backgroundColor: 'white',
    },
});

export default RightSlideModal;
