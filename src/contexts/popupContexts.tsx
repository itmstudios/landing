"use client";

import React, { useState, ReactNode, useContext } from 'react';

interface PopupContextType {
    message: string | null;
    showPopup: (message: string) => void;
    hidePopup: () => void;
    isVisible: boolean;
}

const defaultContextValue: PopupContextType = {
    message: null,
    showPopup: () => {},
    hidePopup: () => {},
    isVisible: false,
};

const PopupContext = React.createContext<PopupContextType>(defaultContextValue);

interface PopupProviderProps {
    children: ReactNode;
}

export const PopupProvider: React.FC<PopupProviderProps> = ({ children }) => {
    const [message, setMessage] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const showPopup = (msg: string) => {
        console.log('Showing popup with message:', msg);
        setMessage(msg);
        setIsVisible(true);
        setTimeout(() => {
            setIsVisible(false);
        }, 3000);
    };
    
    const hidePopup = () => {
        setMessage(null);
        setIsVisible(false);
    };

    return (
        <PopupContext.Provider value={{ message, showPopup, hidePopup, isVisible }}>
            {children}
        </PopupContext.Provider>
    );
};

export const usePopup = () => {
    const context = useContext(PopupContext);
    if (context === undefined) {
        throw new Error('usePopup must be used within a PopupProvider');
    }
    return context;
};
