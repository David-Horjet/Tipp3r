export default function ConfirmDonation({
    amount,
    paymentMethod,
    onConfirm,
  }: {
    amount: number
    paymentMethod: "crypto" | "fiat" | null
    onConfirm: () => void
  }) {
    return (
      <div className="space-y-4 text-black">
        <h2 className="text-lg font-semibold mb-2">Confirm Your Donation</h2>
        <div className="bg-gray-50 p-4 rounded-md">
          <p className="font-medium">Amount: {amount} USDC</p>
          <p className="text-sm text-gray-600">
            Payment Method: {paymentMethod === "crypto" ? "Crypto Wallet" : "Credit/Debit Card"}
          </p>
        </div>
        <button
          onClick={onConfirm}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Confirm and Send Donation
        </button>
      </div>
    )
  }
  
  