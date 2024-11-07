'use client'

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { QuotesStats } from './quotes-stats'
import { QuotesTable } from './quotes-table'

export function QuotesDashboard() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Cotizaciones</h1>
        <Button className="bg-black hover:bg-black/90 text-white">
          <Plus className="mr-2 h-4 w-4" />
          Nueva cotización
        </Button>
      </div>

      <QuotesStats />
      <QuotesTable />
    </div>
  )
}