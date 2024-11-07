"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const recentQuotes = [
  {
    id: "CO01",
    client: "Acme Corp",
    total: "$5,000",
    status: "Pending",
    date: "2023-05-01"
  },
  {
    id: "CO02",
    client: "GlobalTech",
    total: "$7,500",
    status: "Approved",
    date: "2023-05-03"
  },
  {
    id: "CO03",
    client: "InnoSystems",
    total: "$3,200",
    status: "Rejected",
    date: "2023-05-05"
  },
  {
    id: "CO04",
    client: "TechGiant",
    total: "$10,000",
    status: "Pending",
    date: "2023-05-07"
  }
]

export function RecentQuotes() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Quotes</h2>
      </div>
      <div className="px-6">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-gray-200">
              <TableHead className="text-gray-600">ID</TableHead>
              <TableHead className="text-gray-600">Client</TableHead>
              <TableHead className="text-gray-600">Total</TableHead>
              <TableHead className="text-gray-600">Status</TableHead>
              <TableHead className="text-gray-600">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentQuotes.map((quote) => (
              <TableRow key={quote.id} className="border-gray-200">
                <TableCell className="font-medium text-gray-900 dark:text-white">{quote.id}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300">{quote.client}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300">{quote.total}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      quote.status === "Approved"
                        ? "bg-green-100 text-green-800"
                        : quote.status === "Rejected"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {quote.status}
                  </span>
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300">{quote.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}