import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { toast } from "sonner"

const WithdrawFunds: React.FC = () => {
  const [amount, setAmount] = useState("")
  const [token, setToken] = useState("USDC")

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(`Withdrawing ${amount} ${token}`)
    toast.success(`Withdrawal of ${amount} ${token} initiated!`)
    setAmount("")
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Withdraw Funds</h2>
      <form onSubmit={handleWithdraw}>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="token" className="block text-sm font-medium text-gray-700">
            Token
          </label>
          <select
            id="token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="USDC">USDC</option>
            <option value="SOL">SOL</option>
          </select>
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full p-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200"
        >
          Withdraw
        </motion.button>
      </form>
    </motion.div>
  )
}

export default WithdrawFunds

