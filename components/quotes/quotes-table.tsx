'use client'

import { MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'

const quotes = [
  { id: 'CO01', client: 'Acme Corp', total: '$5,000', status: 'Pendiente', date: '2023-05-01' },
  { id: 'CO02', client: 'GlobalTech', total: '$7,500', status: 'Aprobada', date: '2023-05-03' },
  { id: 'CO03', client: 'InnoSystems', total: '$3,200', status: 'Rechazada', date: '2023-05-05' },
  { id: 'CO04', client: 'TechGiant', total: '$10,000', status: 'Pendiente', date: '2023-05-07' },
]

export function QuotesTable() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="p-6">
        <h2 className="text-xl font-semibold">Lista de Cotizaciones</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left text-sm font-medium text-muted-foreground p-4">ID Cotización</th>
              <th className="text-left text-sm font-medium text-muted-foreground p-4">Cliente</th>
              <th className="text-left text-sm font-medium text-muted-foreground p-4">Total</th>
              <th className="text-left text-sm font-medium text-muted-foreground p-4">Estado</th>
              <th className="text-left text-sm font-medium text-muted-foreground p-4">Fecha</th>
              <th className="text-left text-sm font-medium text-muted-foreground p-4">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map((quote) => (
              <tr key={quote.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="p-4 text-sm">{quote.id}</td>
                <td className="p-4 text-sm">{quote.client}</td>
                <td className="p-4 text-sm">{quote.total}</td>
                <td className="p-4 text-sm">
                  <StatusBadge status={quote.status} />
                </td>
                <td className="p-4 text-sm">{quote.date}</td>
                <td className="p-4 text-sm">
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  const styles = {
    Pendiente: 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400',
    Aprobada: 'bg-green-500/20 text-green-600 dark:text-green-400',
    Rechazada: 'bg-red-500/20 text-red-600 dark:text-red-400',
  }[status]

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles}`}>
      {status}
    </span>
  )
}