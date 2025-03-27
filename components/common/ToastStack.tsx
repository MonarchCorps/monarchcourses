import { View, StyleSheet } from "react-native";
import ToastItem, { ToastData } from "./ToastItem";

const ToastStack = ({
    toasts, removeToast
}: {
    toasts: ToastData[];
    removeToast: (id: number) => void
}) => {
    return (
        <View style={styles.toastContainer}>
            {toasts.map((toast, index) => (
                <ToastItem key={toast.id} {...toast} index={index} removeToast={removeToast} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    toastContainer: {
        position: "absolute",
        top: 50,
        width: "100%",
        paddingHorizontal: 16,
        zIndex: 10000,
    },
});

export default ToastStack;