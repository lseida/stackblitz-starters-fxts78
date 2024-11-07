'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Search } from '@/components/ui/search'
import { Plus, Pencil, Eye, Trash2, MoreHorizontal } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useLanguage } from '@/contexts/language-context'

interface Quote {
  id: string
  client: string
  total: string
  status: 'Pendiente' | 'Aprobada' | 'Rechazada'
  date: string
}

const dummyQuotes: Quote[] = [
  { id: 'CO01', client: 'Acme Corp', total: '$5,000', status: 'Pendiente', date: '2023-05-01' },
  { id: 'CO02', client: 'GlobalTech', total: '$7,500', status: 'Aprobada', date: '2023-05-03' },
  { id: 'CO03', client: 'InnoSystems', total: '$3,200', status: 'Rechazada', date: '2023-05-05' },
  { id: 'CO04', client: 'TechGiant', total: '$10,000', status: 'Pendiente', date: '2023-05-07' },
]

export function QuotesList() {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('')
  const [quotes] = useState<Quote[]>(dummyQuotes)

  const handleSearch = (value: string) => {
    setSearchQuery(value)
  }

  const handleAddQuote = () => {
    // Add quote logic here
  }

  const handleEditQuote = (id: string) => {
    // Edit quote logic here
  }

  const handleViewQuote = (id: string) => {
    // View quote logic here
  }

  const handleDeleteQuote = (id: string) => {
    // Delete quote logic here
  }

  const filteredQuotes = quotes.filter(quote =>
    quote.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
    quote.id.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-4 p-6">
      <div className="flex justify-between">
        <Search 
          placeholder={t('search')} 
          value={searchQuery}
          onChange={handleSearch}
        />
        <Button onClick={handleAddQuote} className="bg-black hover:bg-white hover:text-black border border-black text-white">
          <Plus className="mr-2 h-4 w-4" />
          {t('addNew')}
        </Button>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left p-4 font-medium text-gray-500">ID</th>
                <th className="text-left p-4 font-medium text-gray-500">{t('client')}</th>
                <th className="text-left p-4 font-medium text-gray-500">{t('total')}</th>
                <th className="text-left p-4 font-medium text-gray-500">{t('status')}</th>
                <th className="text-left p-4 font-medium text-gray-500">{t('date')}</th>
                <th className="text-left p-4 font-medium text-gray-500">{t('actions')}</th>
              </tr>
            </thead>
            <tbody>
              {filteredQuotes.map((quote, index) => (
                <tr 
                  key={quote.id} 
                  className={`border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 ${
                    index === filteredQuotes.length - 1 ? 'border-b-0' : ''
                  }`}
                >
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">{quote.id}</td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">{quote.client}</td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">{quote.total}</td>
                  <td className="p-4 text-sm">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      quote.status === 'Aprobada'
                        ? 'bg-green-500/20 text-green-600 dark:text-green-400'
                        : quote.status === 'Rechazada'
                        ? 'bg-red-500/20 text-red-600 dark:text-red-400'
                        : 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400'
                    }`}>
                      {quote.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">{quote.date}</td>
                  <td className="p-4 text-sm">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-white dark:bg-gray-800">
                        <DropdownMenuItem onClick={() => handleViewQuote(quote.id)}>
                          <Eye className="mr-2 h-4 w-4" />
                          {t('view')}
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleEditQuote(quote.id)}>
                          <Pencil className="mr-2 h-4 w-4" />
                          {t('edit')}
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => handleDeleteQuote(quote.id)}
                          className="text-red-600 dark:text-red-400"
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          {t('delete')}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}