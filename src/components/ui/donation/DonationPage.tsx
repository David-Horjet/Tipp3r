"use client"

import { useEffect, useState } from "react"
import CreatorProfile from "./CreatorProfile"
import RecentSupporters from "./RecentSupporters"
import DonationForm from "./DonationForm"
import PaymentMethodSelection from "./PaymentMethodSelection"
import ConfirmDonation from "./ConfirmDonation"
import ThankYouMessage from "./ThankYouMessage"
import Link from "next/link"
import { useAppKit, useAppKitAccount } from "@reown/appkit/react"
import { supabase } from "@/config/supabase"
import { toast } from "sonner"

type DonationStep = "amount" | "payment" | "confirm" | "success"

export default function DonationPage({ username }: { username: string }) {
  const [step, setStep] = useState<DonationStep>("amount")
  const [amount, setAmount] = useState<number>(0)
  const [paymentMethod, setPaymentMethod] = useState<"crypto" | "fiat" | null>(null)
  const { open } = useAppKit()
  const { isConnected, address } = useAppKitAccount()

  const [creator, setCreator] = useState<{ username: string; wallet_address: string; bio: string }>({
    username: "",
    wallet_address: "",
    bio: ""
  })
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    async function fetchCreator() {
      const { data, error } = await supabase.from("creators").select("username, wallet_address, bio").eq("username", username.toLowerCase()).single()
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
  }, [username])

  console.log(creator);

  const handleAmountSubmit = (value: number) => {
    setAmount(value)
    setStep("payment")
  }

  const handlePaymentMethodSelect = (method: "crypto" | "fiat") => {
    setPaymentMethod(method)
    open()
    if (isConnected && address) {
      setStep("confirm")
    }
  }

  const handleConfirmDonation = () => {
    // Here you would typically process the donation
    // For now, we'll just move to the success step
    setStep("success")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="flex py-5 justify-center">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-indigo-600">Tipp3r</span>
          </Link>
        </div>
        <CreatorProfile username={creator.username} bio={creator.bio} loading={loading} />
        <div className="p-6">
          <RecentSupporters wallet_address={creator.wallet_address} loading={loading} />
          {step === "amount" && <DonationForm onSubmit={handleAmountSubmit} />}
          {step === "payment" && <PaymentMethodSelection onSelect={handlePaymentMethodSelect} />}
          {step === "confirm" && (
            <ConfirmDonation amount={amount} paymentMethod={paymentMethod} onConfirm={handleConfirmDonation} />
          )}
          {step === "success" && <ThankYouMessage username={username} />}
        </div>
      </div>
    </div>
  )
}

