'use client'

import { FileText } from 'lucide-react'

export function QuotesStats() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <StatCard
        title="Total Cotizaciones"
        value="128"
        change="+10% desde el mes pasado"
      />
      <StatCard
        title="Cotizaciones Activos"
        value="64"
        change="+5% desde el mes pasado"
      />
      <StatCard
        title="Actividad Reciente"
        value="24"
        change="En los últimos 7 días"
      />
    </div>
  )
}

function StatCard({ title, value, change }: { 
  title: string
  value: string
  change: string 
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          <p className="text-3xl font-bold mt-2">{value}</p>
          <p className="text-sm text-muted-foreground mt-2">{change}</p>
        </div>
        <FileText className="h-5 w-5 text-muted-foreground" />
      </div>
    </div>
  )
}