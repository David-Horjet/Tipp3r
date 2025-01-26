import type React from "react"
import { motion } from "framer-motion"

const RecentDonations: React.FC = () => {
  const recentDonations = [
    { id: 1, name: "Alice", amount: 50, token: "USDC", date: "2023-05-15" },
    { id: 2, name: "Bob", amount: 25, token: "SOL", date: "2023-05-14" },
    { id: 3, name: "Charlie", amount: 100, token: "USDC", date: "2023-05-13" },
    { id: 4, name: "David", amount: 75, token: "SOL", date: "2023-05-12" },
    { id: 5, name: "Eve", amount: 30, token: "USDC", date: "2023-05-11" },
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Recent Donations</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Token</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentDonations.map((donation, index) => (
              <motion.tr
                key={donation.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{donation.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donation.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donation.token}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donation.date}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentDonations

