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

interface Product {
  id: string
  code: string
  name: string
  category: string
  price: number
  stock: number
  status: 'active' | 'inactive'
}

const dummyProducts: Product[] = [
  {
    id: '1',
    code: 'P001',
    name: 'Laptop Pro',
    category: 'Electronics',
    price: 1299.99,
    stock: 50,
    status: 'active',
  },
  {
    id: '2',
    code: 'P002',
    name: 'Wireless Mouse',
    category: 'Accessories',
    price: 29.99,
    stock: 100,
    status: 'active',
  },
  {
    id: '3',
    code: 'P003',
    name: 'USB-C Cable',
    category: 'Accessories',
    price: 15.99,
    stock: 200,
    status: 'inactive',
  },
]

export function ProductsList() {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('')
  const [products] = useState<Product[]>(dummyProducts)

  const handleSearch = (value: string) => {
    setSearchQuery(value)
  }

  const handleAddProduct = () => {
    // Add product logic here
  }

  const handleEditProduct = (id: string) => {
    // Edit product logic here
  }

  const handleViewProduct = (id: string) => {
    // View product logic here
  }

  const handleDeleteProduct = (id: string) => {
    // Delete product logic here
  }

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-4 p-6">
      <div className="flex justify-between">
        <Search 
          placeholder={t('search')} 
          value={searchQuery}
          onChange={handleSearch}
        />
        <Button onClick={handleAddProduct} className="bg-black hover:bg-white hover:text-black border border-black text-white">
          <Plus className="mr-2 h-4 w-4" />
          {t('addNew')}
        </Button>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left p-4 font-medium text-gray-500">{t('code')}</th>
                <th className="text-left p-4 font-medium text-gray-500">{t('name')}</th>
                <th className="text-left p-4 font-medium text-gray-500">{t('category')}</th>
                <th className="text-left p-4 font-medium text-gray-500">{t('price')}</th>
                <th className="text-left p-4 font-medium text-gray-500">{t('stock')}</th>
                <th className="text-left p-4 font-medium text-gray-500">{t('status')}</th>
                <th className="text-left p-4 font-medium text-gray-500">{t('actions')}</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">{product.code}</td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">{product.name}</td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">{product.category}</td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">${product.price.toFixed(2)}</td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">{product.stock}</td>
                  <td className="p-4 text-sm">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      product.status === 'active' 
                        ? 'bg-green-500/20 text-green-600 dark:text-green-400'
                        : 'bg-red-500/20 text-red-600 dark:text-red-400'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-white dark:bg-gray-800">
                        <DropdownMenuItem onClick={() => handleViewProduct(product.id)}>
                          <Eye className="mr-2 h-4 w-4" />
                          {t('view')}
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleEditProduct(product.id)}>
                          <Pencil className="mr-2 h-4 w-4" />
                          {t('edit')}
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => handleDeleteProduct(product.id)}
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