import { Box } from 'native-base';
import React, { useState, useEffect } from 'react';
import { View, Animated, StyleSheet, TouchableOpacity, Easing } from 'react-native';

interface Props {
    isVisible: boolean;
    onClose: () => void;
    children: any
}

const LeftSlideModal: React.FC<Props> = ({ isVisible, onClose, children }) => {
    const [slideAnimation] = useState(new Animated.Value(0)); // set initial position to be off-screen
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isVisible) {
            setIsAnimating(true);
            Animated.timing(slideAnimation, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
                easing: Easing.ease,
            }).start(() => setIsAnimating(false));
        } else {
            setIsAnimating(true);
            Animated.timing(slideAnimation, {
                toValue: -500,
                duration: 300,
                useNativeDriver: true,
                easing: Easing.ease,
            }).start(() => setIsAnimating(false));
        }
    }, [isVisible]);



    return (
        <>
            {isVisible && (
                <TouchableOpacity
                    style={StyleSheet.absoluteFillObject}
                    activeOpacity={1}
                    onPress={onClose}
                >
                    <View style={styles.background} />
                </TouchableOpacity>
            )}
            <Animated.View
                style={[
                    styles.container,
                    {
                        transform: [{ translateX: slideAnimation }],
                        opacity: isAnimating ? 0 : 1,
                    },
                ]}
            >
                <Box
                    p={2}
                >
                    {children}
                </Box>
            </Animated.View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '70%',
        backgroundColor: '#fff',
        zIndex: 2,
    },
    background: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
});

export default LeftSlideModal;
