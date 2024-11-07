"use client"

import { FileText, Users, Package } from "lucide-react"

const stats = [
  {
    name: "Total Quotes",
    value: "128",
    change: "+10%",
    changeText: "desde el mes pasado",
    icon: FileText
  },
  {
    name: "Active Quotes",
    value: "64",
    change: "+5%",
    changeText: "desde el mes pasado",
    icon: FileText
  },
  {
    name: "Total Clients",
    value: "256",
    change: "+12%",
    changeText: "desde el mes pasado",
    icon: Users
  },
  {
    name: "Total Products",
    value: "512",
    change: "+8%",
    changeText: "desde el mes pasado",
    icon: Package
  }
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {stat.name}
              </p>
              <p className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
                {stat.value}
              </p>
            </div>
            <stat.icon className="h-8 w-8 text-gray-400 dark:text-gray-500" />
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <span className="text-green-500 text-sm font-medium">
                {stat.change}
              </span>
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                {stat.changeText}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}