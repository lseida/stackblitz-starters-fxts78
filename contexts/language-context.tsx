'use client'

import { createContext, useContext, useState } from 'react'

type Language = 'en' | 'es'

interface Translations {
  [key: string]: {
    [key: string]: string
  }
}

const translations: Translations = {
  en: {
    search: 'Search...',
    addNew: 'Add New',
    code: 'Code',
    name: 'Name',
    category: 'Category',
    price: 'Price',
    stock: 'Stock',
    status: 'Status',
    actions: 'Actions',
    view: 'View',
    edit: 'Edit',
    delete: 'Delete'
  },
  es: {
    search: 'Buscar...',
    addNew: 'Agregar Nuevo',
    code: 'Código',
    name: 'Nombre',
    category: 'Categoría',
    price: 'Precio',
    stock: 'Stock',
    status: 'Estado',
    actions: 'Acciones',
    view: 'Ver',
    edit: 'Editar',
    delete: 'Eliminar'
  }
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}