import { Wallet, CreditCard } from "lucide-react"

export default function PaymentMethodSelection({ onSelect }: { onSelect: (method: "crypto" | "fiat") => void }) {
  return (
    <div className="space-y-4 text-black">
      <h2 className="text-lg font-semibold mb-2">Choose Payment Method</h2>
      <button
        onClick={() => onSelect("crypto")}
        className="w-full flex items-center justify-between p-4 border border-gray-300 rounded-md hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <div className="flex items-center">
          <Wallet className="h-6 w-6 text-indigo-500 mr-2" />
          <span>Crypto Wallet</span>
        </div>
        <span className="text-sm text-gray-500">Connect wallet</span>
      </button>
      <button
        disabled
        // onClick={() => onSelect("fiat")}
        className="w-full flex items-center justify-between p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <div className="flex items-center text-gray-700">
          <CreditCard className="h-6 w-6 text-indigo-300 mr-2" />
          <span>Credit/Debit Card <span className="text-xs text-red-700">unavailable!</span></span>
        </div>
        <span className="text-sm text-gray-500">Buy crypto</span>
      </button>
    </div>
  )
}

