import Image from "next/image"

const recentSupporters = [
  { name: "Alice", amount: "5 USDC", message: "Love your content!" },
  { name: "Bob", amount: "0.1 SOL", message: "Keep up the great work!" },
  { name: "Charlie", amount: "10 USDC", message: "You're awesome!" },
]

export default function RecentSupporters() {
  return (
    <div className="mb-6 text-black">
      <h2 className="text-lg font-semibold mb-2">Recent Supporters</h2>
      <div className="space-y-2">
        {recentSupporters.map((supporter, index) => (
          <div key={index} className="flex items-center space-x-2 bg-gray-50 p-2 rounded">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt={supporter.name}
              width={40}
              height={40}
              className="rounded-full bg-gray-600"
            />
            <div>
              <p className="font-medium">
                {supporter.name} donated {supporter.amount}
              </p>
              <p className="text-sm text-gray-600">{supporter.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

