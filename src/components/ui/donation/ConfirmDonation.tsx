import { useAppKitConnection } from "@reown/appkit-adapter-solana/react";
import {
  PublicKey,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import { useAppKitAccount, useAppKitProvider } from "@reown/appkit/react";
import type { Provider } from "@reown/appkit-adapter-solana/react";
import { toast } from "sonner";
import { useState } from "react";
import { supabase } from "@/config/supabase";

export default function ConfirmDonation({
  amount,
  paymentMethod,
  wallet_address,
  onConfirm,
}: {
  amount: number;
  paymentMethod: "crypto" | "fiat" | null;
  wallet_address: string;
  onConfirm: () => void;
}) {
  const { isConnected, address } = useAppKitAccount();
  const { connection } = useAppKitConnection();
  const { walletProvider } = useAppKitProvider<Provider>("solana");
  const [loading, setLoading] = useState(false);

  // function to send a TX
  const handleSendTx = async () => {
    setLoading(true);
    try {
      if (connection && address) {
        const latestBlockhash = await connection.getLatestBlockhash();
        const wallet = new PublicKey(address);
        const balance = await connection?.getBalance(wallet); // get the amount in LAMPORTS

        console.log(`${balance / LAMPORTS_PER_SOL} SOL`);

        // create the transaction
        const transaction = new Transaction({
          feePayer: wallet,
          recentBlockhash: latestBlockhash?.blockhash,
        }).add(
          SystemProgram.transfer({
            fromPubkey: wallet,
            toPubkey: new PublicKey(wallet_address), // destination address
            lamports: amount * LAMPORTS_PER_SOL,
          })
        );

        // raise the modal
        const signature = await walletProvider.sendTransaction(
          transaction,
          connection
        );

        if (!signature) {
          toast.error("Transaction Failed");
        }
        const { error } = await supabase.from("donations").insert([
          {
            donor_wallet: wallet,
            creator_wallet: wallet_address,
            amount: amount,
            tx_signature: signature,
            token: 'SOL',
          },
        ]);

        if (error) {
          toast.error(
            `Something went wrong while trying to save donation info ${error.message}`
          );
        }
        // print the Transaction Signature
        console.log(signature);
        onConfirm();
        toast.success(`Transaction successfull: , ${signature as string}`);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Transaction Failed");
    }
  };

  return (
    <div className="space-y-4 text-black">
      <h2 className="text-lg font-semibold mb-2">Confirm Your Donation</h2>
      <div className="bg-gray-50 p-4 rounded-md">
        <p className="font-medium">Amount: {amount} SOL</p>
        <p className="text-sm text-gray-600">
          Payment Method:{" "}
          {paymentMethod === "crypto" ? "Crypto Wallet" : "Credit/Debit Card"}
        </p>
      </div>
      {isConnected && (
        <button
          onClick={handleSendTx}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {loading ? "Sending Donation...." : "Confirm and Send Donation"}
        </button>
      )}
    </div>
  );
}
