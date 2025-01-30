import Image from "next/image"
import sona from "../../../assets/images/donator.jpeg"
import { useEffect, useState } from "react";
import { supabase } from "@/config/supabase";

const recentSupporters = [
  { name: "Alice", amount: "5 USDC", message: "Love your content!" },
  { name: "Bob", amount: "0.1 SOL", message: "Keep up the great work!" },
  { name: "Charlie", amount: "10 USDC", message: "You're awesome!" },
]

export default function RecentSupporters({ username }: { username: string }) {
  const [supporters, setSupporters] = useState<{ donor_wallet: string; amount: string; }[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    async function fetchSupporters() {
      const { data: user, error } = await supabase.from("creators").select("username, wallet_address, bio").eq("username", username.toLowerCase()).single()
      if (user) {
        const { data, error } = await supabase.from("donations").select("donor_wallet, amount").eq("creator_wallet", user.wallet_address).limit(5)
        if (error) {
          setLoading(false)
          console.error("Error fetching supporters:", error)
        } else {
          setLoading(false)
          setSupporters(data)
        }
      } else {
        setLoading(false)
        console.error("Error fetching supporters:", error)
      }
    }

    fetchSupporters()
  }, [username])
  if (!supporters && !loading) return <p className="text-black px-6">No recent supporters for this creator...</p>
  return (
    <>
      {loading ? (
        <p className="text-black px-6">Loading recent supporters...</p>
      ) : (
        <div className="mb-6 text-black">
          <h2 className="text-lg font-semibold mb-2">Recent Supporters</h2>
          <div className="space-y-2">
            {recentSupporters.map((supporter, index) => (
              <div key={index} className="flex items-center space-x-2 bg-gray-50 p-2 rounded">
                <Image
                  src={sona}
                  alt={supporter.name}
                  width={40}
                  height={40}
                  className="rounded-full bg-gray-600 w-12 h-12"
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
      )}
    </>
  )
}

