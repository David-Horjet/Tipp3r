import type React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/config/supabase";

interface Donation {
  id: number
  donor_wallet: string
  amount: number
  created_at: string
  token: string
}

const RecentDonations: React.FC<{ creatorWallet: string }> = ({ creatorWallet }) => {
  const [donations, setDonations] = useState<Donation[]>([]);

  useEffect(() => {
    const fetchRecentDonations = async () => {
      const { data, error } = await supabase
        .from("donations")
        .select("id, donor_wallet, amount, created_at, token")
        .eq("creator_wallet", creatorWallet)
        .order("created_at", { ascending: false })
        .limit(5);

      if (error) {
        console.error("Error fetching donations:", error);
        return;
      }

      setDonations(data);
    };

    fetchRecentDonations();
  }, [creatorWallet]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Recent Donations</h2>
      <div className="overflow-x-auto">
        {donations.length < 1 ? (
          <span>
            You have no donations yet
          </span>
        ) : (
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Wallet
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Token
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation, index) => (
                <motion.tr
                  key={donation.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {donation.donor_wallet}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${donation.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donation.token}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(donation.created_at).toLocaleDateString()}
                  </td>
                </motion.tr>
              ))}
            </tbody>

          </table>
        )}
      </div>
    </div>
  );
};

export default RecentDonations;
