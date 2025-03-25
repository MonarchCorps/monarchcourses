import ToastItem, { ToastData } from '@/components/ToastItem';
import {
    createContext,
    useContext,
    useState,
    ReactNode
} from 'react';
import { View, StyleSheet } from 'react-native';

interface ToastContextType {
    showToast: (toast: Omit<ToastData, 'id'>) => void;
    removeToast: (id: number) => void,
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

let toastId = 0;

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<ToastData[]>([]);

    const showToast = (toast: Omit<ToastData, 'id'>) => {
        const id = toastId++;
        const newToast = { id, ...toast };

        setToasts(prev => [newToast, ...prev]);

        // Auto dismiss after 4s
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, 2000);
    };

    const removeToast = (id: number) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <ToastContext.Provider value={{ showToast, removeToast }}>
            {children}

            {/* Toast Stack */}
            <View style={styles.toastContainer}>
                {toasts.map((toast, index) => (
                    <ToastItem key={toast.id} {...toast} index={index} />
                ))}
            </View>
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used inside ToastProvider');
    }
    return context;
};

const styles = StyleSheet.create({
    toastContainer: {
        position: 'absolute',
        top: 50,
        width: '100%',
        paddingHorizontal: 16,
        zIndex: 10000,
    },
});
