"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import EarningsSummary from "@/components/ui/dashboard/EarningsSummary"
import DonationLink from "@/components/ui/dashboard/DonationLink"
import DonationChart from "@/components/ui/dashboard/DonationChart"
import WithdrawFunds from "@/components/ui/dashboard/WithdrawFunds"
import RecentDonations from "@/components/ui/dashboard/RecentDonations"
import { supabase } from "@/config/supabase"
import { useAppKitAccount } from "@reown/appkit/react"
import { toast } from "sonner"

export default function DashboardPage() {
  const [selectedChart, setSelectedChart] = useState<"weekly" | "monthly">("weekly")
  const { address } = useAppKitAccount()
  const [creator, setCreator] = useState<{ username: string; wallet_address: string; bio: string }>({
    username: "",
    wallet_address: "",
    bio: ""
  })
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    async function fetchCreator() {
      const { data, error } = await supabase.from("creators").select("username, wallet_address, bio").eq("wallet_address", address).single()
      if (error) {
        setLoading(false)
        console.error("Error fetching creator:", error)
        toast.error("Error fetching creator")
      } else {
        setLoading(false)
        setCreator(data)
      }
    }

    fetchCreator()
  }, [address])

  console.log(creator);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        <div className="lg:col-span-2">
          <EarningsSummary creatorWallet="address" />
        </div>
        <div>
          <DonationLink loading={loading} username={creator.username} />
        </div>
        <div className="lg:col-span-2">
          <DonationChart selectedChart={selectedChart} setSelectedChart={setSelectedChart} />
        </div>
        <div>
          <WithdrawFunds />
        </div>
        <div className="lg:col-span-3">
          <RecentDonations creatorWallet="address" />
        </div>
      </motion.div>
    </>
  )
}

