import { useState } from "react"

export default function DonationForm({ onSubmit }: { onSubmit: (amount: number) => void }) {
  const [amount, setAmount] = useState<number>(5)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(amount)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
          Donation Amount (SOL)
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          min="0.000001"
          step="0.002"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
        />
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Continue to Payment
      </button>
    </form>
  )
}

