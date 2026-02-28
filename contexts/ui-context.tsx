'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface UIContextType {
    profileDropdownOpen: boolean
    setProfileDropdownOpen: (open: boolean) => void
    mobileMenuOpen: boolean
    setMobileMenuOpen: (open: boolean) => void
}

const UIContext = createContext<UIContextType | undefined>(undefined)

export const useUI = () => {
    const context = useContext(UIContext)
    if (!context) {
        throw new Error('useUI must be used within a UIProvider')
    }
    return context
}

interface UIProviderProps {
    children: ReactNode
}

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const value: UIContextType = {
        profileDropdownOpen,
        setProfileDropdownOpen,
        mobileMenuOpen,
        setMobileMenuOpen
    }

    return (
        <UIContext.Provider value={value}>
            {children}
        </UIContext.Provider>
    )
}
