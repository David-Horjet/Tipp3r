import type React from "react"
import { motion } from "framer-motion"
import { TrendingUp, TrendingDown, Users } from "lucide-react"

const EarningsSummary: React.FC = () => {
  const totalDonations = 1000
  const recentDonations = 250
  const percentageChange = 15

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Earnings Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-indigo-100 p-4 rounded-lg">
          <p className="text-indigo-600 font-semibold">Total Donations</p>
          <p className="text-3xl font-bold">${totalDonations}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <p className="text-green-600 font-semibold">Recent Donations (30 days)</p>
          <p className="text-3xl font-bold">${recentDonations}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center">
        {percentageChange > 0 ? (
          <TrendingUp className="text-green-500 mr-2" />
        ) : (
          <TrendingDown className="text-red-500 mr-2" />
        )}
        <span className={percentageChange > 0 ? "text-green-500" : "text-red-500"}>
          {percentageChange}% from last month
        </span>
      </div>
      <div className="mt-4 flex items-center">
        <Users className="text-indigo-500 mr-2" />
        <span>152 total supporters</span>
      </div>
    </motion.div>
  )
}

export default EarningsSummary

