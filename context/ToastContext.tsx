import { ToastData } from '@/components/ToastItem';
import ToastStack from '@/components/ToastStack';
import { ToastContextType } from '@/types/Toast';
import { createContext, useContext, useState, ReactNode } from 'react';

const ToastContext = createContext<ToastContextType | undefined>(undefined);

let toastId = 0;

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<ToastData[]>([]);

    const showToast = (toast: Omit<ToastData, 'id'>) => {
        const id = toastId++;
        const newToast = { id, ...toast };

        setToasts(prev => [newToast, ...prev]);

        // Auto dismiss after 2s
        setTimeout(() => {
            removeToast(id);
        }, 2000);
    };

    const removeToast = (id: number) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <ToastStack toasts={toasts} removeToast={removeToast} />
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