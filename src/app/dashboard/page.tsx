"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import EarningsSummary from "@/components/ui/dashboard/EarningsSummary"
import DonationLink from "@/components/ui/dashboard/DonationLink"
import DonationChart from "@/components/ui/dashboard/DonationChart"
import WithdrawFunds from "@/components/ui/dashboard/WithdrawFunds"
import RecentDonations from "@/components/ui/dashboard/RecentDonations"
import { useAppKitAccount } from "@reown/appkit/react"

export default function DashboardPage() {
  const [selectedChart, setSelectedChart] = useState<"weekly" | "monthly">("weekly")
  // const { address } = useAppKitAccount()

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
          <DonationLink />
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

