import type React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Users } from "lucide-react";
import { supabase } from "@/config/supabase";

const EarningsSummary: React.FC<{ creatorWallet: string }> = ({ creatorWallet }) => {
  const [totalDonations, setTotalDonations] = useState<number>(0);
  const [recentDonations, setRecentDonations] = useState<number>(0);
  
  const [percentageChange, setPercentageChange] = useState<number>(0)
  const [totalSupporters, setTotalSupporters] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("donations")
        .select("amount, donor_wallet, created_at")
        .eq("creator_wallet", creatorWallet);

      if (error) {
        console.error("Error fetching donations:", error);
        return;
      }

      const total = data.reduce((sum, d) => sum + d.amount, 0);
      const lastMonthTotal = data
        .filter((d) => new Date(d.created_at) >= new Date(new Date().setDate(new Date().getDate() - 30)))
        .reduce((sum, d) => sum + d.amount, 0);

      setTotalDonations(total);
      setRecentDonations(lastMonthTotal);
      setPercentageChange(Number(lastMonthTotal ? ((lastMonthTotal / total) * 100).toFixed(2) : 0));
      setTotalSupporters(new Set(data.map((d) => d.donor_wallet)).size);
    };

    fetchData();
  }, [creatorWallet]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
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
        <span>{totalSupporters} total supporters</span>
      </div>
    </motion.div>
  );
};

export default EarningsSummary;
