import { useEffect, useRef } from 'react';
import {
    Animated,
    StyleSheet,
    Text,
    View,
    Pressable,
} from 'react-native';

export interface ToastData {
    id: number;
    title: string;
    description?: string;
    actionLabel?: string;
    onAction?: () => void;
    error?: boolean;
}

const ToastItem = ({
    id,
    title,
    description,
    actionLabel,
    onAction,
    index,
    error = false,
    removeToast,
}: ToastData & { index: number; removeToast: (id: number) => void }) => {
    const translateY = useRef(new Animated.Value(-50)).current;
    const opacity = useRef(new Animated.Value(0)).current;

    const handleAction = () => {
        if (onAction) onAction();
        removeToast(id);
    };

    useEffect(() => {
        Animated.parallel([
            Animated.spring(translateY, {
                toValue: index * 10,
                useNativeDriver: true,
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            }),
        ]).start();
    }, [index]);

    return (
        <Animated.View
            style={[
                styles.toast,
                {
                    transform: [{ translateY }],
                    opacity,
                    backgroundColor: !error ? '#121212' : "#ff2828"
                },
            ]}
        >
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                {description && (
                    <Text style={styles.description}>{description}</Text>
                )}
            </View>

            {actionLabel && (
                <Pressable style={styles.actionButton} onPress={handleAction}>
                    <Text style={styles.actionText}>{actionLabel}</Text>
                </Pressable>
            )}
        </Animated.View>
    );
};

export default ToastItem;

const styles = StyleSheet.create({
    toast: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        padding: 12,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    content: {
        flex: 1,
    },
    title: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
    description: {
        color: '#aaa',
        fontSize: 14,
    },
    actionButton: {
        marginLeft: 12,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 6,
    },
    actionText: {
        color: '#121212',
        fontWeight: '600',
    },
});
